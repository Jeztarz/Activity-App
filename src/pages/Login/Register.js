import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

const Register = () => {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  let navigate = useNavigate();
  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
        displayName: registerName,
      },
      withCredentials: true,
      url: "http://localhost:4000/users/register",
    }).then((res) => {
      console.log(res);
      if(res.data === "User Created"){
        navigate("/login");
      };
    });
  };
  

  return (
    <section>
      <div className='color'></div>
      <div className='color'></div> 
      <div className='color'></div>

    <div className="box">
      <div className='card-main'>
        <div className='form'>
          <h2>Register</h2>
          <form>
            {/* username */}
            <div className='inputBox'>
             <input 
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => setRegisterUsername(e.target.value)} />
            </div>

            {/* password */}
            <div className='inputBox'>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={(e) => setRegisterPassword(e.target.value)} />
            </div>

            {/* display name */}
            <div className='inputBox'>
             <input 
              type="text"
              name="displayName"
              placeholder="enter your display name"
              onChange={(e) => setRegisterName(e.target.value)} 
              />
            </div>
          
            {/* botton */}
            <div className='inputBox'>
              <button type="button" className="btnLogin" onClick={register}>
                SignUp
              </button>
              
            </div>

            <p className='click-register'>
              Have an account ? 
              <Link to='/login' style={{ color: '#FFF'}}> Login</Link>
            </p>

          </form>
        </div>
      </div>
    </div>
    </section>
  )
}
export default Register;