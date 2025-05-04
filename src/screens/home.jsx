import React from 'react';
import { useNavigate } from "react-router-dom";
import "../assets/styles/home.css"; 
import PngFiles from '../assets/PngFiles';

const Home = () => {
    const navigate = useNavigate();


    return (
        <div id='Home'>
          <header className="header">
            <div className="navbar">
              <div className="logo">
                <a href="/home">
                  <img src={PngFiles.logo} alt="Logo" width="120" />
                </a>
              </div>
              <div className="menu">
                <a href="/videomanage">Video Management</a>
                {/* <a href="/notification">Notifications</a> */}
                {/* <a href="/settings">Settings</a> */}
                <a href="/signin" className="logout-icon" title="Logout">
                  🔓
                </a>
              </div>
            </div>
          </header>
    
          <main className="main-content">
            <p className="message">
              There is no CCTV session active, connect your device or upload your
              footage
            </p>
            <button
              className="upload-button"
              onClick={() => navigate("/video")}
            >
              Upload Footage
            </button>
            <div className="robot">
              <img src={PngFiles.camera} alt="Robot Mascot" />
            </div>
          </main>
        </div>)
}
export default Home;