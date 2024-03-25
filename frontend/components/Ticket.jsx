import React from 'react';
import tkt from '../data/assets/Ticket.jpg';
// import '../styles/ticket.css';

const Ticket = () => {
  return (
    <div className='ticket' style={{width:"100vw",height:"100vh",border:"1px solid"}}>
      <h1 style={{color:"black"}}>Ticket</h1>
        <img
          src={tkt} 
          alt="Ticket"
          className="ticket-image"
          style={{width:"90%",borderRadius:"15px"}}
        />
        <button>Buy</button>
    </div>
  );
};

export default Ticket;