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
      <div className='click-signup'>
      <p>You have an account ? </p>
      <p className='button-signup'>&nbsp;&nbsp;SignIn </p>
      </div>
      

      {/* button click login */}
      
      <button type="button" className="btn">
        Register
      </button>
      
    </div>
  )
}
export default Register;