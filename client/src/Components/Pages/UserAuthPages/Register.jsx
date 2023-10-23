import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Auth.css'

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('')

  async function registerUser(event) {
    event.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password
      })
      alert('Registration successful. Now go to login page');
    }catch(error) {
      alert('Registration failed. Please try again later');
    }
  }

  return (
    <div className='dark-closure'>
      <div className='container'>
        <div className='headings'>
          <h3>Register</h3>
          <p>Make a new movies account </p>
        </div>
        <br />
        <form className='register-form-container' onSubmit={registerUser}>
          <input 
            type="text"
            placeholder="User Name"
            value={name}
            onChange={ev => setName(ev.target.value)}
          />
          <input 
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          <input 
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={ev => setConfirmPassword(ev.target.value)}
          />
          <br />
          <br />
          <button 
            className='submit-btn'
            type='submit'>
              Register
          </button>
          <div className=''>
            Have an account already? <Link className='login-link' to={'/login'}>Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register