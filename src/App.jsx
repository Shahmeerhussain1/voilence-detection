import React, { useState, useRef , useMemo } from 'react';
import './App.css'
import urls from './urls';


const App = () => {
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

  const handleApply =async () => {
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
    <div className="flex flex-col md:flex-row h-screen w-full bg-gray-100">
      <div className="w-full md:w-1/5 p-4 md:p-6 bg-white shadow-md flex flex-col gap-6">
        <h3 className="text-lg font-semibold text-gray-800">Upload Video</h3>
        <div
          className={`border-2 border-dashed rounded-lg p-4 md:p-6 text-center cursor-pointer transition-colors ${dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-gray-50'
            }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleBrowseClick}
        >
          <p className="text-gray-500 text-sm md:text-base">
            {videoFile ? videoFile.name : 'Drop video here or click to browse'}
          </p>
          <button
            className="mt-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-md text-sm md:hidden"
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
            className="hidden"
            onChange={(e) => handleFileChange(e.target.files)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="senderEmail" className="text-sm font-medium text-gray-700">
            Sender Email
          </label>
          <input
            type="email"
            id="senderEmail"
            value={senderEmail}
            onChange={(e) => {
              e.preventDefault();
              setSenderEmail(e.target.value)
            }}
            placeholder="sender@example.com"
            className="border border-gray-300 rounded-md p-3 text-gray-800 bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="receiverEmail" className="text-sm font-medium text-gray-700">
            Receiver Email
          </label>
          <input
            type="email"
            id="receiverEmail"
            value={receiverEmail}
            onChange={(e) => {
              e.preventDefault()
              setReceiverEmail(e.target.value)
            }}
            placeholder="receiver@example.com"
            className="border border-gray-300 rounded-md p-3 text-gray-800 bg-gray-50 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          onClick={handleApply}
          disabled={isFormIncomplete}
          className={`py-2 md:py-3 px-4 rounded-md text-white text-base transition-colors ${isFormIncomplete
            ? 'bg-blue-400 opacity-50 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
            }`}
        >
          Apply
        </button>
      </div>

      <div className="w-full md:w-4/5 p-4 md:p-6 flex items-center justify-center bg-gray-200">
        {videoFile ? (
          <video
            controls
            autoPlay
            loop
            src={videoURL}
            className="max-w-full max-h-full rounded-lg shadow-md"
          />
        ) : (
          <p className="text-gray-500 text-base md:text-lg">No video uploaded yet</p>
        )}
      </div>
    </div>
  );
};

export default App;