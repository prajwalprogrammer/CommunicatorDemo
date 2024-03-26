import React from 'react'
import Header from '../components/Header'
function Absentee({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello Absentee</p>
      </div>
    </div>
  )
}

export default Absentee