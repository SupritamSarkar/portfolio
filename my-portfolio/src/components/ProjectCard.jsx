import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card block">
      <a 
        href={project.live} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <div 
          className="project-card-image overflow-hidden"
        >
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-400 text-5xl font-bold opacity-30">
                {project.title.charAt(0)}
              </span>
            </div>
          )}
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
