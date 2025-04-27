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
import Scrum from "../assets/logos/Scrum.svg";
import Bash from "../assets/logos/Bash.svg";
import Python from "../assets/logos/Python.svg";
import Selenium from "../assets/logos/Selenium.svg";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
          Sebastian Bolaños Cordoba
        </h1>
        <h2 className="text-xl font-semibold text-gray-600">
          Full Stack Developer
        </h2>
        <p className="text-gray-700 mt-4">
          Engineer valued for driving high-performance accessible web
          experiences. I design quality, user-friendly and scalable products
          regardless of stack.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Information
        </h3>
        <p className="text-gray-700">
          <span className="font-semibold">Address:</span> Km3 Via Chipaya, Verde
          Horizonte, Casa 64-1B, Jamundi Colombia
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:sbc-2002@hotmail.com" className="">
            sbc-2002@hotmail.com
          </a>
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Phone:</span> +57 (310) 593-2091
        </p>
        <p className="text-gray-700">
          <span className="font-semibold">Level:</span> Mid – Level
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Experience
        </h3>
        <div className="mb-6">
          <p className="text-gray-800 font-semibold">
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
          <p className="text-gray-700">
            Supervision, recreational activities, effective and efficient
            intercultural communication.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-gray-800 font-semibold">
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
          <p className="text-gray-700">
            Add interactive functionalities, Create and maintain the user
            interface, ensure that the interface is accessible and user
            friendly, collaborate with back-end developers, Define the System
            architecture, Implement security measures.
          </p>
        </div>
        <div className="mb-6">
          <p className="text-gray-800 font-semibold">
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
          <p className="text-gray-700">
            Physical and network support of the operation, physical maintenance,
            Software, network and closed-circuit television audits.
          </p>
        </div>
        <div>
          <p className="text-gray-800 font-semibold">
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
          <p className="text-gray-700">
            Experience in supervising and optimizing the performance of robotic
            process automation (RPA) systems, ensuring operational efficiency
            and quick problem resolution.
          </p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4 mt-8">
          Education
        </h3>
        <div>
          <div className="mb-6">
            <p className="text-gray-800 font-semibold">
              High School Diploma Colegio de la Universidad Libre (2018)
            </p>
            <p className="text-gray-700">
              Graduated with honors, focusing on foundational programming and IT
              skills. Participated in extracurricular activities such as coding
              clubs and technology fairs.
            </p>
          </div>

          <div className="mb-6">
            <p className="text-gray-800 font-semibold">
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
            <p className="text-gray-700">
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
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Skills
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
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
        </div>
        <div className="mt-8">
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Soft Skills
          </h4>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
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
        <p className="text-gray-700 mt-10 mb-10 text-justify">
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
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Languages
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            <span className="font-semibold">Spanish:</span> Native
          </li>
          <li>
            <span className="font-semibold">English:</span> C1
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-4">
          Courses
        </h3>
        <ul className="text-gray-700 space-y-2">
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/8781-docker-fundamentos/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Docker: Fundamentos
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/2008-html-css/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso Definitivo de HTML y CSS
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/2467-frontend-developer/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Frontend Developer
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/5184-basico-ui/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Fundamentos de Diseño de Interfaces UX/UI
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/10266-javascript/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Fundamentos de JavaScript
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/7992-github-actions/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de GitHub Actions
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/10959-herramientas-ai-developers/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Herramientas de AI para Developers
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/2292-terminal/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Introducción a la Terminal y Línea de Comandos
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/2556-react-native/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Introducción a React Native
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/3578-npm/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de NPM: Gestión de Paquetes y Dependencias en JavaScript
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/7395-react/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de React.js
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/2030-mobile-first/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso de Responsive Design: Maquetación Mobile First
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
          <li>
            <a
              href="https://platzi.com/p/bolacrack22/curso/1557-git-github/diploma/detalle/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline text-gray-700"
            >
              Curso Profesional de Git y GitHub
            </a>
            <p className="text-gray-500 text-sm font-thin">Platzi</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;
