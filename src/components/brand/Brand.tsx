import React from 'react'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import dropbox from '../../assets/dropbox.png'
import shopify from '../../assets/shopify.png'


const Brand = () => {
  return (
    <div
      className="grid md:grid-cols-5 grid-cols-2 gap-10
       justify-between items-center p-2 mx-24 mt-20" 
    >
      <div>
        <img src={google} alt="google" />
        </div>
        <div>
          <img src={slack} alt="slack" />
          </div>
          <div>
          <img src={atlassian} alt="atlassian" />
          </div>
          <div>
            <img src={dropbox} alt="dropbox" />
            </div>
            <div>
            <img src={shopify} alt="shopify" />
            </div>
    </div>
  )
}

export default Brand