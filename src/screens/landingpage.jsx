import React from "react";
import PngFiles from "../assets/PngFiles";
import "../assets/styles/style.css"
const LandingPage = () => {
  return (
    <div id="landingPage">
      <div className="container">
        <header>
          <div className="logo">
            <img src={PngFiles.logo} alt="Logo" />
          </div>
          <nav>
            <a href="/signup" className="nav-link" style={{ fontSize: "larger" }}>
              create account
            </a>
            <a href="/login" className="nav-link" style={{ fontSize: "larger" }}>
              login
            </a>
          </nav>
        </header>

        <main>
          <h1>Welcome to </h1>
          <h2>
            SAFESPACE<span>.AI</span>
          </h2>
          <p>
            Harnessing the Power of Artificial Intelligence to Detect and Prevent
            Abuse, Ensuring Safer Spaces for Children.
          </p>

          <section className="features">
            <div className="feature">
              <h3 style={{ color: "grey" }}>Abuse Detection</h3>
            </div>
            <div className="feature">
              <h3>Video Monitoring</h3>
            </div>
            <div className="feature">
              <img src={PngFiles.robot} alt="Video Monitoring Icon" />
            </div>
            <div className="feature">
              <h3>Real-Time Alerts</h3>
            </div>
            <div className="feature">
              <h3 style={{ color: "grey" }}>AI for Safety</h3>
            </div>
          </section>
        </main>

        <br />
        <div>
          <p>
            At SafeSpace AI, our mission is to protect those who cannot protect
            themselves. Our purpose is to revolutionize surveillance systems by
            integrating intelligent abuse detection, enabling timely
            interventions, and safeguarding the well-being of individuals in
            facilities like therapy centers, schools, and special care institutes.
          </p>
        </div>

        <div>
          <img
            src={PngFiles.hand}
            alt="Hand"
            width="20%"
            height="80%"
            style={{ marginRight: "55%" }}
          />
          <span>
            <h1 style={{ marginTop: "-24%", marginLeft: "20px" }}>
              Application Features
            </h1>
          </span>
          <p>
            Real-Time Monitoring
            <br />
            AI-Powered Abuse Detection
            <br />
            Secure User Management
            <br />
            Custom Notification
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;