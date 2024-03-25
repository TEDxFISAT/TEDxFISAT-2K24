import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";

import '../styles/Nav.css';
const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');
  const [Open, setOpen] = useState(false);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const handleClick = (itemName) => {
    setActiveItem(itemName);
    setOpen(false);
  };

  const toggleMenu = () => {
    setOpen(!Open);

   
    if (!Open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; 
    }
  };

  return (
    <>
      <div className={`Navbarbg ${Open ? 'no-scroll' : ''}`}> 
        <nav className='NavB'>
          <ul className='mobMenu'>
            <button onClick={toggleMenu}>
               <RxHamburgerMenu />
             </button>
             <h1>X</h1>
          </ul>

          <ul className='Nav'>
            <h1>X</h1>
            <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleItemClick('Home')}>
              <Link to='/'>Home</Link>
            </li>
            <li className={activeItem === 'Speakers' ? 'active' : ''} onClick={() => handleItemClick('Speakers')}>
              <Link to='#Speakers'>Speakers</Link>
            </li>
            <li className={activeItem === 'Sponsors' ? 'active' : ''} onClick={() => handleItemClick('Sponsors')}>
              <Link to='/Sponsors'>Sponsors</Link>
            </li>
            <li className={activeItem === 'Team' ? 'active' : ''} onClick={() => handleItemClick('Team')}>
              <Link to='/Team'>Team</Link>
            </li>
          </ul>
          <Link to='/Register' class="buttonn" onClick={() => handleItemClick('')} >
              Register
          </Link>
        </nav>
      </div>

      {Open && (
          <div className='MobNav'>
            <li className={activeItem === 'Home' ? 'active' : ''} onClick={() => handleClick('Home')}>
              <Link to='/'>Home</Link>
            </li>
            <li className={activeItem === 'Speakers' ? 'active' : ''} onClick={() => handleClick('Speakers')}>
              <Link to='#Speakers'>Speakers</Link>
            </li>
            <li className={activeItem === 'Sponsors' ? 'active' : ''} onClick={() => handleClick('Sponsors')}>
              <Link to='/Sponsors'>Sponsors</Link>
            </li>
            <li className={activeItem === 'Team' ? 'active' : ''} onClick={() => handleClick('Team')}>
              <Link to='/Team'>Team</Link>
            </li>            
          </div>
       )}
    </>
  );
};

export default Navbar;