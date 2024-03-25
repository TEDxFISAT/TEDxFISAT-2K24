import React from 'react';
import teamData from '../data/teamData';
import '../styles/team.css';

const Team = () => {
  return (
    <div className='containr'>
      <h1 id='hd'>Our Team</h1>
      {teamData.map((team, index) => (
        <div key={team.team} className='team-sec bg-red-500'>
          <h2 id="heading">{team.team}</h2>
          <div className='team-members'>
            {team.members.map((member, i) => (
              <div key={member.name} className='team-img'> 
                <img src={member.img} alt={member.name} /> 
                <div className='team-mem'>
                  <h1>{member.name}</h1>
                  <p className='team-mem'>{member.role}</p> 
                </div> 
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;