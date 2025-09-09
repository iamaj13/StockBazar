import React, { useState } from "react";
import axios from "axios";

const Sign_up = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/signup", {
        email,
        password,
      });

      if (res.data.success) {
        setMessage("Login successful ✅ Redirecting...");
        window.location.href = "http://localhost:3000/";
      } else {
        setMessage("Invalid credentials ❌");
      }
    } catch (err) {
      setMessage("Server error ❌");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src= "logo.png" alt="Logo" className="login-logo" />
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              placeholder="Enter admin@exapmle.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              placeholder="Enter admin123"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Sign_up;
