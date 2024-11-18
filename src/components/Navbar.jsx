import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex h-20 w-full bg-gray-600 justify-center items-center text-white">
            <div className='min-w-[1200px] flex gap-20'>
                <Link to='/' className='text-xl'>CodeCorey</Link>
                <Link to='about' className='text-xl'>About</Link>
                <Link to='games' className='text-xl'>Games</Link>
                <Link to='blog' className='text-xl'>Blog</Link>
            </div>
        </div>  
    )
};

export default Navbar;
