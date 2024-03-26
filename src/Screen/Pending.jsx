import React from 'react'
import Header from '../components/Header'
function Pending({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello Pending</p>
      </div>
    </div>
  )
}

export default Pending