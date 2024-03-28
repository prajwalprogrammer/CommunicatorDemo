import React from 'react'
import Card from '../components/Card'

function Notification() {
  return (
      <div className=" w-full h-screen mt-20">
      {/* <div className="flex hideScroll space-x-4 w-full px-4 overflow-x-auto items-center justify-start">
      {cat.map((val, index) => (
        <div key={index} className="px-4 py-2 h-10 bg-red-600 text-white w-30 rounded-3xl">
          {val}
        </div>
      ))}
    </div> */}
      <Card title="Medal presentation event" dis="2 days ago" />
      <div class="w-full h-[1px] bg-black my-2" /> 

      <Card title="Funeral Arrangements " dis="5 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 

      <Card title="Greetings from the slopes!" dis="4 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="The Lead up to Easter Hols" dis="5 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="Paris Day 3 " dis="7 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="Leaving Certificate Orals" dis="7 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="Mock Examination Reports " dis="7 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="5th year tour to Rome " dis="7 Mar" />
    </div>
  )
}

export default Notification