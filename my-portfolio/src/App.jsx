import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PhysicsHero from './components/PhysicsHero';
import ProjectCard from './components/ProjectCard';
import ProfileModal from './components/ProfileModal';
import SkillsMarquee from './components/SkillsMarquee';
import { Linkedin, Github, Mail, ExternalLink, Twitter } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('portfolio');
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );

  // Update time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const projects = [
    {
      title: 'PaperCode',
      description: 'ML learning platform with research papers & coding problems',
      date: 'December 2025 - Present',
      tech: ['Next.js', 'FastAPI', 'PostgreSQL', 'Supabase'],
      live: 'https://papercode.in',
      github: 'https://github.com/cneuralnetwork/papercode',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    },
    {
      title: 'Expenzy',
      description: 'Full-stack MERN Expense Tracker with AI insights',
      date: 'June 2025',
      tech: ['React', 'Node.js', 'MongoDB', 'Gemini API'],
      live: 'https://expenzy.netlify.app',
      github: 'https://github.com/SupritamSarkar/expense-tracker',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
    },
    {
      title: 'NewApply',
      description: 'Job application tracking and management system',
      date: '2025',
      tech: ['React', 'Node.js', 'MongoDB'],
      live: 'https://newapply.netlify.app/',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    },
    {
      title: 'GateQuest',
      description: 'GATE exam preparation platform with practice tests',
      date: '2025',
      tech: ['React', 'Node.js'],
      live: 'https://gatequest.netlify.app/',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    },
    {
      title: 'Inspix',
      description: 'Full-featured Wallpaper application with auth & uploads',
      date: 'March 2025',
      tech: ['Node.js', 'Express', 'MongoDB', 'EJS'],
      live: 'https://inspix.netlify.app',
      github: 'https://github.com/SupritamSarkar/Inspix',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    },
    {
      title: 'AI Job Board',
      description: 'AI-powered job search and matching platform',
      date: '2025',
      tech: ['React', 'AI/ML', 'Node.js'],
      live: 'https://ai-job-board-henna.vercel.app',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    },
  ];

  const socialLinks = [
    { 
      label: 'LINKEDIN', 
      url: 'https://www.linkedin.com/in/supritam-sarkar-327778322/',
      icon: Linkedin 
    },
    { 
      label: 'GITHUB', 
      url: 'https://github.com/SupritamSarkar',
      icon: Github 
    },
    { 
      label: 'LEETCODE', 
      url: 'https://leetcode.com/u/supritam_sarkar_0808/',
      icon: ExternalLink 
    },
    { 
      label: 'CODEFORCES', 
      url: 'https://codeforces.com/profile/alwaysAnewbie',
      icon: ExternalLink 
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Modal */}
      <ProfileModal 
        isOpen={showProfileModal} 
        onClose={() => setShowProfileModal(false)} 
      />

      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        onProfileClick={() => setShowProfileModal(true)}
        isModalOpen={showProfileModal}
      />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section with Physics */}
        <PhysicsHero />

        {/* Selected Projects Section */}
        <section id="projects" className="projects-section">
          <div className="section-header">
            <h2 className="section-title">SELECTED PROJECTS</h2>
            <span className="section-date">2025 - present</span>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* Additional Projects Section */}
        <section className="projects-section" style={{ background: '#fafafa' }}>
          <div className="section-header">
            <h2 className="section-title">ADDITIONAL PROJECTS</h2>
            <p className="text-sm text-gray-500 max-w-md">
              Here are some of my other projects, ranging from full-stack applications 
              to specialized tools and platforms
            </p>
          </div>
          <div className="projects-grid">
            {projects.slice(2).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">ABOUT ME</h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-gray-700 leading-relaxed mb-6">
              I'm a <strong>Full Stack Developer</strong> and B.Tech student in Information Technology 
              at <strong>IIEST Shibpur</strong> with a CGPA of <strong>8.61</strong>. I specialize in 
              building web applications using modern technologies like React, Next.js, Node.js, 
              and various databases.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I've solved <strong>350+ DSA problems</strong> on LeetCode (contest rating 1681) and 
              maintain a Pupil rating on Codeforces (max 1282). I'm passionate about creating 
              innovative solutions that make a real impact.
            </p>
          </div>
          
          {/* Skills Marquee */}
          <SkillsMarquee />
        </section>

        {/* Achievements Section */}
        <section className="projects-section" style={{ background: '#fafafa' }}>
          <div className="section-header">
            <h2 className="section-title">ACHIEVEMENTS & CERTIFICATIONS</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-2">350+ DSA Problems</h3>
              <p className="text-gray-600 text-sm">
                Solved on LeetCode with a contest rating of 1681
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-2">Codeforces Pupil</h3>
              <p className="text-gray-600 text-sm">
                Maximum rating of 1282 on Codeforces
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-2">HackSprint Winner</h3>
              <p className="text-gray-600 text-sm">
                Winner of the HackSprint Hackathon in college
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-bold text-lg mb-2">Java Badge</h3>
              <p className="text-gray-600 text-sm">
                Earned Java Badge on HackerRank
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-left">
            <p>AVAILABLE FOR OPPORTUNITIES</p>
          </div>
          <div className="footer-links">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-time">{currentTime}</div>
        </footer>
      </main>
    </div>
  );
};

export default App;