import React from 'react';
import logo from '../assets/school_logo_124.png';

const data = [
  {}
]
const Card = ({ title, dis }) => {
  return (
    <div className="w-full my-2 h-20 flex px-4 bg-white rounded-lg">
      {/* <div className="w-1/3 flex-shrink-0">
        <img
          className="h-full object-cover"
          src={logo}
          alt="Placeholder"
        />
      </div>
      <div className="flex flex-col self-start  p-4 w-2/3">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{dis}</p>
      </div> */}
      <div class="flex self-start pl-2">
        <div className="w-[65px] flex-shrink-0">
          <img
            className="h-full object-cover"
            src={logo}
            alt="Placeholder"
          />
        </div>
        <div class="ml-3">
          <p class="text-xl font-normal">{title}</p>
          <p class="text-sm">{dis}</p>
          <p class="text-sm">Priya Pandey</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
