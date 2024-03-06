import React from "react";
import "./css/LoginPage.css";
const LoginPage = () => {
  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already Have An Account?
          <span> Login here</span>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing,I agree to the terms and conditions</p>
          </div>
        </p>
      </div>
    </div>
  );
};
export default LoginPage;
