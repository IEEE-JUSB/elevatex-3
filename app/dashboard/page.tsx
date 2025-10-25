import React from 'react'

function Page() {
  return (
    <div className='relative font-syne min-h-screen bg-gradient-to-br from-blue-300 to-blue-400 flex flex-col items-center gap-y-8 p-12'>
      <h1 className='text-4xl lg:text-6xl font-bold'>Dashboard</h1>
      <h2 className='font-medium text-lg sm:text-2xl'>Welcome, User!</h2>
      <div className='w-full grid place-items-center sm:grid-cols-2 p-8'>
        <div className='flex flex-col items-center gap-y-6 bg-white/30 p-6 rounded-xl w-3/4'>
          <h3 className='text-2xl text-blue-800'>Registered Events</h3>
        </div>
        <div className='flex flex-col items-center gap-y-6 bg-white/30 p-6 rounded-xl w-3/4'>
          <h3 className='text-2xl text-blue-800'>Upcoming Events</h3>
        </div>
      </div>
      <button className='absolute bottom-10 text-lg text-white bg-red-600 px-3 py-1 rounded-lg'>Logout</button>
    </div>
  )
}

export default Page;