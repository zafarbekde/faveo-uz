import React, { useState } from "react";
import './css/LoginPage.css'
import './css/HomePage.css'

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your own logic for verifying credentials
    if (email === "fuckyou@gmail.com" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Incorrect email or password");
    }
  };

  if (loggedIn) {
    return <HomePage />;
  }

  return (
    <div className="login-page">
      <h1 className="">Faveo</h1>
      <form onSubmit={handleSubmit}>
        <div className="login">
          <h1>Login</h1>
          <div className="input">
            <input
              type="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          <button className="login-btn" type="submit">Login</button>
        </div>

      </form>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is where you can see your dashboard or profile information</p>
    </div>
  );
};

export default LoginPage;
