import React, { useEffect, useRef, useState, createContext, useContext } from 'react';
import Matter from 'matter-js';

// Context to share engine between Gravity and MatterBody
const GravityContext = createContext(null);

// MatterBody component - a draggable physics body
export const MatterBody = ({ 
  children, 
  x = '50%', 
  y = '50%', 
  angle = 0,
  matterBodyOptions = {}
}) => {
  const ref = useRef(null);
  const bodyRef = useRef(null);
  const initializedRef = useRef(false);
  const context = useContext(GravityContext);
  const [position, setPosition] = useState({ x: 0, y: 0, angle: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Measure dimensions once on mount
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, []);

  // Create physics body only once when engine is ready
  useEffect(() => {
    if (!context?.engine || !context?.containerRef?.current || !ref.current) return;
    if (initializedRef.current) return;
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const container = context.containerRef.current;
    const containerRect = container.getBoundingClientRect();

    const parsePosition = (val, max) => {
      if (typeof val === 'string' && val.endsWith('%')) {
        return (parseFloat(val) / 100) * max;
      }
      return parseFloat(val);
    };

    const initialX = parsePosition(x, containerRect.width);
    const initialY = parsePosition(y, containerRect.height);

    setPosition({ x: initialX, y: initialY, angle: (angle * Math.PI) / 180 });

    const body = Matter.Bodies.rectangle(
      initialX,
      initialY,
      dimensions.width,
      dimensions.height,
      {
        angle: (angle * Math.PI) / 180,
        friction: 0.5,
        restitution: 0.5,
        frictionAir: 0.01,
        ...matterBodyOptions,
        render: { visible: false }
      }
    );

    bodyRef.current = body;
    Matter.World.add(context.engine.world, body);
    initializedRef.current = true;

    const updatePosition = () => {
      if (bodyRef.current) {
        setPosition({
          x: bodyRef.current.position.x,
          y: bodyRef.current.position.y,
          angle: bodyRef.current.angle
        });
      }
    };

    Matter.Events.on(context.engine, 'afterUpdate', updatePosition);

    return () => {
      Matter.Events.off(context.engine, 'afterUpdate', updatePosition);
      if (bodyRef.current && context.engine) {
        Matter.World.remove(context.engine.world, bodyRef.current);
      }
      initializedRef.current = false;
    };
  }, [context?.engine, dimensions.width, dimensions.height]);

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        left: position.x - dimensions.width / 2,
        top: position.y - dimensions.height / 2,
        transform: `rotate(${position.angle}rad)`,
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'none',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    >
      {children}
    </div>
  );
};

// Main Gravity component
const Gravity = ({ 
  children, 
  gravity = { x: 0, y: 1 },
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const engineRef = useRef(null);
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { Engine, Render, World, Bodies, Mouse, MouseConstraint, Runner } = Matter;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Create engine
    const newEngine = Engine.create({ gravity });
    engineRef.current = newEngine;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'auto';
    canvas.style.zIndex = '10';
    container.appendChild(canvas);
    canvasRef.current = canvas;

    const render = Render.create({
      canvas: canvas,
      engine: newEngine,
      options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent',
        pixelRatio: 1
      }
    });

    // Create walls
    const wallThickness = 100;
    const walls = [
      Bodies.rectangle(width / 2, height + wallThickness / 2 - 10, width + wallThickness * 2, wallThickness, { 
        isStatic: true, 
        render: { visible: false },
        friction: 1,
        restitution: 0.3
      }),
      Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, height * 2, { 
        isStatic: true, 
        render: { visible: false } 
      }),
      Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, height * 2, { 
        isStatic: true, 
        render: { visible: false } 
      }),
      Bodies.rectangle(width / 2, -wallThickness / 2, width + wallThickness * 2, wallThickness, { 
        isStatic: true, 
        render: { visible: false } 
      }),
    ];

    World.add(newEngine.world, walls);

    // Mouse constraint
    const mouse = Mouse.create(canvas);
    const mouseConstraint = MouseConstraint.create(newEngine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        damping: 0.3,
        render: { visible: false }
      }
    });

    World.add(newEngine.world, mouseConstraint);
    render.mouse = mouse;

    // Cursor handling
    let isDragging = false;

    Matter.Events.on(mouseConstraint, 'startdrag', () => {
      isDragging = true;
      canvas.style.cursor = 'grabbing';
    });

    Matter.Events.on(mouseConstraint, 'enddrag', () => {
      isDragging = false;
      canvas.style.cursor = 'default';
    });

    Matter.Events.on(mouseConstraint, 'mousemove', (event) => {
      if (isDragging) return;
      
      const bodies = Matter.Composite.allBodies(newEngine.world);
      const mousePos = event.source.mouse.position;
      let isOverBody = false;

      for (const body of bodies) {
        if (!body.isStatic && Matter.Bounds.contains(body.bounds, mousePos)) {
          if (Matter.Vertices.contains(body.vertices, mousePos)) {
            isOverBody = true;
            break;
          }
        }
      }

      canvas.style.cursor = isOverBody ? 'grab' : 'default';
    });

    // Start
    const runner = Runner.create();
    Runner.run(runner, newEngine);
    Render.run(render);

    // Set engine state AFTER everything is set up
    setEngine(newEngine);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      const newWidth = containerRef.current.clientWidth;
      const newHeight = containerRef.current.clientHeight;

      canvas.width = newWidth;
      canvas.height = newHeight;
      render.options.width = newWidth;
      render.options.height = newHeight;

      Matter.Body.setPosition(walls[0], { x: newWidth / 2, y: newHeight + wallThickness / 2 - 10 });
      Matter.Body.setPosition(walls[2], { x: newWidth + wallThickness / 2, y: newHeight / 2 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render);
      Runner.stop(runner);
      World.clear(newEngine.world);
      Engine.clear(newEngine);
      canvas.remove();
      engineRef.current = null;
      setEngine(null);
    };
  }, []);

  return (
    <GravityContext.Provider value={{ engine, containerRef }}>
      <div 
        ref={containerRef}
        className={className}
        style={{
          position: 'relative',
          overflow: 'hidden',
          ...style
        }}
      >
        {engine && children}
      </div>
    </GravityContext.Provider>
  );
};

export default Gravity;
