import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import {
  SiReact,
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiVercel,
} from "@icons-pack/react-simple-icons";
import smartcontrol from "../assets/Images/Screenshot 2025-09-20 at 1.00.42 AM.png";

const Projects = () => {
  // Function to get technology icon
  const getTechIcon = (tech: string) => {
    const iconProps = { size: 20, className: "text-current" };

    const icons: { [key: string]: React.ReactElement } = {
      React: <SiReact {...iconProps} />,
      TypeScript: <SiTypescript {...iconProps} />,
      "Firebase Auth": <SiFirebase {...iconProps} />,
      "Firebase Firestore": <SiFirebase {...iconProps} />,
      "Firebase Hosting": <SiFirebase {...iconProps} />,
      "Tailwind CSS": <SiTailwindcss {...iconProps} />,
      Vercel: <SiVercel {...iconProps} />,
    };

    return icons[tech] || <span className="text-lg">⚙️</span>;
  };

  const projects = [
    {
      id: 1,
      title: "Smart Control",
      image: smartcontrol,
      description:
        "Smart Control is an application I developed to cover a very personal need: controlling your finances shouldn't be complicated. Like many people, I sometimes found it difficult to have clarity about my expenses and income. I knew how much I earned, but I didn't always know where my money went at the end of the month. That's why I decided to create this tool that helps more people have clarity and financial control, month by month, without complications.",
      role: "Full Stack Developer - Personal project to solve a real need for personal financial management. I was responsible for the entire development cycle from conceptualization to deployment and maintenance.",
      responsibilities: [
        "Complete design and development of the application from scratch",
        "Implementation of frontend architecture with React and TypeScript",
        "Configuration and integration of Firebase for authentication and database",
        "Deployment and hosting on Vercel with performance optimizations",
        "User experience design focused on simplicity",
      ],
      softSkills: [
        "Real problem identification: I detected a personal need and turned it into a solution",
        "Product planning: I defined functionalities based on real use cases",
        "Self-discipline: I completed a personal project from start to finish",
        "User orientation: I designed thinking about experience and ease of use",
      ],
      hardSkills: [
        "Frontend development with React and TypeScript: dynamic interfaces and static typing",
        "Firebase: I implemented authentication, Firestore as database and hosting",
        "Tailwind CSS: responsive design and reusable component system",
        "State management: handling financial data and user sessions",
        "Vercel deployment: CI/CD configuration and production optimizations",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Firebase Auth",
        "Firebase Firestore",
        "Firebase Hosting",
        "Tailwind CSS",
        "Vercel",
      ],
      features: [
        "Register income and expenses in a simple way",
        "Monthly summary to see exactly how your money moves",
        "Set savings goals and track your progress",
        "Control debts and pending payments",
        "Investment projection and future financial analysis",
      ],
      githubLink: "https://github.com/Sebasb22/smart-control", // Add the real repository link
      demoLink: "https://lnkd.in/eEVbV2NE",
      demoNote: null,
    },
  ];

  return (
    <div className="min-h-screen text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Projects
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Explore the projects I've worked on, the technologies used, and the
            skills developed.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Section */}
                <div className="order-2 lg:order-1">
                  <div className="bg-gray-700/50 rounded-xl overflow-hidden border border-gray-600/50">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="order-1 lg:order-2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-4 text-purple-400">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={20} />
                      Repositorio en GitHub
                    </motion.a>
                    {project.demoLink ? (
                      <motion.a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <ExternalLink size={20} />
                        Probar App
                      </motion.a>
                    ) : (
                      <div className="text-gray-400 text-sm italic px-4 py-2">
                        {project.demoNote}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Detailed Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Role and Responsibilities */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-pink-400">
                      My Role
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {project.role}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-pink-400">
                      Main Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {project.responsibilities?.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 text-sm flex items-start"
                        >
                          <span className="text-purple-400 mr-2">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-green-400">
                      Soft-skills
                    </h4>
                    <ul className="space-y-2">
                      {project.softSkills?.map((skill, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 text-sm flex items-start"
                        >
                          <span className="text-green-400 mr-2">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">
                      Hard-skills
                    </h4>
                    <ul className="space-y-2">
                      {project.hardSkills?.map((skill, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 text-sm flex items-start"
                        >
                          <span className="text-blue-400 mr-2">•</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Features Section */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-orange-400">
                  Features
                </h4>
                <ul className="space-y-2">
                  {project.features?.map((feature, idx) => (
                    <li
                      key={idx}
                      className="text-gray-600 text-sm flex items-start"
                    >
                      <span className="text-orange-400 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-yellow-400">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies?.map((tech, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-700/70 text-gray-200 px-4 py-2 rounded-full text-sm border border-gray-600/50 hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      {getTechIcon(tech)}
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
