"use client";

import React, { useState } from 'react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = () => {
    console.log('Login submitted:', formData);
    alert('Login successful!');
  };

  const handleChange = (field: string, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section - Form */}
      <div className="w-1/2 bg-gradient-to-br from-blue-300 to-blue-400 p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto w-full">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Step into the
          </h1>
          <h2 className="text-5xl font-bold text-indigo-900 mb-2">
            Future of
          </h2>
          <p className="text-4xl italic text-gray-800 mb-12">
            Innovation
          </p>

          <div className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="johndoe@email.com"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Password
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleChange('password', e.target.value)}
                placeholder="Enter password"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Login Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
              >
                Login
              </button>
            </div>

            {/* Additional Links */}
            <div className="text-center pt-2">
              <a href="#" className="text-sm text-gray-800 hover:text-indigo-900 font-medium">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Random Image Text */}
      <div className="w-1/2 bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h2 
            className="text-6xl font-bold text-gray-800"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            Random Image or text
          </h2>
        </div>
      </div>
    </div>
  );
}