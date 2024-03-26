import React from 'react'
import Header from '../components/Header'
function LateNote({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello LateNote</p>
      </div>
    </div>
  )
}

export default LateNote