import React from 'react'
import CustomInput from '../CustomComponents/CustomInput'
import { Link } from 'react-router-dom'
import './Auth.css'

const Register = () => {
  return (
    <div className='dark-closure'>
      <div className='container'>
        <div className='headings'>
          <h3>Register</h3>
          <p>Make a new movies account </p>
        </div>
        <br />
        <br />
        <br />
        <form className='form-container'>
          <CustomInput type="text" label="Username" i_id="text" />
          <CustomInput type="email" label="Email Address" i_id="email" />
          <CustomInput type="password" label="Password" i_id="password" />
          <CustomInput type="password" label="Confirm Password" i_id="confirmpassword" />
          <CustomInput type="text" label="Mobile Number" i_id="mobile" />
          <br />
          <br />
          <br />
          <br />
          <Link 
            to="/register"
            className='submit-btn'
            type='submit'>
              Register
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Register