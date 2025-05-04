import React, { useState, useRef, useMemo } from 'react';
import urls from '../urls';
import "../assets/styles/uploadVideo.css"
const UploadVideo = () => {
    const [videoFile, setVideoFile] = useState(null);
    const [senderEmail, setSenderEmail] = useState('');
    const [receiverEmail, setReceiverEmail] = useState('');
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const videoURL = useMemo(() => {
        return videoFile ? URL.createObjectURL(videoFile) : null;
    }, [videoFile]);

    const isFormIncomplete = !videoFile || !senderEmail.trim() || !receiverEmail.trim();

    const handleFileChange = (files) => {
        const file = files[0];
        if (file && file.type.startsWith('video/')) {
            setVideoFile(file);
        } else {
            alert('Please upload a valid video file (e.g., .mp4, .mov, .webm)');
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);
        handleFileChange(e.dataTransfer.files);
    };

    const handleBrowseClick = () => {
        fileInputRef.current.click();
    };

    const handleApply = async () => {
        console.log('Sending form data:', {
            videoFile: videoFile.name,
            senderEmail,
            receiverEmail,
        });
        const formData = new FormData();
        formData.append('videoFile', videoFile);
        formData.append('senderEmail', senderEmail);
        formData.append('receiverEmail', receiverEmail);


        try {
            const response = await axios.post(urls.API_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Server response:', response.data);
        } catch (error) {
            console.log('Error submitting form:', error);
        }
    };

    return (
        <div id='UploadVideo'>
             <div className="video-upload-container">
      {/* Left Div: Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title">Upload Video</h3>
        <div
          className={`drop-zone ${dragActive ? 'drop-zone-active' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <p className="drop-zone-text">
            {videoFile ? videoFile.name : 'Drop video here or click to browse'}
          </p>
          <button
            className="browse-button"
            onClick={(e) => {
              e.stopPropagation();
              handleBrowseClick();
            }}
          >
            Browse
          </button>
          <input
            type="file"
            accept="video/*"
            ref={fileInputRef}
            className="file-input"
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="senderEmail" className="form-label">Sender Email</label>
          <input
            type="email"
            id="senderEmail"
            value={senderEmail}
            onChange={(e) => setSenderEmail(e.target.value)}
            placeholder="sender@example.com"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverEmail" className="form-label">Receiver Email</label>
          <input
            type="email"
            id="receiverEmail"
            value={receiverEmail}
            onChange={(e) => setReceiverEmail(e.target.value)}
            placeholder="receiver@example.com"
            className="form-input"
          />
        </div>
        <button
          onClick={handleApply}
          disabled={isFormIncomplete}
          className={`apply-button ${isFormIncomplete ? 'apply-button-disabled' : ''}`}
        >
          Apply
        </button>
      </div>

      {/* Right Div: Video Area */}
      <div className="video-area">
        {videoFile ? (
          <video
            controls
            autoPlay
            loop
            src={URL.createObjectURL(videoFile)}
            className="video-player"
          />
        ) : (
          <p className="video-placeholder">No video uploaded yet</p>
        )}
      </div>
    </div></div>)
}
export default UploadVideo;