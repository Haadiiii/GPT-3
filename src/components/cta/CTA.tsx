import React from 'react'

const CTA = () => {
  return (
    <div
    className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
    justify-between p-10 bg-gradient-to-r from-fuchsia-500 to-amber-500 w-[90%] items-center mx-auto mt-10 rounded-md
    '
    >
      <div
      className='flex flex-col justify-center gap-4'
      >
        <p
        className='text-black font-mono text-sm'
        >
          Ready to get started?
        </p>
        <h1
        className='text-black font-mono text-2xl font-bold'
        >
          Register Today & Start Exploring the Endless Possibilities of GPT-3
        </h1>
      </div>
      <button type-button
      className='bg-gradient-to-r from-fuchsia-500 to-black text-white font-bold mt-5 rounded-xl bordder-2 border-black p-4 w-32 ml-4 
      hover:bg-gradient-to-r hover:from-black hover:to-fuchsia-500'
      >Get Started
      </button>
    </div>
  )
}

export default CTA