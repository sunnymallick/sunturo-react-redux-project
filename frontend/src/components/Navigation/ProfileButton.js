// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from 'react-redux';
// import * as sessionActions from '../../store/session';
// import { useHistory } from 'react-router-dom';
// // import { Link } from "react-router-dom";
// import './ProfileButton.css'

// function ProfileButton({ user }) {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const sessionUser = useSelector(state => state.session.user);
//   const [showMenu, setShowMenu] = useState(false);

//   const openMenu = () => {
//     if (showMenu) return;
//     setShowMenu(true);
//   };

//   useEffect(() => {
//     if (!showMenu) return;

//     const closeMenu = () => {
//       setShowMenu(false);
//     };

//     document.addEventListener('click', closeMenu);

//     return () => document.removeEventListener("click", closeMenu);
//   }, [showMenu]);

//   const logout = (e) => {
//     e.preventDefault();
//     dispatch(sessionActions.logout());
//     history.push('/')
//   };

//   return (
//     <>
//         <button onClick={logout} className='logout'>
//           {/* <i className="fas fa-user-circle" /> */}
//           <p className='logout'>Logout {sessionUser.username}?</p>
//         </button>
//       {/* {showMenu && (
//         <ul className="profile-dropdown">
//           <li>{user.email}</li>
//           <li>
//             <button onClick={logout}>Log Out</button>
//           </li>
//         </ul>
//       )} */}
//     </>
//   );
// }

// // export default ProfileButton;
