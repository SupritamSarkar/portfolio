import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    'linear-gradient(135deg, #1DB954 0%, #191414 100%)',
    'linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%)',
  ];

  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <div className="project-card block">
      <a 
        href={project.live} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div 
          className="project-card-image flex items-center justify-center"
          style={{ background: project.gradient || randomGradient }}
        >
          <span className="text-white text-5xl font-bold opacity-30">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="project-card-content">
          <h3 className="project-card-title">
            {project.title}
            <ExternalLink size={14} className="text-gray-400" />
          </h3>
          <p className="project-card-subtitle">{project.description}</p>
        </div>
      </a>
      
      <div className="project-card-content pt-0">
        <div className="flex items-center justify-between">
          <p className="project-card-date">{project.date}</p>
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-black transition-colors"
            >
              <Github size={16} />
            </a>
          )}
        </div>
        {project.tech && (
          <div className="flex flex-wrap gap-1 mt-3">
            {project.tech.slice(0, 3).map((tech, i) => (
              <span 
                key={i}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
