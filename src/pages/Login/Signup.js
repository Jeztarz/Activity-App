import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        email: registerEmail,
      },
      withCredentials: true,
      url: "http://localhost:4000/users/register",
    }).then((res) => console.log(res));
  };


  return (
    <div className="container login-page">
        {/* logo */}
        <div>
            <img src='./Images/Login/group2.png' alt='logo-login' className='picture-login'/>
        </div>
      
        <div className="form">
        {/* username */}
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>

        {/* email */}
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email" 
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
        </div>

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
      </div>
      
      

      {/* button click login */}
      
      
      <button type="button" className="btn" style={{color:'#b31031'}} onClick={register}>
        <Link to='/login'>SignUp </Link>
      </button>
      <button type="button" className="btn">
        <Link to='/login'>Login</Link> 
      </button>
    </div>
  )
}
export default Register;