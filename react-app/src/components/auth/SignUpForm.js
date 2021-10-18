import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './form.css';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='form-background'>
      <div id='form-signup-box'>
        Have an account?&nbsp;
        <NavLink to='/login' exact={true} activeClassName='active'>
            Log in
        </NavLink>
      </div>
      <form onSubmit={onSignUp} className='form-container'>
      <p className='form-header'>Sign up</p>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={updateUsername}
            value={username}
            className='input'
          ></input>
        </div>
        <div>
          <input
            type='text'
            name='email'
            placeholder='Email'
            onChange={updateEmail}
            value={email}
            className='input'
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={updatePassword}
            value={password}
            className='input'
          ></input>
        </div>
        <div>
          <input
            type='password'
            name='repeat_password'
            placeholder='Re-enter password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='input'
          ></input>
        </div>
        <button className='btn-primary' type='submit'>Create account</button>
      </form>
    </div>
  );
};

export default SignUpForm;
