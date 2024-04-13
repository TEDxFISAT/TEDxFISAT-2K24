import React from "react";
import tkt from "../data/assets/Ticket.jpg";
import tktv from "../data/assets/TktVtk.jpeg";
import "../styles/ticket.css";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Ticket = () => {
  const handleRoute = () => {
    window.location.href = "/Register";
  };

  useEffect(() => {
    const splitTypes = document.querySelectorAll(".reveal-headingTicket");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "chars" }); //new SplitType(char, { types: 'chars' });
      gsap.fromTo(
        text.chars,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          delay: 0.5,
          duration: 0.8,
          stagger: 0.08,
          y: 20,
          // delay:0.1,
          ease: "back.out",
          scrollTrigger: {
            trigger: ".reveal-headingTicket",
            // start: 'top 80%',
            // end: 'top 20%',
            // scrub: true,
            // markers: true,
            toggleActions: "restart none none none",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".ticket-image",
      {
        opacity: 0,
        x: -400,
      },
      {
        x: 0,
        duration: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: ".ticket-image",
          // start: 'top 80%',
          // end: 'top 20%',
          // scrub: true,
          // markers: true,
          toggleActions: "restart none none none",
        },
      }
    );

    //   gsap.fromTo('#exploreBtn',{
    //     opacity:0,
    //     scale:0
    //   },{
    //     opacity:1,
    //     scale:1,
    //     // duration:1,
    //     scrollTrigger: {
    //         trigger: '#exploreBtn',
    //         // start: 'top 80%',
    //         // end: 'top 20%',
    //         // scrub: true,
    //         // markers: true,
    //         toggleActions: 'restart none none none',
    //     },
    //   })
  }, []);

  return (
    <div
      className="ticket"
      style={
        {
          width: "100vw",
          height: "content-fit",
          // height: window.innerHeight < window.innerWidth ? "100vh" : "170vh",
          backgroundColor: "black",
          borderRadius: "30px",
        }
        // { height: "170vh", backgroundColor: "black" }
      }
    >
      <h1
        className="reveal-headingTicket"
        style={{
          color: "white",
          fontWeight: "800",
          fontSize: "5rem",
          margin: "0 0 3% 5%",
          overflow: "hidden",
        }}
      >
        TICKET
      </h1>
      <img
        src={window.innerHeight < window.innerWidth ? tkt : tktv}
        alt="Ticket"
        className="ticket-image"
        style={{
          width: "90%",
          borderRadius: "15px",
          marginLeft: "5%",
          boxShadow: "0 0 10px #1e1e1e",
          border: "1px solid black",
          opacity: 0,
        }}
      />
      <br />
      <br />
      <Link
        to="/Register"
        style={{
          color: "white",
          textDecoration: "none",
          backgroundColor: "rgb(110, 110, 110)",
          zIndex: 3,
          padding: "1%",
          borderRadius: "5px",
          fontWeight: "600",
          fontSize: "1rem",
        }}
      >
        REGISTERATIONS CLOSED
      </Link>
    </div>
  );
};

export default Ticket;
