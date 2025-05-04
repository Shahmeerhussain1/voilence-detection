import React, { useState } from 'react';
import "../assets/styles/videoManage.css";
import PngFiles from '../assets/PngFiles';
const VideoManagement = () => {
    const [hiddenCameras, setHiddenCameras] = useState([]);
    const handleHideCamera = (cameraName) => {
        setHiddenCameras((prev) =>
            prev.includes(cameraName) ? prev : [...prev, cameraName]
        );
    };

    const cameras = [
        { id: 1, name: 'Camera 1', date: '15-05-2024', time: '12:19:49 PM' },
        { id: 2, name: 'Camera 2', date: '15-05-2024', time: '12:19:49 PM' },
        { id: 3, name: 'Camera 3', date: '15-05-2024', time: '12:19:49 PM' },
        { id: 4, name: 'Camera 4', date: '15-05-2024', time: '12:19:49 PM' },
    ];
    return (
        <div id="videoManage">
            <div className="navbar">
                <div className="logo">
                    <a href="home.html">
                        <img src={PngFiles.logo} alt="Logo" />
                    </a>
                </div>
                <div className="menu">
                    <a href="/video">Video Upload</a>
                    <a href="/video">Home</a>
                    <a href="/login" className="logout-icon">
                        🔓
                    </a>
                </div>
            </div>

            {/* Camera Grid */}
            <div className="camera-grid">
                {cameras.map((camera) => (
                    !hiddenCameras.includes(camera.name) && (
                        <div key={camera.id} className="camera-tile">
                            <div className="header">
                                <div className="name">{camera.name}</div>
                                <div
                                    className="hide-button"
                                    onClick={() => handleHideCamera(camera.name)}
                                >
                                    Hide
                                </div>
                            </div>
                            <div className="footer">
                                <div>Date: {camera.date}</div>
                                <div>Time: {camera.time}</div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
    )
}
export default VideoManagement;