
import React, { useState, useEffect } from 'react';
import { X, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SuspiciousActivityAlert() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    setIsAnimating(true);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleLearnMore = () => {
    // Simulate learn more action with a subtle animation
    const alert = document.getElementById('alert-container');
    if (alert) {
      alert.style.transform = 'scale(1.02)';
      setTimeout(() => {
        alert.style.transform = 'scale(1)';
      }, 150);
    }
    alert('Learn more clicked! This would typically redirect to a security help page.');
  };

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      {/* Backdrop blur effect */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm"></div>
      
      {/* Alert Container */}
      <div 
        id="alert-container"
        className={`
          relative z-10 bg-white rounded-2xl shadow-2xl border border-gray-200 
          max-w-lg w-full mx-4 p-8 
          transform transition-all duration-500 ease-out
          ${isAnimating ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'}
          hover:shadow-3xl hover:scale-[1.01]
        `}
      >
        {/* Close Button */}
        <Link to="/pop-up">
        <button
          onClick={handleClose}
          className="
            absolute top-6 right-6 p-2 rounded-full 
            text-gray-400 hover:text-gray-600 hover:bg-gray-100
            transition-all duration-200 ease-in-out
            hover:rotate-90 hover:scale-110
          "
          aria-label="Close alert"
        >
          <X size={24} />
        </button>
        </Link>
        {/* Warning Icon */}
        <div className="flex justify-center mb-4">
          <div className="
            relative p-3 bg-gradient-to-br from-red-50 to-orange-50 
            rounded-full border-2 border-red-100
            animate-pulse
          ">
            <AlertTriangle 
              size={32} 
              className="text-red-500 animate-bounce" 
              style={{ animationDuration: '2s' }}
            />
            <div className="absolute inset-0 bg-red-400/20 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="
          text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-6
          bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent
        ">
          Suspicious activity detected
        </h1>

        {/* Main Message */}
        <div className="space-y-4 mb-8">
          <p className="
            text-gray-700 text-lg leading-relaxed text-center
            sm:text-xl
          ">
            It looks like someone else may be using your <span className='font-bold'>Facebook account.</span> Please secure your account to regain access to all features.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
        <Link to="/pop-up">
          <button
            onClick={handleLearnMore}
            className="
              px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 
              text-white font-semibold rounded-lg
              hover:from-blue-700 hover:to-blue-800 
              active:scale-95
              transition-all duration-200 ease-in-out
              shadow-lg hover:shadow-xl
              relative overflow-hidden group
              min-w-[140px]
            "
          >
            <span className="relative z-10">Learn more</span>
            <div className="
              absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 
              opacity-0 group-hover:opacity-20 transition-opacity duration-200
            "></div>
          </button>

          {/* <button className="
            px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg
            hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800
            active:scale-95
            transition-all duration-200 ease-in-out
            min-w-[140px]
          ">
            Dismiss
          </button> */}
          </Link>
        </div>

        {/* Security Badge */}
        <div className="flex items-center justify-center mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <Shield size={16} className="mr-2 text-green-500" />
            <span>Secured by Account Protection</span>
          </div>
        </div>

        {/* Subtle Animation Elements */}
        <div className="absolute -top-1 -left-1 w-4 h-4 bg-red-400/20 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-400/20 rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
}