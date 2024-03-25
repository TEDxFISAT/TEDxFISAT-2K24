import React from 'react';
import tkt from '../data/assets/Ticket.jpg';
import MagButton from './MagButton'
import '../styles/ticket.css';

const Ticket = () => {
  return (
    <div className='ticket' style={{width:"100vw",height:"100vh"}}>
      <h1 style={{color:"black",fontWeight:"800",fontSize:"5rem",margin:"0 0 3% 5%"}}>TICKET</h1>
        <img
          src={tkt} 
          alt="Ticket"
          className="ticket-image"
          style={{width:"90%",borderRadius:"15px",marginLeft:"5%",boxShadow:"0 0 10px #1e1e1e",border:"1px solid black"}}
        />
        <br/><button id="exploreBtn">EXPLORE</button>
    </div>
  );
};

export default Ticket;