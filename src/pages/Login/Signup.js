import './Login.css';


const Register = () => {
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
          <input type="text" name="username" placeholder="username"/>
        </div>

        {/* email */}
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" />
        </div>

        {/* password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="password" />
        </div>
      </div>
      
      

      {/* button click login */}
      
      
      <button type="button" className="btn" style={{color:'#b31031'}}>
        SignUp
      </button>
    </div>
  )
}
export default Register;