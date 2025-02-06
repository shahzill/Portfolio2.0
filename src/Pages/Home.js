import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import Particles from "../Components/Particles";
import { ReactTyped } from "react-typed";
import curve from "../Media/notch.png";
import AUCLogo from "../Media/LogoAUC.png";
import ScratchZeroLogo from "../Media/LogoScratchZero.png";
import PSSLogo from "../Media/LogoPSS.png";
import PULogo from "../Media/LogoPU.jpg";
import { motion, useTransform, useScroll } from "framer-motion";
import "../Styles/Home.css";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiDjango,
  SiMysql, // Works for MySQL
  SiCplusplus, // Works for C++
  SiBlazor, // Works for Blazor
  SiGit, // Works for Git
  SiDocker, // Works for Docker
  SiSelenium, // Works for Selenium
  SiJunit5, // Works for JUnit
} from "react-icons/si";

import { FaJava, FaJira } from "react-icons/fa"; // Java, JIRA, Git Alternative
import { DiDatabase } from "react-icons/di"; // General SQL/Database Icon
import { TbBrandVisualStudio, TbBrandVscode } from "react-icons/tb"; // VS & VS Code
import { BiSolidServer } from "react-icons/bi"; // SQL Server Studio (Alternative)
//import { SiCloud } from "react-icons/si"; // Cloud icon, a good substitute for Azure
import { VscSymbolNamespace } from "react-icons/vsc"; // Alternative for Eclipse

