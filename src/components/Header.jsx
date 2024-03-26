import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import DrawerItem from './DrawerItem';

const Header = ({name}) => {
    
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md z-50 w-full fixed top-0 left-0'>
            <div className='md:flex items-center text-white  bg-red-600 py-4 md:px-10 px-7'>
                {/* logo section */}
                <div onClick={() => setOpen(!open)} className=' cursor-pointer w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                <div className='text-2xl font-semibold cursor-pointer flex items-center gap-1'>
                    <span>{name}</span>
                </div>
                    <DrawerItem open={open} setopen={setOpen} />
            </div>
        </div>
    );
};

export default Header;