import Javascript from "../assets/logos/JavaScript.svg";
import Reactimage from "../assets/logos/React.svg";
import HTMLogo from "../assets/logos/HTML.svg";
import CSS from "../assets/logos/CSS.svg";
import TailwindCSS from "../assets/logos/Tailwind.svg";
import NodeJS from "../assets/logos/NodeJS.svg";
import MongoDBImage from "../assets/logos/Mongo.svg";
import Git from "../assets/logos/Git.svg";
import Figma from "../assets/logos/Figma.svg";
import Jira from "../assets/logos/Jira.svg";
import MySQL from "../assets/logos/MySQL.svg";
import Postman from "../assets/logos/Postman.svg";
import dockerimage from "../assets/logos/Docker.svg";
import Bash from "../assets/logos/Bash.svg";
import Python from "../assets/logos/Python.svg";
import Selenium from "../assets/logos/Selenium.svg";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-normal text-gray-800 mb-2">
          Sebastian Bolaños Cordoba
        </h1>
        <h2 className="text-xl font-light text-grey-800 mb-4">
          Full Stack Developer
        </h2>
        <p className="text-gray-700 font-thin mt-4">
          Engineer valued for driving high-performance accessible web
          experiences. I design quality, user-friendly and scalable products
          regardless of stack.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-4">
          Information
        </h3>
        <p className="text-gray-700 font-thin">
          <span className="font-thin">Address:</span> Km3 Via Chipaya, Verde
          Horizonte, Casa 64-1B, Jamundi Colombia
        </p>
        <p className="text-gray-700 font-thin">
          <span className="font-thin">Email:</span>{" "}
          <a href="mailto:sbc-2002@hotmail.com" className="">
            sbc-2002@hotmail.com
          </a>
        </p>
        <p className="text-gray-700 font-thin">
          <span className="font-thin">Phone:</span> +57 (310) 593-2091
        </p>
        <p className="text-gray-700 font-thin">
          <span className="font-thin">Level:</span> Mid – Level
        </p>
      </div>
      <div>
        <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-4">
          Experience
        </h3>
        <div className="mb-6">
          <p className="text-gray-800 font-thin">
            Counselor at{" "}
            <a
              href="https://www.linkedin.com/company/camp-wesley-woods/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Camp Wesley Woods
            </a>{" "}
            (May 2023 to August 2023)
          </p>
          <p className="text-gray-700 font-thin">
            Supervision, recreational activities, effective and efficient
            intercultural communication.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-gray-800 font-thin">
            Front end Developer and Software Engineer at{" "}
            <a
              href="https://www.linkedin.com/company/fundacion-rafael-sanado-por-dios/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Foundation Rafael Sanado por Dios
            </a>{" "}
            (August 2023 to December 2023)
          </p>
          <p className="text-gray-700 font-thin">
            Add interactive functionalities, Create and maintain the user
            interface, ensure that the interface is accessible and user
            friendly, collaborate with back-end developers, Define the System
            architecture, Implement security measures.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-gray-800 font-thin">
            IT Specialist at{" "}
            <a
              href="https://www.linkedin.com/company/sig-systems-inc/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              SIG Systems, Inc.
            </a>{" "}
            (March 2024 to October 2024)
          </p>
          <p className="text-gray-700 font-thin">
            Physical and network support of the operation, physical maintenance,
            Software, network and closed-circuit television audits.
          </p>
        </div>
        <div>
          <p className="text-gray-800 font-thin">
            Service Desk Analyst at{" "}
            <a
              href="https://www.linkedin.com/company/tabi-connect/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Tabbi Connect
            </a>{" "}
            (October 2024 to present)
          </p>
          <p className="text-gray-700 font-thin">
            Experience in supervising and optimizing the performance of robotic
            process automation (RPA) systems, ensuring operational efficiency
            and quick problem resolution.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-4 mt-8">
          Education
        </h3>
        <div>
          <div className="mb-6">
            <p className="text-gray-800 font-thin">
              High School Diploma Colegio de la Universidad Libre (2018)
            </p>
            <p className="text-gray-700 font-thin">
              Graduated with honors, focusing on foundational programming and IT
              skills. Participated in extracurricular activities such as coding
              clubs and technology fairs.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-800 font-thin">
              Bachelor’s Degree in Software Engineering{" "}
              <a
                href="https://www.uao.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Universidad Autónoma de Occidente
              </a>{" "}
              (2024)
            </p>
            <p className="text-gray-700 font-thin">
              Specialized in full-stack development, software architecture, and
              cybersecurity. Developed multiple academic projects, including a
              scalable e-commerce platform and a secure API for financial
              transactions. Actively participated in hackathons and research
              groups.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-4">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700 font-thin">
          <div className="flex items-center space-x-2 select-none">
            <img src={Javascript} alt="JavaScript" className="h-6 w-6" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Reactimage} alt="React" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={HTMLogo} alt="HTML" className="h-6 w-6" />
            <span>HTML</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={CSS} alt="CSS" className="h-6 w-6" />
            <span>CSS</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={TailwindCSS} alt="Tailwind CSS" className="h-6 w-6" />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={NodeJS} alt="Node.js" className="h-6 w-6" />
            <span>Node.js</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={MongoDBImage} alt="MongoDB" className="h-6 w-6" />
            <span>MongoDB</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Git} alt="Git" className="h-6 w-6" />
            <span>Git</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Figma} alt="Figma" className="h-6 w-6" />
            <span>Figma</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Jira} alt="Jira" className="h-6 w-6" />
            <span>Jira</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={MySQL} alt="MySQL" className="h-6 w-6" />
            <span>MySQL</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Postman} alt="Postman" className="h-6 w-6" />
            <span>Postman</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Bash} alt="Bash Shell" className="h-6 w-6" />
            <span>Bash Shell</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Python} alt="Python" className="h-6 w-6" />
            <span>Python</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={Selenium} alt="Selenium" className="h-6 w-6" />
            <span>Selenium</span>
          </div>
          <div className="flex items-center space-x-2 select-none">
            <img src={dockerimage} alt="Selenium" className="h-6 w-6" />
            <span>Docker</span>
          </div>
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-light text-gray-800 mb-4">Soft Skills</h4>
          <div className="grid grid-cols-2 gap-4 text-gray-700 font-thin">
            <div>
              <li>Critical Thinking</li>
            </div>
            <div>
              <li>Team Leadership</li>
            </div>
            <div>
              <li>Social Skills</li>
            </div>
            <div>
              <li>Adaptability</li>
            </div>
            <div>
              <li>Time Management</li>
            </div>
            <div>
              <li>Troubleshooting</li>
            </div>
            <div>
              <li>Problem-Solving</li>
            </div>
            <div>
              <li>Effective Communication</li>
            </div>
          </div>
        </div>
        <p className="text-gray-700 font-thin mt-10 mb-10 text-justify">
          I am a passionate and dedicated software engineer with a strong
          foundation in web development. I have experience in building
          responsive and user-friendly web applications using modern
          technologies. I am always eager to learn and improve my skills, and I
          am excited to take on new challenges in the field of software
          engineering. I am committed to delivering high-quality work and
          contributing to the success of my team and projects.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-4">
          Languages
        </h3>
        <ul className="text-gray-700 font-thin space-y-2">
          <li>
            <span className="font-thin">Spanish:</span> Native
          </li>
          <li>
            <span className="font-thin">English:</span> C1
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-light text-gray-800 border-b pb-2 mb-4">
          Courses
        </h3>
        <ul className="text-gray-700 font-thin space-y-2 list-disc list-inside">
          <li>Curso de Docker: Fundamentos</li>
          <li>Curso Definitivo de HTML y CSS</li>
          <li>Curso de Frontend Developer</li>
          <li>Curso de Fundamentos de Diseño de Interfaces UX/UI</li>
          <li>Curso de Fundamentos de JavaScript</li>
          <li>Curso de GitHub Actions</li>
          <li>Curso de Herramientas de AI para Developers</li>
          <li>Curso de Introducción a la Terminal y Línea de Comandos</li>
          <li>Curso de Introducción a React Native</li>
          <li>
            Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript
          </li>
          <li>Curso de React.js</li>
          <li>Curso de Responsive Design: Maquetación Mobile First</li>
          <li>Curso Profesional de Git y GitHub</li>
        </ul>
        <p className="text-gray-500 font-thin text-sm mt-4">
          All courses completed on Platzi.
        </p>
      </div>
    </div>
  );
};

export default Resume;
