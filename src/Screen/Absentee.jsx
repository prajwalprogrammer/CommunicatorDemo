import React from 'react'
import Header from '../components/Header'
function Absentee({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full flex justify-center items-center h-screen mt-20">
      <p> Absentee Page</p>
      </div>
    </div>
  )
}

export default Absentee