import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import "../styles/Footer.css"; // Import the CSS file
import SplitType from "split-type";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  useEffect(() => {
    gsap.fromTo(
      ".footer div",
      {
        opacity: 0,
        y: 200,
      },
      {
        y: 0,
        duration: 1.2,
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".footer",
          // start: 'top 80%',
          // end: 'top 20%',
          // scrub: true,
          // markers: true,
          toggleActions: "restart none none none",
        },
      }
    );

    //     gsap.fromTo('.icon',{
    //       opacity:0,
    //       scale:0
    //     },{
    //       scale:1,
    //       opacity:1,
    //       duration:2,
    //       scrollTrigger: {
    //           trigger: '.footer',
    //           // start: 'top 80%',
    //           // end: 'top 20%',
    //           // scrub: true,
    //           // markers: true,
    //           toggleActions: 'restart none none none',
    //       },
    //     })
  }, []);

  return (
    <div
      style={
        window.innerHeight < window.innerWidth
          ? {
              height: "70vh",
              width: "100vw",
              border: "0.01px solid rgba(255, 255, 255, 0)",
            }
          : { height: "100vh", width: "100vw" }
      }
    >
      <footer
        className="footer"
        style={
          window.innerHeight < window.innerWidth
            ? {
                minHeight: "54vh",
                maxHeight: "fitContent",
                marginLeft: "1%",
                marginTop: "8vh",
                width: "98%",
                display: "flex",
                backgroundColor: "black",
                borderRadius: "15px",
                justifyContent: "space-around",
                alignItems: "center",
                overflow: "hidden",
              }
            : {
                minHeight: "90vh",
                maxHeight: "fitContent",
                marginLeft: "1%",
                marginTop: "5vh",
                width: "98%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "black",
                paddingBottom: "8vh",
                borderRadius: "15px",
                justifyContent: "space-between",
                alignItems: "center",
                overflow: "hidden",
              }
        }
      >
        <div
          className="left-section"
          style={
            window.innerHeight < window.innerWidth
              ? { height: "65%", marginBottom: 0 }
              : { height: "20%" }
          }
        >
          <h1>
            <span style={{ color: "red" }}>TEDx</span>FISAT
          </h1>
          <p>
            This independent TEDx event
            <br />
            is operated under license
            <br />
            from TED.
          </p>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/tedxfisat24?igsh=MW5pcGdqYmwydjl2bQ=="
              target="_blank"
            >
              {" "}
              <FaInstagram
                className="icon"
                href="https://www.instagram.com/tedxfisat24?igsh=MW5pcGdqYmwydjl2bQ=="
              />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxfisat/mycompany/"
              target="_blank"
            >
              {" "}
              <FaLinkedin className="icon" />
            </a>
            <a href="/" target="_blank">
              {" "}
              <FaYoutube className="icon" />
            </a>
          </div>
        </div>

        <div
          className="Contact"
          style={
            window.innerHeight < window.innerWidth
              ? {
                  minHeight: "65%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }
              : { height: "18%" }
          }
        >
          <h1
            style={
              window.innerHeight < window.innerWidth
                ? { fontSize: "3rem" }
                : { fontSize: "2.5rem" }
            }
          >
            CONTACT <span style={{ color: "red" }}>US</span>
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="tel:+919526685266">
              <CiPhone className="icon" />
            </a>
            <a href="mailTo:tedx.fisat24@gmail.com">
              <MdOutlineEmail className="icon" />
            </a>
            {/* <FaInstagram className="icon" /> */}
          </div>
        </div>

        <div
          className="right-section"
          style={
            window.innerHeight < window.innerWidth
              ? { height: "65%", marginBottom: 0 }
              : { height: "20%" }
          }
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.3724180250515!2d76.40665101478143!3d10.231517592692693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08068aa17bd247%3A0xf048b9ebcbd2af28!2sFederal%20Institute%20of%20Science%20And%20Technology%20(FISAT)%C2%AE!5e0!3m2!1sen!2sin!4v1678482024451!5m2!1sen!2sin"
            className="map"
            style={{ borderRadius: "8px", border: "none" }}
          ></iframe>
          <p>
            Federal Institute of Science and Technology,
            <br />
            Mookannoor, Angamaly, Eranakulam,
            <br />
            Kerala, India-653523
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
