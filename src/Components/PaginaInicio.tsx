import Spline from "@splinetool/react-spline";
import Sendmeamessage from "./Sendmeamessage";
import ScrollReveal from "./ScrollReveal/ScrollReveal";
import RotatingText from "./RotatingText";
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
import Bash from "../assets/logos/Bash.svg";
import Python from "../assets/logos/Python.svg";
import Selenium from "../assets/logos/Selenium.svg";
import Dockerimage from "../assets/logos/Docker.svg";
import yo from "../assets/Images/yo.png";

const BodyInicio = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4 mt-70">
          <h1 className="px-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light flex items-center overflow-hidden space-x-1">
            <span className="text-black font-thin text">Hi there, I'm</span>

            <div className="relative min-w-[500px] text-center">
              <RotatingText
                texts={["Sebastian ", "a Developer", "a Problem Solver"]}
                mainClassName="px-2 sm:px-2 md:px-3 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl whitespace-nowrap"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
          </h1>
        </div>
        <div className="w-full lg:w-1/2 h-[50vh] sm:h-[60vh] lg:h-[70vh] mt-6 lg:mt-0">
          <Spline
            className="w-full h-full object-contain"
            scene="https://prod.spline.design/0KgQHDX6-n0nG-js/scene.splinecode"
          />
        </div>
      </div>

      {/* Sección About Me */}

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        Passionate about building intuitive, dynamic web applications. Always
        learning, always creating. Highly skilled at progressive enhancement,
        design systems and building accessible user interfaces.
      </ScrollReveal>

      <div className="mt-10 px-6 md:px-10 mt-10 lg:mt-50">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 text-center">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10">
          {/* Imagen */}
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <img
              src={yo}
              alt="Sebastian Bolanos"
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>

          {/* Cards y texto adicional */}
          <div className="w-full lg:w-2/3 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Experience
                </h3>
                <p className="text-sm text-gray-600">
                  1 year of experience in web development, specializing in React
                  and Node.js.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Skills
                </h3>
                <p className="text-sm text-gray-600">
                  Proficient in JavaScript, HTML, CSS, and modern frameworks
                  like React.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Interests
                </h3>
                <p className="text-sm text-gray-600">
                  Passionate about Development, accessibility, and building
                  scalable applications.
                </p>
              </div>
            </div>

            {/* Texto adicional */}
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              I am a dedicated and passionate developer who thrives on creating
              impactful digital experiences. My journey in web development has
              been fueled by curiosity and a drive to solve real-world problems
              through technology. I believe in continuous learning,
              collaboration, and delivering solutions that are not only
              functional but also visually appealing. <br />
              <p>
                With a creative mindset and a passion for art, I thrive on
                challenges that enhance my technical knowledge and skills. As a
                collaborative team player, I consistently contribute value to
                projects.
              </p>
            </p>

            {/* Información adicional */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6">
              Engineering
            </h3>
            <p className="text-sm sm:text-base lg:text-lg mt-2 text-gray-700">
              As a Systems Engineer graduated from Universidad Autónoma de
              Occidente, I have built a strong technical foundation that allows
              me to approach JavaScript application development with a strategic
              and efficient mindset. Throughout my academic training and
              practical experience, I have learned to select and utilize the
              right tools for each project, while also having the flexibility to
              work independently of them when necessary, adapting easily to
              different technical environments and project requirements. I am
              committed to creating fast, resilient, and highly scalable
              solutions, always prioritizing performance, optimization, and user
              experience. My analytical skills, attention to detail, and focus
              on continuous improvement enable me to tackle complex technical
              challenges and deliver high-quality products that drive
              organizational growth and efficiency. Additionally, I value
              teamwork, effective communication, and cross-disciplinary
              collaboration as key elements for the success of any software
              project. I am confident that my education, combined with my
              passion for technology and innovation, position me as a developer
              capable of delivering real value to any development team.
            </p>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-6">
              Technologies
            </h3>
            <div className="mt-6 mb-50 flex flex-wrap justify-center gap-6">
              <img src={Javascript} alt="JavaScript" className="h-12 w-12" />
              <img src={Reactimage} alt="React" className="h-12 w-12" />
              <img src={HTMLogo} alt="HTML" className="h-12 w-12" />
              <img src={CSS} alt="CSS" className="h-12 w-12" />
              <img src={TailwindCSS} alt="Tailwind CSS" className="h-12 w-12" />
              <img src={NodeJS} alt="Node.js" className="h-12 w-12" />
              <img src={MongoDBImage} alt="MongoDB" className="h-12 w-12" />
              <img src={Git} alt="Git" className="h-12 w-12" />
              <img src={Figma} alt="Figma" className="h-12 w-12" />
              <img src={Jira} alt="Jira" className="h-12 w-12" />
              <img src={MySQL} alt="MySQL" className="h-12 w-12" />
              <img src={Postman} alt="Postman" className="h-12 w-12" />
              <img src={Bash} alt="Bash Shell" className="h-12 w-12" />
              <img src={Python} alt="Python" className="h-12 w-12" />
              <img src={Selenium} alt="Selenium" className="h-12 w-12" />
              <img src={Dockerimage} alt="Docker" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        // Añade un margen inferior más grande
      >
        When does a man die? When he is hit by a bullet? No! When he suffers a
        disease? No! When he ate a soup made out of a poisonous mushroom? No! A
        man dies when he is forgotten!
      </ScrollReveal>

      <Sendmeamessage />
    </div>
  );
};

export default BodyInicio;
