import React from 'react'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div
    id='possibility'
    className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row p-10 gap-20'
    >
      <div>
        <img 
        className='w-96 h-96 
        md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] 2xl:w-[600px] 2xl:h-[600px]'
        src={possibilityImage} alt="possibility" />
      </div>
      <div
      className='flex flex-col justify-end gap-4'
      >
        <h4
        className='text-sky-400 cursor-pointer opacity-50'
        >
          Request Early Access to Get Started
        </h4>
        <h1
        className='text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-purple-500 text-md md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-3xl font-bold'
        >
          The Possibilities are Beyond your Imagination
        </h1>
        <p
        className='text-white opacity-50 md:w-[400px] text-xl'
        >
          GPT-3 can be used to create chatbots, which are computer programs that simulate human conversation, which are a type of graph that represents knowledge about a domain, which is content that is designed to teach people.
          Here are some of the possibilities of GPT-3, but the possibilities are beyond your imagination.
        </p>
        <h4
        className='text-yellow-200 cursor-pointer opacity-50'
        >
          Request Early Access to Get Started
        </h4>
      </div>
    </div>
  )
}

export default Possibility