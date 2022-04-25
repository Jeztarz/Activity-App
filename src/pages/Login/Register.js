import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

const Register = () => {
  // const [registerUsername, setRegisterUsername] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [registerName, setRegisterName] = useState("");
  // let navigate = useNavigate();
  // const register = () => {
  //   axios({
  //     method: "POST",
  //     data: {
  //       username: registerUsername,
  //       password: registerPassword,
  //       displayName: registerName,
  //     },
  //     withCredentials: true,
  //     url: "http://localhost:4000/users/register",
  //   }).then((res) => {
  //     console.log(res);
  //     if(res.data === "User Created"){
  //       navigate("/login");
  //     };
  //   });
  // };

  let navigate = useNavigate();
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [formRegister, setFormRegister] = useState({
    username: '',
    displayName: '',
    password: '',
  })
  useEffect(()=>{
    console.log(`formError username=${formErrors.username},displayName=${formErrors.displayName},password=${formErrors.password}`);
  if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(`formRegister username=${formRegister.username},password=${formRegister.password},displayName=${formRegister.displayName}`);
    axios({
    method: "POST",
    data: {
      username: formRegister.username,
      password: formRegister.password,
      displayName: formRegister.displayName,
    },
    withCredentials: true,
    url: "http://localhost:4000/users/register",
  }).then((res) => {console.log(res)
                     navigate("/login");});
  }
   },[formErrors]);

  const handleChange = (e) => {
    setFormRegister({
      ...formRegister,
      [e.target.name]: e.target.value,
  })}

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formRegister));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors ={};
    const repass = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if(!values.username){
      errors.username = "Username is required!"
    }
    if(!values.password){
      errors.password = "Password is required!"
    }else if (!repass.test(values.password)){
      errors.password = "Password must be 8-16 characters character, capital character and number!"
    }else if (values.password.length>16||values.password.length<8){
      errors.password = "password must be 8-16 characters!"
    }

    if(!values.displayName){
      errors.displayName = "DisplayName is required!"
    }
    return errors;
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
          <form className='validate' onSubmit={handleSubmit}>
            {/* username */}
            <div className='inputBox'>
             <input 
              type="text"
              name="username"
              placeholder="username"
              onChange={handleChange} />
              <h1>{formErrors.username}</h1>
            </div>

            {/* password */}
            <div className='inputBox'>
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange} />
                <h1>{formErrors.password}</h1>
            </div>

            {/* display name */}
            <div className='inputBox'>
             <input 
              type="text"
              name="displayName"
              placeholder="enter your display name"
              onChange={handleChange}
              />
              <h1>{formErrors.displayName}</h1>
            </div>
          
            {/* botton */}
            <div className='inputBox'>
              <button type="submit" className="btnLogin">
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