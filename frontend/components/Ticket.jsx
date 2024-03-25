import React from 'react';
import tkt from '../data/assets/Ticket.jpg';
import tktv from '../data/assets/TktVtk.jpeg'
import '../styles/ticket.css';
import SplitType from 'split-type'
import { useEffect,useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Ticket = () => {

    useEffect(() => {
        const splitTypes = document.querySelectorAll('.reveal-headingTicket');
    
        splitTypes.forEach((char, i) => {
  
            const text = new SplitType(char,{types:'chars'})//new SplitType(char, { types: 'chars' });
            gsap.fromTo(
                text.chars,
                {
                    opacity:0,
                    y:100
                },
                {
                    opacity:1,
                    duration: 0.8,
                    stagger: 0.08,
                    y:20,
                    delay:0.1,
                    ease:"back.out",
                    scrollTrigger: {
                        trigger: '.reveal-headingTicket',
                        // start: 'top 80%',
                        // end: 'top 20%',
                        // scrub: true,
                        // markers: true,
                        toggleActions: 'restart none none none',
                    },
                }
            );
        });
    }, []);


  return (
    <div className='ticket' style={window.innerHeight<window.innerWidth?{width:"100vw",height:"100vh"}:{height:"170vh"}}>
      <h1 className="reveal-headingTicket" style={{color:"black",fontWeight:"800",fontSize:"5rem",margin:"0 0 3% 5%",overflow:"hidden"}}>TICKET</h1>
        <img
          src={window.innerHeight<window.innerWidth?tkt:tktv} 
          alt="Ticket"
          className="ticket-image"
          style={{width:"90%",borderRadius:"15px",marginLeft:"5%",boxShadow:"0 0 10px #1e1e1e",border:"1px solid black"}}
        />
        <br/><button id="exploreBtn">EXPLORE</button>
    </div>
  );
};

export default Ticket;