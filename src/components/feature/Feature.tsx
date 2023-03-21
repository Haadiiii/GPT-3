import React from 'react'

type FeatureProps = {
  title: string
  text: string
}

const Feature = ({title, text}: FeatureProps
  ) => {
  return (
    <div
    className=' p-4'
    >
      <div
      >
        <div
        className='w-10 h-0.5 bg-gradient-to-r from-orange-400 to-purple-500 ml-10'
         />
        <h1
        className='text-transparent bg-clip-text bg-gradient-to-l from-orange-400 to-purple-500 text-md md:text-xl lg:text-xl xl:text-xl 2xl:text-xl font-bold p-5  ml-4'
        >{title}</h1>
      </div>
      <div
      className='text-white opacity-50'
      >
        {text}
      </div>


    </div>
  )
}

export default Feature