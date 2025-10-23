import React from 'react';
import Image from 'next/image';

const seminars = [
  { title: 'AI/ML Seminar', img: '/speaker.png' },
  { title: 'Higher Studies Seminar', img: '/speaker.png' },
  { title: 'WEB3 Seminar', img: '/speaker.png' },
  { title: 'Data Analytics Seminar', img: '/speaker.png' },
  { title: 'IoT Seminar', img: '/speaker.png' },
  { title: 'Telecom Security Seminar', img: '/speaker.png' },
  { title: 'CP Seminar', img: '/speaker.png' },
  { title: 'MBA Seminar', img: '/speaker.png' }
];

export default function Schedule() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          ElevateX 2.0 <span className="text-blue-600">Webinars</span>
        </h1>
        <p className="italic text-gray-500 mt-2">
          “Lorem ipsum dolor sit amet conse.”
        </p>
      </div>

      {/* Blue Divider */}
      <div className="w-full h-1 bg-blue-500 mb-10"></div>

      {/* Seminar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {seminars.map((seminar, index) => (
          <div
            key={index}
            className="flex flex-col border-b border-gray-200 pb-6"
          >
            {/* Speaker Detail Row */}
            <div className="flex items-center gap-4 mb-3">
              <Image
                src={seminar.img}
                alt={seminar.title}
                width={60}
                height={60}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-blue-600 text-sm font-medium">Oct 25, 2025</p>
                <p className="text-lg font-semibold text-gray-800">11:00 - 1:00</p>
                <p className="text-lg font-bold text-gray-900">Aarav Mehta</p>
              </div>
            </div>

            {/* Seminar Info */}
            <div>
              <h3 className="font-bold text-lg mb-1">{seminar.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
                Aliquam in hendrerit. Sit amet consectetur adipiscing elit.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}