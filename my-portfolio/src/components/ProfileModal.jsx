import React from 'react';
import { X, MapPin, Github, Linkedin, Mail, ExternalLink, Code, Trophy, GraduationCap } from 'lucide-react';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const skills = ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'FastAPI', 'Tailwind'];
  
  const socialLinks = [
    { icon: Github, url: 'https://github.com/SupritamSarkar', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/supritam-sarkar-327778322/', label: 'LinkedIn' },
    { icon: Mail, url: 'mailto:supritamsarkar481@gmail.com', label: 'Email' },
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl p-8 max-w-xl w-full mx-4 shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
        >
          <X size={20} />
        </button>

        {/* Header with avatar and basic info */}
        <div className="flex items-start gap-5 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg flex-shrink-0">
            SS
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-black leading-tight">Supritam Sarkar</h2>
            <p className="text-gray-500 text-sm flex items-center gap-1.5 mt-1">
              @supritamsarkar · <MapPin size={12} /> India
            </p>
            <div className="flex gap-2 mt-3">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-black rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <link.icon size={14} className="text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <GraduationCap size={18} className="text-purple-600" />
              <span className="font-bold text-xl text-gray-900">8.61</span>
            </div>
            <p className="text-xs text-gray-500">CGPA @ IIEST</p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Code size={18} className="text-green-600" />
              <span className="font-bold text-xl text-gray-900">350+</span>
            </div>
            <p className="text-xs text-gray-500">DSA Problems</p>
          </div>
          <div className="flex-1 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Trophy size={18} className="text-yellow-600" />
              <span className="font-bold text-xl text-gray-900">1681</span>
            </div>
            <p className="text-xs text-gray-500">LC Rating</p>
          </div>
        </div>

        {/* About section */}
        <div className="mb-6">
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">About</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Full Stack Developer passionate about building innovative web applications. Currently pursuing B.Tech in Information Technology at IIEST Shibpur. I specialize in React, Next.js, and Node.js, with a strong foundation in competitive programming and problem-solving.
          </p>
        </div>

        {/* Skills section */}
        <div>
          <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-3">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span 
                key={i}
                className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium hover:bg-gray-200 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full opacity-50 pointer-events-none" />
        <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full opacity-50 pointer-events-none" />
      </div>
    </div>
  );
};

export default ProfileModal;
