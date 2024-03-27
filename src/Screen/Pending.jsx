import React from 'react'
import Header from '../components/Header'
function Pending({name}) {
  return (
    <div><Header name={name} />
    
    <div className="flex justify-center items-center w-full h-screen mt-20">
      <p> Pending Page</p>
      </div>
    </div>
  )
}

export default Pending