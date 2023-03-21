import React from 'react'
import Feature from '../../components/feature/Feature'

const WhatGPT3 = () => {
  return (
    <div
    id='wgpt3'
    className=' w-[90%] bg-gradient-to-r from-footer to-blog  items-center mx-auto mt-10 rounded-md' 
    >
      <div
      className='flex justify-between items-center p-4'
      >
        <Feature
        title='What is GPT-3?'
         text=' GPT-3 is a language model that uses deep learning to produce human-like text. It was created by OpenAI, a non-profit artificial intelligence research company. GPT-3 is the third-generation language model from OpenAI.
         '
         />
      </div>
      <div
      className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row
      justify-between p-4 items-center ' 
      >
        <h1
        className='text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-purple-500 text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold p-5  ml-4'
        > The Possibilities are beyond your imagination</h1>
        <p
        className='text-yellow-200 cursor-pointer opacity-50'
        >
          explore the Library
        </p>
      </div>
      <div
      className='flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-between items-center p-4'
      >
        <Feature
        title='Chatbots'
        text='GPT-3 can be used to create chatbots, which are computer programs that simulate human conversation.
        '
         />
        <Feature
        title='Knowledge Graphs'
        text='GPT-3 can be used to create knowledge graphs, which are a type of graph that represents knowledge about a domain.'
         />
        <Feature
        title='Education'
        text='GPT-3 can be used to create educational content, which is content that is designed to teach people.'
         />

      </div>
    </div>
  )
}

export default WhatGPT3