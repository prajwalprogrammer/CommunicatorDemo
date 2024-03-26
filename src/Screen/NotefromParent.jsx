import React from 'react'
import Header from '../components/Header'
function NoteFromParent({name}) {
  return (
    <div><Header name={name} />
    
    <div className=" w-full h-screen mt-20">
      <p>Hello NoteFromParent</p>
      </div>
    </div>
  )
}

export default NoteFromParent