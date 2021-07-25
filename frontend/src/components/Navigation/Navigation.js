import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <>
        <NavLink className='nav' to={`/${sessionUser.id}/bookings`}>Your Bookings</NavLink>
        <NavLink className='nav' to='/vehicles'>Vehicles</NavLink>
        <p className='nav'>Welcome {sessionUser.username}</p>
        <ProfileButton user={sessionUser} />
    </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className='nav' to='/'>Home</NavLink>
        <NavLink className='nav' to="/login">Log In</NavLink>
        <NavLink className='nav' to="/signup">Sign Up</NavLink>
      </>
    );
  }

  return (
    <div className='navbar'>
    <ul>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
