import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginContainer">
      <form className="login-form">
        <p className='titleLogIn'>Login here</p>
        <input
          placeholder="Email"
          type="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
          <Link to={"/Home"}>
          <button type="submit" className="submit-btn">Log In</button>
          </Link>
        
      </form>
    </div>
  );
};

export default Login;
