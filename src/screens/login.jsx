import React, { useState } from "react";
import "../assets/styles/signin.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (email === "admin@gmail.com" && password === "12345") {
      window.location.href = "/home"; // Adjust route as needed (or use React Router)
    } else {
      if (email !== "admin@gmail.com") {
        setEmailError("Invalid email address.");
      }
      if (password !== "12345") {
        setPasswordError("Incorrect password.");
      }
    }
  };

  return (
    <div id="login">
      <div className="container">
        <div className="login-form">
          <h2>WELCOME BACK</h2>
          <p>Welcome to SafeSpace, Please enter your details to login</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <div className="error-message">{emailError}</div>}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <div className="error-message">{passwordError}</div>}

            <a href="/forgot" className="forgot-password">
              Forgot Password?
            </a>

            <button type="submit" className="btn" style={{ width: "100%" }}>
              Sign in
            </button>
          </form>
          <p>
            Don't have an account? <a href="/createaccount">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Login;