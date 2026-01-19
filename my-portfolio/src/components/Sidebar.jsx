import React from 'react';
import { User, Briefcase, MapPin } from 'lucide-react';

const Sidebar = ({ activeSection, onSectionChange, onProfileClick, isModalOpen }) => {
  return (
    <aside className={`sidebar ${isModalOpen ? 'blur-sm pointer-events-none' : ''}`}>
      {/* Profile Section */}
      <div className="sidebar-profile mt-10">
        <img 
          src="/pic.png" 
          alt="Supritam Sarkar"
          className="w-24 h-24 rounded-full mb-4 shadow-lg object-cover"
        />
        <h2 className="font-bold text-2xl tracking-tight">Supritam</h2>
        <h2 className="font-bold text-2xl tracking-tight -mt-1">Sarkar</h2>
        <p className="text-md text-gray-500 flex items-center gap-1.4 mt-2">
          @supritamsarkar · <MapPin size={12} /> India
        </p>
        <p className="text-md font-semibold text-gray-800 mt-3">Full Stack Developer</p>
        <p className="text-md text-gray-500 mt-1">B.Tech IT @ IIEST Shibpur</p>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav mt-6">
        <div 
          className={`sidebar-nav-item ${activeSection === 'profile' ? 'active' : ''}`}
          onClick={() => {
            if (onProfileClick) onProfileClick();
          }}
        >
          <User size={20} />
          <span className="text-base font-medium">Profile</span>
        </div>
        <div 
          className={`sidebar-nav-item ${activeSection === 'portfolio' ? 'active' : ''}`}
          onClick={() => onSectionChange('portfolio')}
        >
          <Briefcase size={20} />
          <span className="text-base font-medium">Portfolio</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
