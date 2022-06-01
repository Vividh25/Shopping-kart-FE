import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogIn = () => {
    console.log('Youre logged in');
  };
  //login as admin //link to admin page ........
  return (
    <div className='container'>
      <h1
        style={{ textAlign: 'center', fontWeight: 'heavy', marginTop: '10px' }}
      >
        Login
      </h1>
      <div className='loginBox'>
        <div className='header'>
          <Link to='/'>
            <img
              className='LoginLogo'
              src='https://cdn-icons-png.flaticon.com/512/263/263142.png'
              alt='e shopping cart'
            />
          </Link>
        </div>
        <input className='emailInput' placeholder='Email' />
        <input className='passInput' placeholder='Password' />
        <Link to={'/home'}>
          <button onClick={handleLogIn} className='loginPageBtn'>
            Log In
          </button>
        </Link>
        <Link to={'/signin'}>
          <button onClick={handleLogIn} className='loginPageBtn'>
            Don't have an account ? Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
