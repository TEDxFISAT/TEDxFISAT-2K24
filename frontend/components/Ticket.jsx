import React from 'react';
import tkt from '../data/assets/Ticket.jpg';
import tktv from '../data/assets/TktVtk.jpeg'
import '../styles/ticket.css';

const Ticket = () => {
  return (
    <div className='ticket' style={window.innerHeight<window.innerWidth?{width:"100vw",height:"100vh"}:{height:"170vh"}}>
      <h1 style={{color:"black",fontWeight:"800",fontSize:"5rem",margin:"0 0 3% 5%"}}>TICKET</h1>
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