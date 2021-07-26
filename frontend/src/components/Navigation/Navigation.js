import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginFormModal from '../LoginFormModal';

// import ProfileButton from './ProfileButton';
import './Navigation.css';

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push('/')
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
    <>
        <img src='https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/background-images/Screen+Shot+2021-07-25+at+10.21.50+PM.png' alt='logo' className='nav'/>
        <NavLink className='nav' to='/'>Home</NavLink>
        <NavLink className='nav' to={`/${sessionUser.id}/bookings`}>Your Bookings</NavLink>
        <NavLink className='nav' to='/vehicles'>Vehicles</NavLink>
        <NavLink className='nav' onClick={logout} to='/'>Logout {sessionUser.username}?</NavLink>
    </>
    );
  } else {
    sessionLinks = (
      <>
        <img src='https://sunny-website-clone.s3.us-west-1.amazonaws.com/images-for-website/background-images/Screen+Shot+2021-07-25+at+10.21.50+PM.png' alt='logo'/>
        <NavLink className='nav' to='/'>Home</NavLink>
        <LoginFormModal className='nav' />
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
