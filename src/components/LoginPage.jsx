import React, { useState } from "react";
import "../css/LoginPage.css";
import HomePage from "./HomePage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace with your own logic for verifying credentials
    if (email === "you@gmail.com" && password === "1234") {
      setLoggedIn(true);
    } else {
      alert("Incorrect email or password");
    }
  };

  return (
    <>
      {loggedIn ? (
        <HomePage />
      ) : (
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
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default LoginPage;
