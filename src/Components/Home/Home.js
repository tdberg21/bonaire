import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';


const Home = () => {

  return (
    <div className='Home-component'>
      <div className=''>
        <div className='header-section'>
          <header>
            <NavLink to='/squad' className='nav'> Squad </NavLink>
            <NavLink to='/dives' className='nav'> Dives </NavLink>
            <NavLink to='/group' className='nav'> Group Pics </NavLink>
            <NavLink to='/videos' className='nav'> Videos </NavLink>
          </header>
        </div>
      </div>
    </div>
  )
}

export default Home;