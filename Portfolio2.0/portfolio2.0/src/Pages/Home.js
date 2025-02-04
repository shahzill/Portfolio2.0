import React from "react";
import Navbar from "./Navbar";
import { FaInstagram, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import Particles from "../Components/Particles";
import { ReactTyped } from "react-typed";
import "../Styles/Home.css";

function Home() {
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
          <Fade left>
            <div className="About">
              <div className="Content1">
                <h1>
                  <span className="AllH">OUR </span>
                  <span className="AboutH">MISSION </span>
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

          {/* Why Us */}
          <Fade right>
            <div className="Why-Choose-Us">
              <div className="Content2">
                <h1>
                  <span className="WhyH">OUR </span>
                  <span className="ChooseH">VISION</span>
                </h1>
                <p>
                  Our{" "}
                  <strong>
                    <span className="Red">
                      relentless pursuit of excellence{" "}
                    </span>
                  </strong>
                  drives us to be the preferred choice for clients seeking
                  cutting-edge solutions. Leveraging the power of{" "}
                  <strong>
                    <span className="Red">modern technologies</span>
                  </strong>
                  , we craft digital experiences that transcend the ordinary and
                  define the extraordinary. Our{" "}
                  <strong>
                    <span className="Red">commitment to your success </span>
                  </strong>{" "}
                  is unwavering, and we are here to guide you on your journey to
                  success.
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
                <FaInstagram className="scale2 Red" />
              </a>
              <a
                href="https://www.facebook.com/scratchzero.net?mibextid=LQQJ4d"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="scale3 Red" />
              </a>
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
