import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
    const [carts, setCarts] = useState([])
    useEffect(() => {
        fetch(`https://ebook-server-site.vercel.app/allCartsBook`)
            .then(res => res.json())
            .then(data => {
                setCarts(data)
            })
    }, [carts])
    // console.log(carts.length);

    return (
        <div className="navbar bg-slate-700 text-white px-0 md:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li className='md:ml-5'><Link>
                            <button className="btn btn-disabled flex text-white">
                                <span className='text-white'><FaShoppingCart /></span>
                                <div className="badge badge-neutral">+{carts.length}</div>
                            </button>
                        </Link></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-lg md:text-2xl">EBook</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 text-lg flex items-center justify-center">
                    <li><Link to='/'>Home</Link></li>
                    <li className='ml-5'><Link to='/allCartsBook'>
                        <button className="btn btn-disabled flex text-white">
                            <span className='text-white'><FaShoppingCart /></span>
                            <div className="badge badge-neutral">+{carts.length}</div>
                        </button>
                    </Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-neutral">Login</a>
            </div>
        </div>
    );
};

export default Navbar;