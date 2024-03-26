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
      <Card title="Checking Cron" dis="2 days ago" />
      <div class="w-full h-[1px] bg-black my-2" /> 

      <Card title="Hey Hey" dis="5 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 

      <Card title="Test" dis="4 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="QA2 Cron Check" dis="5 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="One More" dis="7 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="One More 2" dis="7 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="One More 3" dis="7 Mar" />
      <div class="w-full h-[1px] bg-black my-2" /> 
      <Card title="One More 5" dis="7 Mar" />
    </div>
  )
}

export default Notification