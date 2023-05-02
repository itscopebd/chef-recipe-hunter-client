import React from 'react';

const Header = () => {
    return (
        <div className='  bg-neutral-500 text-white'>
            <div className='container mx-auto'>
                <div className="navbar">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-neutral-500 rounded-box w-52">
                                <li><a>Home</a></li>

                                <li><a>Blog</a></li>
                            </ul>
                        </div>
                        <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">The Food Zoon</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 bg-neutral-500">
                            <li><a>Home</a></li>

                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">

                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>

                        <a className="btn btn-warning text-white">LogIn</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;