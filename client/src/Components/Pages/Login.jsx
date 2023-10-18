import React from 'react'
import CustomInput from '../CustomComponents/CustomInput'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <div>
      <div className='container'>
        <div className='headings'>
          <h3>Login</h3>
          <p>Login into your movies showcasing account </p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className='circle'></div>
        <form className='form-container'>
          <CustomInput type="email" label="Email Address" i_id="email" />
          <CustomInput type="password" label="Password" i_id="password" />
          <div className='forgot'>
            <Link to="forgot-password" className=''>
              Forgot Password
            </Link>
          </div>
          <Link 
            to="/"
            className='submit-btn'
            // style={{background: "#ffd333"}}
            type='submit'>
              Login
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login