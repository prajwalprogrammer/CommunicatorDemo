import React from 'react'
import Header from '../components/Header'
function Gallery({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello Gallery</p>
      </div>
    </div>
  )
}

export default Gallery