import React from 'react'
import Header from '../components/Header'
function Outbox({name}) {
  return (
    <div><Header name={name} />
    
    <div className="flex justify-center items-center w-full h-screen mt-20">
      <p> Outbox Page</p>
      </div>
    </div>
  )
}

export default Outbox