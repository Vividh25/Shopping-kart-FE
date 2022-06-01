import React from 'react';
import { Link } from 'react-router-dom';

import './Signin.css';

const Signup = () => {
  const handleSignIn = () => {};
  return (
    <div className='container'>
      <header>SIGN UP</header>
      <form className='signInForm' method='post'>
        <Link to='/'>
          <img
            className='LoginLogo'
            src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
            alt='e shopping cart'
          />
        </Link>
        <div className='input-field'>
          <input className='fullName' placeholder='Fullname' />
          <input className='emailId' placeholder='Email' />
          <input className='dateOfBirth' placeholder='DateOfBirth' />
          <input className='gender' placeholder='Gender' />
          <input className='password' placeholder='Password' />
          <input className='confirmPassword' placeholder='Confirm Password' />
        </div>
        <Link to={'/home'} style={{ textDecoration: 'none' }}>
          <button onClick={handleSignIn} className='signInPageBtn'>
            Sign In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
