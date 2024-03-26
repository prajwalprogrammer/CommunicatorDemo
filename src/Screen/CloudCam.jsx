import React from 'react'
import Header from '../components/Header'
function CloudCam({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello CloudCam</p>
      </div>
    </div>
  )
}

export default CloudCam