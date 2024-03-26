import React from 'react'
import Header from '../components/Header'
function StudentBlog({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello StudentBlog</p>
      </div>
    </div>
  )
}

export default StudentBlog