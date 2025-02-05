import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Particles from "../Components/Particles";
import { ReactTyped } from "react-typed";
import curve from "../Media/notch.png";
import "../Styles/Home.css";

function Home() {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);
  const experiences = [
    {
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
      background: "#141a46",
    },
    {
      title: "Tech Specialist",
      company: "London Drugs",
      duration: "August, 2022 - Present",
      description: [
        "Assisted up to 50 customers daily, solving their technical issues and providing expert advice.",
        "Stayed updated with the latest technology by attending London Drugs workshops.",
        "Recognized by administration as the fastest-learning employee they have ever had.",
      ],
      background: "#005faf",
    },
    {
      title: "Vice President of Events",
      company: "Pakistani Student Society, University of Calgary",
      duration: "March, 2022 - March, 2023",
      description: [
        "Organized diverse events for up to 350 students.",
        "Negotiated with vendors to secure cost-effective deals.",
        "Managed a team, conducted interviews, and trained new junior executives.",
      ],
      background: "#1d783d",
    },
    {
      title: "Data Analyst Student Intern",
      company: "CEES, The University of Punjab",
      duration: "June, 2018 - January, 2019",
      description: [
        "Assisted in publishing a research paper by collecting and analyzing data.",
        "Collected water samples and processed data into graphical representations.",
      ],
      background: "goldenrod",
    },
  ];

  useEffect(() => {
    // Create the IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting) {
          // Set animate to true when container is in view
          setAnimate(true);
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
          <Fade up>
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
          </Fade>
        </div>

        {/* Social Links */}
        <div className="Social-Links">
          <div className="Content3">
            <Fade bottom>
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
            </Fade>
          </div>
        </div>
      </div>
      <div className="curve">
        <img src={curve} />
      </div>
      <div className="comp2" id="Our-Services">
        <div className="ExperienceHeader">Experience</div>
        <div
          ref={containerRef}
          className={`container6 relative ${animate ? "animate-line" : ""}`}
          id="Experience"
        >
          {experiences.map((exp, index) => (
            <Fade bottom key={index}>
              <div
                className={`container7 ${index % 2 === 0 ? "right" : "left"}`}
                style={{ backgroundColor: exp.background }}
              >
                <div className="experience p-4 rounded-lg text-white">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">{exp.title}</h3>
                      <p className="text-sm">{exp.company}</p>
                      <p className="text-xs italic">{exp.duration}</p>
                    </div>
                    <div className="w-16 h-16 bg-gray-300 rounded-full" />
                  </div>
                  <ul className="mt-2 text-sm list-disc list-inside">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