function Home() {
  const [animate, setAnimate] = useState(false);
  const [animate1, setAnimate1] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  const [animate4, setAnimate4] = useState(false);
  const [animate5, setAnimate5] = useState(false);
  const containerRef = useRef(null);
  const cards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
  ];
  const experiences = [
    {
      logo: AUCLogo,
      title: "Systems Developer Intern",
      company: "Alberta Utilities Commission",
      location: "Calgary, Canada",
      duration: "September 2023 – Present",
      description: [
        "Developed web applications using Blazor, HTML, CSS, C#, Entity Framework, REST API, and SQL to deliver efficient and user-friendly solutions.",
        "Collaborated with a team of 7 professionals, actively participating in code reviews and contributing to an Azure repository to ensure seamless code integration.",
        "Engaged in agile development methodologies, working in sprints to meet project milestones and deadlines.",
        "Implemented and tested new functionalities within applications, ensuring high-quality code and optimal user experiences.",
        "Enhanced UI with Radzen, ensuring smooth development, and implemented Fluent Validation for robust data validation, elevating application quality.",
        "Recognized for exceptional performance with an Employee Appreciation Award, including merchandise and gift cards, leading to a part-time position offer to continue contributing while managing academic responsibilities.",
      ],
      background: "White",
    },
    {
      logo: ScratchZeroLogo,
      title: "Developer",
      company: "ScratchZero",
      duration: "June, 2023 - Present",
      description: [
        "Developed interactive websites using ReactJS, HTML, JavaScript, and CSS.",
        "Tested the websites with Selenium and across different devices for a user-friendly interface.",
        "Created a hosting domain using A2 Hosting and published the website using cPanel.",
        "Set up emails for all team members and the company.",
        "Managed the social media campaign for the company launch.",
      ],
      background: "Black",
    },
    {
      logo: PSSLogo,
      title: "Vice President of Events",
      company: "Pakistani Student Society, University of Calgary",
      duration: "March, 2022 - March, 2023",
      description: [
        "Organized diverse events for up to 350 students.",
        "Negotiated with vendors to secure cost-effective deals.",
        "Managed a team, conducted interviews, and trained new junior executives.",
      ],
      background: "White",
    },
    {
      logo: PULogo,
      title: "Data Analyst Student Intern",
      company: "CEES, The University of Punjab",
      duration: "June, 2018 - January, 2019",
      description: [
        "Assisted in publishing a research paper by collecting and analyzing data.",
        "Collected water samples and processed data into graphical representations.",
      ],
      background: "Black",
    },
  ];

  useEffect(() => {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting) {
          // Set animate to true when container is in view
          setAnimate(true);
          setTimeout(() => {
            setAnimate1(true);
          }, 300); // 0.5 seconds delay

          setTimeout(() => {
            setAnimate2(true);
          }, 600); // 1 second delay

          setTimeout(() => {
            setAnimate3(true);
          }, 900); // 1.5 seconds delay

          setTimeout(() => {
            setAnimate4(true);
          }, 1200); // 2 seconds delay
          setTimeout(() => {
            setAnimate5(true);
          }, 1500); // 2 seconds delay

          observer.disconnect(); // Disconnect the observer once it triggers
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.1 } // Trigger when 50% of the element is in view
    );

    const currentRef = containerRef.current;
    if (currentRef) observer.observe(currentRef);

    // Clean up the observer when component unmounts
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []); // Empty dependency array to run effect once when the component mounts

  const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

    return (
      <section ref={targetRef} className="relative h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {cards.map((card) => {
              return <Card card={card} key={card.id} />;
            })}
          </motion.div>
        </div>
      </section>
    );
  };

  const Card = ({ card }) => {
    if (card.id === 1) {
      return <div key={card.id} className="comp4"></div>;
    } else if (card.id === 2) {
      return (
        <div className="education-content">
          <h2 className="text-3xl font-bold mb-4">
            Bachelor of Science, Software Engineering
          </h2>
          <p className="text-xl mb-4">Sep 2020 – May 2025</p>
          <p className="text-xl mb-4">
            University Of Calgary, Calgary, Alberta, Canada
          </p>
        </div>
      );
    }

    // Default case if card.id isn't 1 or 2
    return (
      <div key={card.id} className="comp4">
        Default Content
      </div>
    );
  };

  return (
    <>
      <React.Fragment>
        <Navbar />
      </React.Fragment>
      <div className="main" id="Home">
        <div className="content">
          <div className="heroitems">
            <h1 className="title">
              <span>Shahzill&nbsp;</span>
              <span className="Red">Naveed</span>
            </h1>
            <p>
              <ReactTyped
                className="typing"
                strings={["Software Developer", "Athlete", "Fun Guy"]}
                typeSpeed={100}
                backSpeed={50}
                loop
              />
            </p>
          </div>
          <div className="contact-me-btn">
            <a href="/#ContactUs" className="btn btn-white btn-animate">
              Contact Me
            </a>
          </div>
        </div>
        <Particles id="tsparticles" />
      </div>

      {/* Second Section */}
      <div className="comp3" id="AboutUs">
        <div className="subcomp3">
          {/* About Section */}
          <div className="About">
            <div className="Content1">
              <h1>
                <span>About </span>
                <span className="Red">Me </span>
              </h1>
              <p>
                At{" "}
                <strong>
                  <span className="Red">ScratchZero</span>
                </strong>
                , we are dedicated to{" "}
                <strong>
                  <span className="Red">revolutionizing </span>
                </strong>{" "}
                the way businesses and individuals engage with technology. Our
                mission is clear: to{" "}
                <strong>
                  <span className="Red">empower our clients </span>
                </strong>{" "}
                with{" "}
                <strong>
                  <span className="Red">innovative software solutions </span>
                </strong>
                that cut through complexities and pave the way for{" "}
                <strong>
                  <span className="Red">unparalleled growth</span>
                </strong>
                . We are not just a software company; we are your partner in
                progress.
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="Social-Links">
          <div className="Content3">
            <a
              href="https://www.linkedin.com/company/scratchzero/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="scale1 Red" />
            </a>
            <a
              href="https://www.instagram.com/scratchzero_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="scale1 Red" />
            </a>
            <a
              href="https://www.facebook.com/scratchzero.net?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="scale1 Red" />
            </a>
          </div>
        </div>
      </div>
      <div className="curve">
        <img src={curve} alt="" />
      </div>
      <div className="comp2" id="Our-Services">
        <h1 className="ExperienceHeader">
          <span className={`${animate ? "" : "Red"}`}>E</span>
          <span className={`${animate1 ? "" : "Red"}`}>x</span>
          <span className={`${animate2 ? "" : "Red"}`}>p</span>
          <span className={`${animate3 ? "" : "Red"}`}>e</span>
          <span className={`${animate4 ? "" : "Red"}`}>r</span>
          <span className={`${animate4 ? "" : "Red"}`}>i</span>
          <span className={`${animate3 ? "" : "Red"}`}>e</span>
          <span className={`${animate2 ? "" : "Red"}`}>n</span>
          <span className={`${animate1 ? "" : "Red"}`}>c</span>
          <span className={`${animate ? "" : "Red"}`}>e</span>
        </h1>
        <div
          ref={containerRef}
          className={`container6 relative ${animate5 ? "animate-line" : ""}`}
          id="Experience"
        >
          {experiences.map((exp, index) => (
            <div
              className={`container7 ${index % 2 === 0 ? "right" : "left"}`}
              style={{ backgroundColor: exp.background }}
            >
              <div
                className={`experience p-4 ${
                  index % 2 === 0
                    ? "BlackColor-Hover-Change"
                    : "WhiteColor-Hover-Change"
                }`}
              >
                <div className="flex justify-between items-center color-on-hover">
                  <div>
                    <h3 className="text-lg font-bold titlee">{exp.title}</h3>
                    <p className="text-sm">{exp.company}</p>
                    <p className="text-xs italic">{exp.duration}</p>
                  </div>
                  <div className="w-16 h-16 bg-white rounded-full overflow-hidden">
                    <img
                      src={exp.logo}
                      alt="Company Logo"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <ul className="mt-2 text-sm list-disc line-height-experience">
                  {exp.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <HorizontalScrollCarousel />
      </div>
      <div className="comp7">
        <h1 className="TechStackHeader">
          <span className="Red">Tech </span>
          <span>Ecosystem </span>
        </h1>
        <div className="allStack">
          <div className="stack">
            <SiJavascript className="stackIcon" style={{ color: "#f7df1e" }} />{" "}
            JavaScript
          </div>

          <div className="stack">
            <SiHtml5 className="stackIcon" style={{ color: "#e34c26" }} /> HTML
          </div>

          <div className="stack">
            <SiCss3 className="stackIcon" style={{ color: "#2965f1" }} /> CSS
          </div>

          <div className="stack">
            <SiPython className="stackIcon" style={{ color: "#306998" }} />{" "}
            Python
          </div>

          <div className="stack">
            <SiNodedotjs className="stackIcon" style={{ color: "#8cc84b" }} />{" "}
            NodeJS
          </div>

          <div className="stack">
            <SiReact className="stackIcon" style={{ color: "#61dafb" }} /> React
          </div>

          <div className="stack">
            <SiDjango className="stackIcon" style={{ color: "#092e20" }} />{" "}
            Django
          </div>

          <div className="stack">
            <TbBrandCSharp className="stackIcon" style={{ color: "#178600" }} />{" "}
            C#
          </div>

          <div className="stack">
            <SiMysql className="stackIcon" style={{ color: "#00618d" }} /> MySQL
          </div>

          <div className="stack">
            <DiDatabase className="stackIcon" style={{ color: "#4e5b62" }} />{" "}
            SQL (General)
          </div>

          <div className="stack">
            <BiSolidServer className="stackIcon" style={{ color: "#4d4d4d" }} />{" "}
            SQL Server Studio
          </div>

          <div className="stack">
            <SiCplusplus className="stackIcon" style={{ color: "#00599c" }} />{" "}
            C++
          </div>

          <div className="stack">
            <FaJava className="stackIcon" style={{ color: "#f8981d" }} /> Java
          </div>

          <div className="stack">
            <SiBlazor className="stackIcon" style={{ color: "#5a2e8c" }} />{" "}
            Blazor
          </div>

          <div className="stack">
            <SiGit className="stackIcon" style={{ color: "#f34f29" }} /> Git
          </div>

          <div className="stack">
            <SiJunit5 className="stackIcon" style={{ color: "#25a000" }} />{" "}
            JUnit Testing
          </div>

          <div className="stack">
            <FaJira className="stackIcon" style={{ color: "#0062ff" }} /> JIRA
          </div>

          <div className="stack">
            <TbBrandVscode className="stackIcon" style={{ color: "#007acc" }} />{" "}
            VS Code
          </div>

          <div className="stack">
            <TbBrandVisualStudio
              className="stackIcon"
              style={{ color: "#5c2d91" }}
            />{" "}
            Visual Studio
          </div>

          <div className="stack">
            <VscSymbolNamespace
              className="stackIcon"
              style={{ color: "#b3b3b3" }}
            />{" "}
            Eclipse
          </div>

          <div className="stack">
            <SiSelenium className="stackIcon" style={{ color: "#43b02a" }} />{" "}
            Selenium
          </div>

          <div className="stack">
            <SiDocker className="stackIcon" style={{ color: "#2496ed" }} />{" "}
            Docker
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
