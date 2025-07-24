import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Code,
  Award,
  Briefcase,
  Cpu,
  Database,
  Wrench,
  Menu,
  X,
  Phone,
  MapPin,
  Send,
  Star,
  Target,
  Trophy,
} from "lucide-react";

// Main App Component
const App = () => {


;


  const handleNavClick = (item) => {
    scrollToSection(item);
  };

    const navLinks = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  const achievements = [
    {
      title: "Java Badge on HackerRank",
      description:
        "Earned recognition for proficiency in Java programming through HackerRank's comprehensive evaluation",
      icon: Award,
      category: "Certification",
      date: "2024",
    },
    {
      title: "ReactJS Foundations Course",
      description:
        "Successfully completed comprehensive ReactJS course by Scrimba, mastering modern React development",
      icon: Trophy,
      category: "Course Completion",
      date: "2024",
    },
    {
      title: "Technology Job Simulation",
      description:
        "Participated in Technology Job Simulation via Forage in partnership with Deloitte",
      icon: Target,
      category: "Professional Experience",
      date: "2024",
    },
    {
      title: "200+ DSA Problems Solved",
      description:
        "Solved over 200 Data Structures and Algorithms problems on LeetCode and GeeksforGeeks using Java",
      icon: Star,
      category: "Technical Achievement",
      date: "Ongoing",
    },
  ];

  const stats = [
    { number: "8.57", label: "CGPA", description: "Academic Excellence" },
    { number: "250+", label: "DSA Problems", description: "Problem Solving" },
    {
      number: "3+",
      label: "Major Projects",
      description: "Hands-on Experience",
    },
    { number: "10+", label: "Technologies", description: "Technical Stack" },
  ];

  // Data extracted from the images
  const portfolioData = {
    name: "Supritam Sarkar",
    tagline: "Full Stack Developer & Tech Enthusiast",
    intro:
      "Currently pursuing B.Tech in Information Technology at IIEST Shibpur. Passionate about creating innovative web solutions with modern technologies and solving complex problems through code.",
    stats: [
      { label: "CGPA", value: "8.57" },
      { label: "DSA Problems", value: "200+" },
      { label: "Major Projects", value: "3+" },
    ],

    skills: {
      Languages: { Java: "85%", JavaScript: "75%", C: "70%" },
      Frontend: { React: "85%", "HTML/CSS": "90%", "Tailwind CSS": "85%" },
      Backend: { "Node.js": "80%", Express: "80%", MongoDB: "75%" },
      "Tools & Platforms": {
        "Git/GitHub": "80%",
        "Netlify/Render": "85%",
        "VS Code": "90%",
      },
      technologies: [
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Tailwind CSS",
        "Git",
        "GitHub",
        "HTML5",
        "CSS3",
        "Java",
        "C",
        "Netlify",
        "VS Code",
        "Postman",
      ],
    },
    projects: [
      {
        title: "Expenzy",
        date: "June 2025",
        description:
          "A comprehensive financial tracker with authentication, dynamic charting, and robust transaction management for personal finance tracking.",
        features: [
          "JWT-based authentication for secure user sessions",
          "Real-time income/expense tracking with visual charts",
          "Deployment with using Netlify and Render",
        ],
        tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Gemini API"],
        github: "https://github.com/SupritamSarkar/expense-tracker",
        live: "https://expenzy.netlify.app",
      },
      {
        title: "Inspix",
        date: "March 2025",
        description:
          "A full-featured Wallpaper application with user authentication, image uploads, and real-time updates using modern web technologies.",
        features: [
          "User authentication with Passport.js and MongoDB sessions",
          "Full CRUD operations for image uploads with metadata",
          "Real-time updates boosting user interaction by 60%",
        ],
        tech: ["Node.js", "Express", "MongoDB", "EJS", "Passport"],
        github: "https://github.com/SupritamSarkar/Inspix",
        live: "https://inspix.netlify.app",
      },
      {
        title: "AI Image Enhancer",
        date: "April 2025",
        description:
          "An AI-powered image enhancement tool with responsive UI and seamless public access for improving image quality.",
        features: [
          "PicWish API integration for image enhancement up to 75%",
          "Responsive UI with side by side previews and downloads",
          "2 second load times with optimized performance",
        ],
        tech: ["React", "Vite", "Tailwind CSS", "PicWish API"],
        github: "https://github.com/SupritamSarkar/ImageEnhanced",
        live: "https://ssimageenhance.netlify.app",
      },
    ],
    contact: {
      email: "supritamsarkar181@gmail.com",
      phone: "+91-7489591197",
      location: "Kolkata, West Bengal",
      socials: {
        github: {
          label: "GitHub",
          desc: "View my code and projects",
          url: "https://github.com/SupritamSarkar",
        },
        linkedin: {
          label: "LinkedIn",
          desc: "Connect professionally",
          url: "https://www.linkedin.com/in/supritam-sarkar-327778322",
        },
        leetcode: {
          label: "LeetCode",
          desc: "Check my problem-solving",
          url: "https://leetcode.com/u/supritam_sarkar_0808/",
        },
      },
      availability: [
        "Internship Opportunities",
        "Freelance Projects",
        "Open Source Contributions",
        "Technical Discussions",
      ],
    },
  };


  // Smooth scroll to section by id
  const scrollToSection = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Reusable component for section animations
// Reusable component for section animations
const AnimatedSection = ({ children, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 }); // 'once' removed
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <motion.section
      id={id}
      ref={ref}
      className="py-32 px-6 relative z-10"
      initial={{ opacity: 0, y: 50 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
       viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

  return (
    <div className="bg-[#0A0A0A] text-gray-300 font-sans antialiased relative">
      {/* Custom Scrollbar & Styles */}
      <style>{`
                ::-webkit-scrollbar { width: 8px; }
                ::-webkit-scrollbar-track { background: #1a1a1a; }
                ::-webkit-scrollbar-thumb { background: linear-gradient(to bottom, #8A2BE2, #4B0082); border-radius: 10px; }
                .text-glow { text-shadow: 0 0 8px rgba(138, 43, 226, 0.8), 0 0 20px rgba(138, 43, 226, 0.4); }
                .card-glow { box-shadow: 0 0 20px rgba(138, 43, 226, 0.1), 0 0 40px rgba(75, 0, 130, 0.1); }
                .button-glow { box-shadow: 0 0 15px rgba(138, 43, 226, 0.5); }
                .purple-gradient-text { background: -webkit-linear-gradient(#A044FF, #6A3093); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
            `}</style>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b-2 border-purple-900/40 shadow-lg shadow-purple-900/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavClick("Home")}
            className="text-2xl font-bold text-purple-400"
          >
            SS
          </a>

          {/* Navigation Links (desktop only) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => handleNavClick(link)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Let's Talk Button (always visible on all screen sizes) */}
          <a
            href="#contact"
            onClick={() => handleNavClick("Contact")}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:opacity-90 transition-opacity duration-300 button-glow"
          >
            Let's Talk
          </a>
        </div>
      </header>

      <main className="container mx-auto pt-6 relative">
        {/* Hero Section */}
        <AnimatedSection
          id="home"
          className="min-h-screen flex items-center justify-start relative overflow-hidden px-6"
        >
          {/* Optional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />

          {/* Floating Gradient Circles */}
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-blue-600/30 backdrop-blur-md opacity-20 animate-float z-10 shadow-lg shadow-blue-300/20  float-animation" />

          <div className="absolute top-20 right-40 w-62 h-62 rounded-full bg-gradient-to-br from-purple-600 to-blue-600/30 opacity-30 float-animation" />
          <div
            className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-purple-600 to-blue-600/30 opacity-30 float-animation"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600/30 opacity-50 float-animation"
            style={{ animationDelay: "4s" }}
          />

          <div className="relative z-10 max-w-4xl">
            <div className="text-left">
              {/* Greeting */}
              <p className="text-accent mb-4 animate-fade-up animation-delay-300 text-lg">
                Hi there! I'm
              </p>

              {/* Name */}
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-up-delay-1">
                <span className="bg-gradient-to-br from-purple-600 to-blue-600/30 text-transparent bg-clip-text backdrop-blur-md">
                  Supritam Sarkar
                </span>
              </h1>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-up-delay-2">
                Full Stack Developer & Tech Enthusiast
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-up-delay-3">
                Currently pursuing B.Tech in Information Technology at IIEST
                Shibpur. Passionate about creating innovative web solutions with
                modern technologies and solving complex problems through code.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-left animate-fade-up-delay-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-gradient-to-br from-purple-600 to-blue-600/30 text-white font-semibold px-8 py-2 text-lg rounded-2xl transition-transform duration-300 transform hover:scale-105 hover:shadow-lg "
                >
                  View My Work
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg transition-all duration-300 rounded-2xl hover:cursor-pointer hover:shadow-lg hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 mt-16 text-purple-600/80 animate-fade-up-delay-4 max-w-md">
                <div className="text-left">
                  <div className="text-3xl font-bold gradient-text">CGPA</div>
                  <div className="text-accent">8.57</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold gradient-text">250+</div>
                  <div className="text-accent">DSA Problems</div>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold gradient-text">3+</div>
                  <div className="text-accent">Major Projects</div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection id="about">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl bg-gradient-to-br from-purple-600 to-blue-600/80 text-transparent bg-clip-text md:text-5xl font-bold mb-6">
                  <span className="gradient-text">About Me</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Passionate developer with a strong foundation in computer
                  science and a love for creating innovative solutions
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left: Personal Info */}
                <div className="space-y-6 w-full">
                  <div className="glass-card p-6 sm:p-8 rounded-2xl">
                    <h3 className="text-2xl sm:text-2xl text-purple-600 font-bold mb-4 sm:mb-6 gradient-text">
                      Personal Information
                    </h3>
                    <div className="space-y-4 text-gray-400 text-sm sm:text-base">
                      {/* Each row */}
                      <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                        <span className="text-muted-foreground text-lg font-semibold">Location:</span>
                        <span>Kolkata, West Bengal</span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                        <span className="text-muted-foreground text-lg font-semibold">
                          Education:
                        </span>
                        <span>IIEST Shibpur</span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                        <span className="text-muted-foreground text-lg font-semibold">Degree:</span>
                        <span>B.Tech Information Technology</span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                        <span className="text-muted-foreground text-lg font-semibold">Year:</span>
                        <span>2023 - 2027</span>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between gap-1 sm:gap-0">
                        <span className="text-muted-foreground text-lg font-semibold">CGPA:</span>
                        <span className="gradient-text font-semibold">
                          8.57
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Description */}
                <div className="space-y-6">
                  <div className="glass-card p-8 rounded-2xl">
                    <h3 className="text-2xl text-purple-600 font-bold mb-6 gradient-text">
                      My Journey
                    </h3>
                    <div className="space-y-4 text-gray-400">
                      <p>
                        I'm a Computer Science student at IIEST Shibpur with a CGPA of 8.57, passionate about full-stack development. I specialize in React, Node.js, and MongoDB, and have built projects ranging from expense trackers to social media platforms.
                      </p>
                      <p>
                        Beyond development, I enjoy solving algorithmic problems and continuously exploring new technologies. I've solved over 250 DSA problems and earned several certifications and achievements along the way.
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection id="skills">
          <h2 className="text-5xl font-bold text-center purple-gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-center text-lg text-gray-400 mb-18 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(portfolioData.skills)
              .slice(0, 4)
              .map(([category, skills]) => (
                <SkillCategory
                  key={category}
                  title={category}
                  skills={skills}
                />
              ))}
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-purple-400 mb-6">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {portfolioData.skills.technologies.map((tech) => (
                <div
                  key={tech}
                  className="bg-[#111111] glass-card px-4 py-2 rounded-lg shadow-md shadow-purple-500/30 text-gray-300 hover:text-white hover:bg-purple-900/50 transition-all duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection id="projects">
          <h2 className="text-5xl font-bold text-center purple-gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of my latest work, demonstrating my skills in full-stack
            development
          </p>
          <div className="space-y-12">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href={portfolioData.contact.socials.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-purple-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-purple-500/20 transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} /> View More on GitHub
            </a>
          </div>
        </AnimatedSection>

        {/* Achievements Section */}
        <AnimatedSection
          id="achievements"
          className="bg-gradient-to-br from-background to-primary/5"
        >
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  <span className="purple-gradient-text">
                    Achievements & Certifications
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Recognition of my dedication to learning and professional
                  growth
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="glass-card p-6 rounded-2xl text-center hover:glow-accent transition-all duration-300 transform hover:-translate-y-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl text-purple-600 md:text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                ))}
              </div>

              {/* Achievements Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div
                      key={achievement.title}
                      className="glass-card p-8 rounded-2xl hover:glow-primary transition-all duration-500 transform hover:-translate-y-2"
                      style={{ animationDelay: `${index * 0.15}s` }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-primary p-3 rounded-2xl glow-primary">
                          <IconComponent className="w-10 h-10 text-purple-500" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold purple-gradient-text">
                              {achievement.title}
                            </h3>
                            <span className="text-sm text-accent bg-accent/10 px-2 py-1 rounded">
                              {achievement.date}
                            </span>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {achievement.description}
                          </p>
                          <div className="inline-block bg-primary/10 text-purple-500/80 px-3 py-1 rounded-full text-xs border border-purple-500">
                            {achievement.category}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Additional Recognition */}
              <div className="mt-16 text-center">
                <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold mb-6 purple-gradient-text">
                    Additional Recognition
                  </h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground mb-2">
                        Academic Excellence
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Maintaining top-tier CGPA throughout B.Tech program
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground mb-2">
                        Problem Solver
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Consistent practice in algorithmic problem solving
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground mb-2">
                        Continuous Learner
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Always exploring new technologies and frameworks
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact">
          <h2 className="text-5xl font-bold text-center purple-gradient-text">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Let's collaborate on exciting projects or discuss opportunities in
            technology
          </p>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <ContactInfoCard data={portfolioData.contact} />
              <ConnectWithMeCard data={portfolioData.contact.socials} />
            </div>
            <div className="space-y-8">
              <LetsWorkTogetherCard
                email={portfolioData.contact.email}
                linkedinUrl={portfolioData.contact.socials.linkedin.url}
              />
              <AvailabilityCard data={portfolioData.contact.availability} />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Footer />
        </AnimatedSection>
      </main>
    </div>
  );
};


