import React from 'react'
import Header from '../components/Header'
function Gallery({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full flex justify-center items-center h-screen mt-20">
      <p>Gallery Page</p>
      </div>
    </div>
  )
}

export default Gallery