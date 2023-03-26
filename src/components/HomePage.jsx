import React from "react";
import '../css/Home.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="head">Faveo</h1>

      <div className="wrapper">
        <div className="dashboard">
            <ul className="dashboard-list">
              <li className="list-item">Mange Users </li>
              <li className="list-item">Categories </li>
              <li className="list-item">Products </li>
              <li className="list-item">Orders </li>
            </ul>
        </div>

        <div className="user-about">

        </div>
      </div>
    </div>
  );
};

export default HomePage;
 