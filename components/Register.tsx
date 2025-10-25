"use client";

import React, { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    college: '',
    dept: '',
    year: '',
    phone: ''
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Registration submitted!');
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
      <div className="w-1/2 bg-gradient-to-br from-blue-300 to-blue-400 p-12 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-md mx-auto w-full py-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Step into the
          </h1>
          <h2 className="text-5xl font-bold text-indigo-900 mb-2">
            Future of
          </h2>
          <p className="text-4xl italic text-gray-800 mb-8">
            Innovation
          </p>

          <div className="space-y-5">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

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

            {/* College Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                College
              </label>
              <input
                type="text"
                value={formData.college}
                onChange={(e) => handleChange('college', e.target.value)}
                placeholder="Your College Name"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Department and Year Fields */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value={formData.dept}
                  onChange={(e) => handleChange('dept', e.target.value)}
                  placeholder="CSE"
                  className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Year
                </label>
                <input
                  type="text"
                  value={formData.year}
                  onChange={(e) => handleChange('year', e.target.value)}
                  placeholder="2nd"
                  className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                placeholder="+91 1234567890"
                className="w-full px-4 py-3 rounded-full bg-blue-200 bg-opacity-50 border-2 border-blue-300 focus:outline-none focus:border-indigo-500 text-gray-800 placeholder-gray-600"
              />
            </div>

            {/* Register Button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200"
              >
                Register
              </button>
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