// Skill Category Component
const SkillCategory = ({ title, skills }) => (
  <div className="bg-[#111111] p-7 rounded-2xl border border-purple-900/30 card-glow">
    <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
      {title}
    </h3>
    <div className="space-y-4">
      {Object.entries(skills).map(([skill, proficiency]) => (
        <div key={skill}>
          <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-300">{skill}</span>
            <span className="text-sm font-medium text-purple-400">
              {proficiency}
            </span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: proficiency }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Project Card Component
const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="bg-[#111111] rounded-2xl border border-purple-900/30 card-glow overflow-hidden grid md:grid-cols-2"
  >
    <div className="p-8 bg-gradient-to-br from-purple-600/20 to-indigo-600/20 flex items-center justify-center">
      <p className="text-8xl font-extrabold text-white opacity-20">
        {project.title.charAt(0)}
      </p>
    </div>
    <div className="p-8 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <span className="text-sm text-purple-400">{project.date}</span>
      </div>
      <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>
      <div>
        <h4 className="font-semibold text-white mb-2">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-400 space-y-1 mb-4">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mt-auto">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-purple-800/50 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-700/70 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Github size={18} /> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-gray-700/50 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600/70 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Code size={18} /> Live Demo
        </a>
      </div>
    </div>
  </motion.div>
);

// Achievement Card Component
const AchievementCard = ({ cert }) => (
  <AnimatedSection >
  <div className="bg-[#111111] p-6 rounded-2xl border border-purple-900/30 card-glow flex gap-6 items-start">
    <div className="text-purple-400 mt-1">{cert.icon}</div>
    <div>
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-white text-lg">{cert.title}</h4>
        <span className="text-sm text-purple-400">{cert.year}</span>
      </div>
      <p className="text-gray-400 text-sm mt-1 mb-3">{cert.desc}</p>
      <span className="bg-purple-900/50 text-purple-300 text-xs font-semibold px-2.5 py-1 rounded-full">
        {cert.tag}
      </span>
    </div>
  </div>
  </AnimatedSection>
);

// Contact Info Cards
const ContactInfoCard = ({ data }) => (
  <div className="bg-[#111111] p-6 rounded-2xl border border-purple-900/30 shadow-[0_0_30px_rgba(128,0,255,0.5)] drop-shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(128,0,255,0.8)] m-4">
    <h3 className="text-2xl font-bold text-purple-500 mb-6">
      Contact Information
    </h3>

    <div className="space-y-6">
      {/* Email */}
      <div className="flex gap-4 items-start">
        <div className="p-3 rounded-xl bg-purple-700/20 text-purple-500">
          <Mail size={24} />
        </div>
        <div>
          <p className="text-white font-semibold">Email</p>
          <a
            href={`mailto:${data.email}`}
            className="text-gray-300 hover:text-purple-400 relative inline-block after:block after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {data.email}
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="flex gap-4 items-start">
        <div className="p-3 rounded-xl bg-purple-700/20 text-purple-500">
          <Phone size={24} />
        </div>
        <div>
          <p className="text-white font-semibold">Phone</p>
          <a
            href={`tel:${data.phone}`}
            className="text-gray-300 hover:text-purple-400 relative inline-block after:block after:h-[2px] after:w-0 after:bg-purple-400 after:transition-all after:duration-300 hover:after:w-full"
          >
            {data.phone}
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex gap-4 items-start">
        <div className="p-3 rounded-xl bg-purple-700/20 text-purple-500">
          <MapPin size={24} />
        </div>
        <div>
          <p className="text-white font-semibold">Location</p>
          <p className="text-gray-300">{data.location}</p>
        </div>
      </div>
    </div>
  </div>
);

const LetsWorkTogetherCard = ({ email }) => (
  <div className="bg-[#111111] p-6 rounded-2xl border border-purple-900/30 shadow-[0_0_30px_rgba(128,0,255,0.5)] drop-shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(128,0,255,0.8)] m-4">
    <h3 className="text-xl font-bold text-purple-400 mb-4">
      Let's Work Together
    </h3>
    <p className="text-gray-400 mb-6 flex-grow">
      I'm always interested in new opportunities, whether that's working on
      exciting projects, contributing to open source, or discussing innovative
      ideas in technology.
    </p>
    <a
      href={`mailto:${email}`}
      className="w-full text-center bg-gradient-to-r from-purple-500 to-indigo-700 hover:from-green-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-lg button-glow flex items-center justify-center gap-2 mb-4 transition-all duration-300"
    >
      <Send size={18} /> Send Me an Email
    </a>
    <a
      href="https://www.linkedin.com/in/supritam-sarkar-327778322"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full text-center bg-transparent text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-900/50 transition-colors duration-300 border-1 border-white button-glow flex items-center justify-center gap-2"
    >
      <Linkedin size={18} /> Connect on LinkedIn
    </a>
  </div>
);

const ConnectWithMeCard = ({ data }) => (
  <div className="bg-[#111111] p-6 rounded-2xl border border-purple-900/30 shadow-[0_0_30px_rgba(128,0,255,0.5)] drop-shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(128,0,255,0.8)] m-4">
    <h3 className="text-xl font-bold text-purple-400 mb-4">Connect With Me</h3>
    <div className="space-y-4">
      {Object.entries(data).map(([key, value]) => (
        <a
          key={key}
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 group"
        >
          {key === "github" ? (
            <Github className="text-purple-400" />
          ) : key === "linkedin" ? (
            <Linkedin className="text-purple-400" />
          ) : (
            <Code className="text-purple-400" />
          )}
          <div>
            <p className="font-bold text-white group-hover:text-purple-300 transition-colors">
              {value.label}
            </p>
            <p className="text-sm text-gray-400">{value.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </div>
);

const AvailabilityCard = ({ data }) => (
  <div className="bg-[#111111] p-6 rounded-2xl border border-purple-900/30 shadow-[0_0_30px_rgba(128,0,255,0.5)] drop-shadow-2xl transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(128,0,255,0.8)] m-4">
    <h3 className="text-xl font-bold text-purple-400 mb-4">
      Currently Available For
    </h3>
    <ul className="space-y-2">
      {data.map((item) => (
        <li key={item} className="flex items-center gap-3">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Supritam Sarkar
              </h3>
              <p className="text-muted-foreground">
                Full Stack Developer passionate about creating innovative
                solutions with modern technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["About", "Skills", "Projects", "Achievements", "Contact"].map(
                  (item) => (
                    <button
                      key={item}
                      onClick={() => {
                        const element = document.getElementById(
                          item.toLowerCase()
                        );
                        element?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="block text-muted-foreground hover:text-accent transition-colors animated-underline"
                    >
                      {item}
                    </button>
                  )
                )}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/SupritamSarkar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary p-3 rounded-xl hover:glow-primary transition-all duration-300"
                >
                  <Github className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/supritam-sarkar-327778322"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-secondary p-3 rounded-xl hover:glow-accent transition-all duration-300"
                >
                  <Linkedin className="w-8 h-8 text-white" />
                </a>
                <a
                  href="mailto:supritamsarkar481@gmail.com"
                  className="bg-gradient-accent p-3 rounded-xl hover:glow-accent transition-all duration-300"
                >
                  <Mail className="w-8 h-8 text-white" />
                </a>
                <a
                  href="https://leetcode.com/u/supritam_sarkar_0808"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-primary p-3 rounded-xl hover:glow-primary transition-all duration-300"
                >
                  <Code className="w-8 h-8 text-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground">
              © {currentYear} Supritam Sarkar. Crafted with ❤️ By Supritam
              Sarkar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;