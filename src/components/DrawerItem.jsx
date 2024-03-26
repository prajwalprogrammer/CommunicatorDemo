import React from 'react'
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../assets/school_logo_124.png';
import { Link } from 'react-router-dom';

function DrawerItem({ open, setopen }) {
    let Links = ["Notifications", "News", "Cloud Cam", "Pending", "Gallery", "Outbox", "Absentee", "Leave Permission", "Late Note", "Note from Parent", "Picture Permission", "Consent Forms", "Shop", "Student Blog"];
    let add = ["/", "/news", "/cloudcam", "/pending", "/gallery", "/outbox", "/absentee", "/leavePermission", "/lateNote", 
    "/noteFromParent", "/picturePermission", "/consentForms", "/shop", "/studentBlog"];
    return (
        <div class={`items-center pb-0 absolute h-screen bg-white z-auto top-0 left-0 pl-0  transition-all duration-500 ease-in 
        ${open ? 'left-0' : 'left-[-490px]'}`}>

        <div class="h-full w-80 bg-red-600  text-white pt-4 overflow-y-scroll  flex flex-col items-center justify-between">
            <div onClick={() => setopen(!open)} className='cursor-pointer w-7 h-7 mr-3 self-end'>
                <XMarkIcon />
            </div>
            <img src={logo} alt="Company Logo" class="w-[100px] h-[100px] mb-1" />
            {/* <p class="text-2xl">Test App</p>
            <p class="text-lg">Dublin, Ireland</p> */}
            {/* <div class="w-[80%] h-[1px] bg-black my-2" /> */}

            <div class="flex  self-start pl-5">
                {/* <img src={logo} alt="Company Logo" class="w-[60px] h-[60px] rounded-full mb-1" /> */}
                <div class="pl-4">
                    <p class="text-xl font-normal">Priya Pandey</p>
                    <p class="text-base">createyouracc987@gmail.com</p>
                    <p class="text-base">Test App School 2</p>
                </div>
            </div>

            <div class="w-[80%] h-[1px] bg-black my-2" />

            <div class="flex-grow flex text-black flex-col bg-white w-full items-start">
                {Links.map((lk, i) => (
                     <Link to={`${add[i]}`}>

                         <div key={i} class="py-3 px-9 mb-1 text-sm font-medium rounded-md focus:outline-none">{lk}</div>
                     </Link>
                ))}
            </div>
        </div>
        </div>

        // <ul className={`items-center pb-0 absolute  bg-white z-auto top-6 left-0 w-42 pl-0  transition-all duration-500 ease-in ${open ? 'left-0' : 'left-[-490px]'}`}>
        //     {
        //         Links.map((link, idx) => (
        //             <li className='ml-8 my-0 font-semibold' key={idx}>
        //                 <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
        //             </li>))
        //     }
        //     <button className='btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Get Started</button>
            // <div onClick={() => setopen(!open)} className='cursor-pointer w-7 h-7'>
            //     <XMarkIcon />
            // </div>
        // </ul>
    )
}

export default DrawerItem
