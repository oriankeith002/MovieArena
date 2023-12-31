import React, {useState, useContext} from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import './Auth.css'
import axios from 'axios';
import { UserContext } from '../../SupportUtilities/UserContext';

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const {setUser} = useContext(UserContext) // updating context with logged in user

  async function handleLoginSubmission(event) {
    event.preventDefault(); // preventing inbuilt default form submission.

    try {
      const {data} = await axios.post("/user/login", {email,password}) //making a post request to login
      console.log('---- Starting sending data to context -------')
      setUser(data); //updating user context data
      console.log(data)
      console.log('--------- End Sending data to context --------')
      // console.log(data)
      setRedirect(true);

    } catch (error) {
      if (error) {
        alert('Login failed') // alert user incase of any error 
      }
      // throw new Error(error)
    }
  } 

  if (redirect) {
    navigate('/')
  }

  return (
      <div className='container'>
        <div className='headings'>
          <h3>Login</h3>
          <p>Login into your movies showcasing account </p>
        </div>
        <br />
        <form className='form-container' onSubmit={handleLoginSubmission}>
          <input 
            type="email"
            placeholder="Email address"
            value={email}
            onChange={ev => setEmail(ev.target.value)}
          />
          <input 
            type="password"
            placeholder="Password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}
          />
          
          <button 
            className='submit-btn'
            type='submit'>
              Login
          </button> 
          <div className='registration-link'>
            Do not have an account yet? <Link className='reg-link' to={"/register"}>Register</Link>
          </div>
          <div>
            <Link to={"/"} className='reg-link'>
              BACK TO HOME
            </Link>
          </div>
          
        </form>
      </div>
  )
}

export default Login