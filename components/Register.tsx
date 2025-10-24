"use client"; // This directive is needed for client-side interactivity like useState

import { useState } from 'react';

export default function InnovationFormPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    country: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send formData to a server or handle it
    console.log('Form submitted:', formData);
    alert('Form submitted! Check console for data.');
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Gradient Background, Text, and Form */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-blue-700 to-blue-400 p-8 flex flex-col justify-center text-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Step into the <br />
            <span className="text-6xl font-extrabold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>Future of</span>
            <br />
            <span className="font-serif italic text-5xl font-light text-blue-100">Innovation</span>
          </h1>

          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-30 border border-white border-opacity-50 rounded-md shadow-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-blue-200 focus:border-blue-200 sm:text-sm text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="johndoe@email.com"
                className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-30 border border-white border-opacity-50 rounded-md shadow-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-blue-200 focus:border-blue-200 sm:text-sm text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Kolkata"
                  className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-30 border border-white border-opacity-50 rounded-md shadow-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-blue-200 focus:border-blue-200 sm:text-sm text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-white">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="India"
                  className="mt-1 block w-full px-3 py-2 bg-white bg-opacity-30 border border-white border-opacity-50 rounded-md shadow-sm placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-blue-200 focus:border-blue-200 sm:text-sm text-white"
                  required
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white mt-6"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Section: Random Image or Text */}
      <div className="hidden md:flex w-1/2 bg-gray-100 items-center justify-center p-8">
        <p className="text-3xl text-gray-700 font-semibold rotate-90 whitespace-nowrap">
          Random Image <span className="font-normal italic">or text</span>
        </p>
      </div>
    </div>
  );
}