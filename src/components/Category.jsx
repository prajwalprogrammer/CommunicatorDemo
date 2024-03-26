import React from 'react'
import Header from './Header'
import Card from './Card'

function Category() {
    const cat = ["Stock","ScienceInformation","SomethingNew","Sports","Art","Music","NewsLimited","Cat1","Schools","Event","ScienceInformation","SomethingNew","Sports","Art","NareshSchool","ScienceInformation","SomethingNew","Sports","Art"]
  return (
    <div className="overflow-x-auto absolute top-14 h-30">
      <div className="flex space-x-4 p-4 items-center justify-center">
        {cat.map((val, index) => (
          <div key={index} className="px-4 py-2 h-10 bg-red-600 text-white w-30 rounded-3xl">
            {val}
          </div>
        ))}
      </div>
     
    </div>
  )
}

export default Category