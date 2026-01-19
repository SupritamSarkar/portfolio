import React from 'react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiTypescript, 
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiFastapi,
  SiTailwindcss,
  SiGit,
  SiPython,
  SiExpress,
  SiDocker
} from 'react-icons/si';

const SkillsMarquee = () => {
  const skills = [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'FastAPI', Icon: SiFastapi, color: '#009688' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Git', Icon: SiGit, color: '#F05032' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'Express', Icon: SiExpress, color: '#000000' },
    { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
  ];

  // Duplicate skills for seamless loop
  const duplicatedSkills = [...skills, ...skills];

  return (
    <div className="skills-marquee-container">
      <div className="skills-marquee">
        {duplicatedSkills.map((skill, index) => (
          <div key={index} className="skill-item">
            <skill.Icon className="skill-icon" style={{ color: skill.color }} />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsMarquee;
