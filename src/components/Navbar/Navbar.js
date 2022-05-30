import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import {MenuIcon ,XIcon} from '@heroicons/react/solid';

const Navbar = () => {
    const[open,setOpen] = useState(false);
    return (
        <nav>
            <div onClick={() => setOpen(!open)} className={`w-6 h-6 md:hidden `}>
            {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <div className="NavLink-container">
                <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to='/'>HOME</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link')} to='/reviews'>REVIEWS</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link')} to='/dashboard'>DASHBOARD</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link')} to='/blogs'>BLOGS</NavLink>
                <NavLink className={({isActive}) => (isActive ? 'active-link' : 'link')} to='/about'>ABOUT</NavLink>
                
            </div>
        </nav>
    );
};

export default Navbar;