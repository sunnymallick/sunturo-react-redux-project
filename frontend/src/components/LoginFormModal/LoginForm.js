import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';



const LoginFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const demoUser = () => {
    const credential = 'Demo-lition';
    const password = 'password';
    history.push('/')
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
      <div className='loginPage'>
          <form onSubmit={handleSubmit} className='loginForm'>
            <ul>
              {errors.map((error, idx) => <li className='errorList' key={idx}>{error}</li>)}
            </ul>
            <label className='userLabel'>
              Username or Email:
              <input
                type="text"
                className='login'
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
            <label className='passwordLabel'>
              Password:
              <input
                type="password"
                className='login'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button className='loginSubmit' type="submit">Log In</button>
            <button className='demoUserLogin' type='button' onClick={demoUser}>Demo User Login</button>
          </form>
      </div>
    </>
  );
}

export default LoginFormPage;
