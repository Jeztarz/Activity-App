import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  let navigate = useNavigate();
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/users/login",
    }).then((res) => {
      console.log(res);
      navigate("/");
    });
  };

  return (
    <section>
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>

      <div className="box">
        <div className="card-main">
          <div className="form">
            <h2>Login</h2>
            <form>
              {/* username */}
              <div className="inputBox">
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
              </div>

              {/* password */}
              <div className="inputBox">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>

              {/* botton */}
              <div className="inputBox">
                <button type="button" className="btnLogin" onClick={login}>
                  Login
                </button>
              </div>

              <p className="click-register">
                Don't have an account ? 
                <Link to="/register" style={{ color: "#FFF" }}> Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
