import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(18);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, age, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <>
      <div className='signupContainer'>
        <p className='signUpName'>Sign Up</p>
        <form className='signUpForm' onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label>
            Email:
            <input
              type="text"
              value={email}
              placeholder='ex: example@email.com'
              onChange={(e) => setEmail(e.target.value)}
              className='signUpInput'
              required
            />
          </label>
          <label>
            Username:
            <input
              type="text"
              value={username}
              placeholder='Enter a username'
              onChange={(e) => setUsername(e.target.value)}
              className='signUpInput'
              required
            />
          </label>
          <label>
              Age:
              <input
                type="number"
                min="18"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className='signUpInput'
                required
                />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              placeholder='Password must be 6 characters or longer'
              onChange={(e) => setPassword(e.target.value)}
              className='signUpInput'
              required
            />
          </label>
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className='signUpInput'
              required
            />
          </label>
          <button className='signupSubmit' type="submit">Sign Up</button>
        </form>
        </div>
    </>
  );
}

export default SignupFormPage;
