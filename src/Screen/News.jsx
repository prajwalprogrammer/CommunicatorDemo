import React from 'react'
import Header from '../components/Header'
function News({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello News</p>
      </div>
    </div>
  )
}

export default News