import React from 'react'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div
    id='home'
    className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row '
    >
      <div
      className='flex flex-col justify-center md:items-center lg:items-center xl:items-center 2xl:items-center ml-6'
      >
        <h1
        className=' text-transparent text-4xl md:text-6xl lg:text-6xl xl:text-6xl 6xl:text-6xl
        font-bold p-5 bg-gradient-to-l from-orange-400 to-purple-500 bg-clip-text md:w-[60%] lg:w-[60%] xl:w-[60%] 2xl:w-[60%] w-[90%] 
         ml-4
        '>
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p
        className='text-white p-10 md:w-[60%]
        lg:w-[60%] xl:w-[60%] 2xl:w-[60%] w-[100%]
        '
        >
          Yet another GPT-3 OpenAI API wrapper. This time in React. This is a work in progress. I'm using this project to learn more about React and GPT-3 OpenAI. I'm also using this project to learn more about TypeScript. I'm using the GPT-3 OpenAI API wrapper from this project.
        </p>
        <div
        className='flex mb-10 md:w-[50%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] w-[90%]'
        >
          <input type="email"
          className='px-5 w-[100%] bg-cyan-700 text-white rounded-l-md'
           placeholder='email' name="" id="" />
          <button
          className='bg-red-500 text-white  p-3 w-40  cursor-pointer rounded-r-md'
          type-button
          >
            Get started
          </button>
        </div>
        <div
        className='flex md:flex-row lg:flex-row xl:flex-row 2xl:flex-row flex-col
        justify-center items-center gap-4'
        >
          <img src={people} alt="" />
          <p
          className='text-white
          '
          >
            1,600 people have already signed up
          </p>
        </div>

      </div>
      <div
      className='flex justify-center items-center'
      >
        <img
        className='md:w-[140vh] md:h-[80vh]  lg:w-[140vh] lg:h-[80vh] xl:w-[140vh] xl:h-[80vh] 2xl:w-[140vh] 2xl:h-[80vh] w-[80%] h-[80%]'
         src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header