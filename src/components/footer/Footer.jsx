import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-neutral-900 text-white py-5'>
            <div className='container mx-auto'>
                <div className=' grid md:grid-cols-3 md:mx-0 mx-10 justify-between'>
                    <div>
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl custom__animation">FoodZoon</NavLink>
                        
                           <p className='py-3 text-2xl font-bold'>Address:</p>
                           <p>Bonani Golshan 211A.</p>
                           <p>Dhaka Bangladesh.</p>
                    </div>
                    <div className='md:my-0 my-10 flex md:justify-center'>
                        <ul>
                            <li className=' hover:text-green-300'> <a href=""><FaFacebook className='text-2xl'></FaFacebook></a> </li>
                            <li className='my-4  hover:text-green-300'> <a href=""> <FaYoutube className='text-2xl'></FaYoutube></a> </li>
                            <li className='my-4 hover:text-green-300'> <a href=""><FaLinkedin className='text-2xl'></FaLinkedin> </a></li>
                            <li className=' hover:text-green-300'> <a href=""><FaInstagram className='text-2xl'></FaInstagram> </a></li>
                            
                        </ul>
                    </div>
                    <div className='flex md:justify-end'>
                        <ul>
                            <NavLink to="/blog" className=' hover:text-green-300'> <a href="">Blog</a> </NavLink>
                            <li className='my-3 hover:text-green-300'> <a href="">About Us</a> </li>
                            <li className=' hover:text-green-300'> <a href="">Contact Us</a> </li>
                        </ul>

                    </div>
                </div>
                <p className='text-center pt-5'>© 2023 Rofiqul Islam. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;