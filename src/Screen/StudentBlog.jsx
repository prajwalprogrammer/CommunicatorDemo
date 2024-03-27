import React from 'react'
import Header from '../components/Header'
function StudentBlog({name}) {
  return (
    <div><Header name={name} />
    
    <div className="flex justify-center items-center w-full h-screen mt-20">
      <p> StudentBlog Page</p>
      </div>
    </div>
  )
}

export default StudentBlog