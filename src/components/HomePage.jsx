import React from "react";
import { useState } from "react";
import '../css/Home.css'
import Categories from '../assets/Vector.svg'
import ManageUsersMenu from "../components/pages/MangerUsersMenu";

const HomePage = () => {

  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  let activeContent;

  if (activeTab === "Manage Users") {
    activeContent = <ManageUsersMenu />;
  }


  return (
    <div className="home-page">
      <h1 className="head">Faveo</h1>

      <div className="wrapper">
        <div className="dashboard">
          <ul className="dashboard-list">
            <li onClick={() => handleTabClick("Manage Users")} className="list-item active"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="users w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
              Manage Users </li>
            <li className="list-item"><img src={Categories} /> Categories </li>
            <li className="list-item"><img src={Categories} /> Products </li>
            <li className="list-item"><img src={Categories} /> Orders </li>
          </ul>
        </div>

        <div className="user-about">
          <div className="manger-product">
            <h1>Register Users</h1>
            <div className="personal-user">
              <div className="tab-content">
                {activeContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
