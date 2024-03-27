import React from 'react'
import Header from '../components/Header'
function LateNote({name}) {
  return (
    <div><Header name={name} />
    
    <div className="flex justify-center items-center w-full h-screen mt-20">
      <p> LateNote Page</p>
      </div>
    </div>
  )
}

export default LateNote