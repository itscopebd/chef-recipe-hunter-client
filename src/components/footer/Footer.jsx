import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='bg-neutral-500 text-white py-5'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <a className="btn btn-ghost normal-case text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">The Food Zoon</a>
                        
                           <p className='py-3 text-2xl font-bold'>Address:</p>
                           <p>Bonani Golshan 211A.</p>
                           <p>Dhaka Bangladesh.</p>
                    </div>
                    <div>
                        <ul>
                            <li className=' hover:text-green-300'> <a href=""><FaFacebook className='text-2xl'></FaFacebook></a> </li>
                            <li className='my-4  hover:text-green-300'> <a href=""> <FaYoutube className='text-2xl'></FaYoutube></a> </li>
                            <li className='my-4 hover:text-green-300'> <a href=""><FaLinkedin className='text-2xl'></FaLinkedin> </a></li>
                            <li className=' hover:text-green-300'> <a href=""><FaInstagram className='text-2xl'></FaInstagram> </a></li>
                            
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className=' hover:text-green-300'> <a href="">Blog</a> </li>
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