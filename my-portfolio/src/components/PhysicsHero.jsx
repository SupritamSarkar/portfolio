import React from 'react';
import Gravity, { MatterBody } from './Gravity';
import { ArrowDown, Building2, Code, Zap, MapPin, Trophy } from 'lucide-react';

const PhysicsHero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      {/* Header */}
      <div className="hero-header mt-10">
        <div className="hero-email">
          <span className="w-8 h-8 bg-black rounded flex items-center justify-center">
            <span className="text-white text-base">✉</span>
          </span>
          <a href="mailto:supritamsarkar481@gmail.com" className="font-semibold hover:underline uppercase text-xl tracking-wide">
            SUPRITAMSARKAR481@GMAIL.COM
          </a>
        </div>
        <span className="text-gray-400 mx-4 text-xl">↳</span>
        <span className="uppercase text-2xl font-semibold tracking-wide">FULL STACK / WEB DEVELOPER</span>
        <span className="text-base text-gray-400 ml-auto">*Building things that matter</span>
      </div>

      {/* Physics Container */}
      <Gravity
        gravity={{ x: 0, y: 1 }}
        className="w-full"
        style={{ height: '380px' }}
      >
        {/* FULL STACK DEV - White box */}
        <MatterBody
          x="20%"
          y="20%"
          matterBodyOptions={{ friction: 0.4, restitution: 0.6 }}
        >
          <div className="flex items-center gap-5 px-8 py-5 bg-white border-2 border-black rounded-full text-lg font-bold select-none">
            <span className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Code size={24} className="text-white" />
            </span>
            FULL STACK DEV
          </div>
        </MatterBody>

        {/* TECH ENTHUSIAST - White box */}
        <MatterBody
          x="50%"
          y="15%"
          matterBodyOptions={{ friction: 0.4, restitution: 0.6 }}
        >
          <div className="flex items-center gap-5 px-8 py-5 bg-white border-2 border-black rounded-full text-lg font-bold select-none">
            <span className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Zap size={24} className="text-white" />
            </span>
            TECH ENTHUSIAST
          </div>
        </MatterBody>

        {/* KOLKATA - Black box */}
        <MatterBody
          x="75%"
          y="20%"
          matterBodyOptions={{ friction: 0.4, restitution: 0.6 }}
        >
          <div className="flex items-center gap-5 px-8 py-5 bg-black text-white border-2 border-black rounded-full text-lg font-bold select-none">
            <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <MapPin size={24} className="text-black" />
            </span>
            KOLKATA
          </div>
        </MatterBody>

        {/* 350+ DSA - White box */}
        <MatterBody
          x="35%"
          y="40%"
          matterBodyOptions={{ friction: 0.4, restitution: 0.6 }}
        >
          <div className="flex items-center gap-5 px-8 py-5 bg-white border-2 border-black rounded-full text-lg font-bold select-none">
            <span className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
              <Trophy size={24} className="text-white" />
            </span>
            DSA
          </div>
        </MatterBody>

        {/* Black Circle 1 - Arrow (Clickable) */}
        <MatterBody
          x="85%"
          y="10%"
          matterBodyOptions={{ friction: 0.3, restitution: 0.7 }}
        >
          <div 
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center select-none cursor-pointer hover:bg-gray-800 transition-colors"
            onClick={scrollToProjects}
            style={{ pointerEvents: 'auto' }}
          >
            <ArrowDown size={28} className="text-white" />
          </div>
        </MatterBody>

        {/* Black Circle 2 - Lightning icon */}
        <MatterBody
          x="65%"
          y="35%"
          matterBodyOptions={{ friction: 0.3, restitution: 0.7 }}
        >
          <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center select-none">
            <Zap size={28} className="text-white" />
          </div>
        </MatterBody>
      </Gravity>

      {/* Name Section */}
      <div className="flex items-end justify-between mt-2">
        <h1 className="hero-name">SUPRITAM SARKAR</h1>
      </div>
    </section>
  );
};

export default PhysicsHero;
