import React from 'react';

const Gallery = () => {
    return (
        <div className='py-20'>
        <h3 className='text-3xl text-center pb-10 custom__animation'> Images Gallery</h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4'>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/Pg0wh1Y/8.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/VtFq4P0/7.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/GkL1gX1/6.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/8spQKzF/5.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/9v0LzGr/4.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/Px6bKCP/3.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/6rgzxdD/2.png" alt="" />
                </div>
                <div className='overflow-hidden cursor-pointer duration-75'>
                    <img className='hover:scale-125 duration-75' src="https://i.ibb.co/dbKCKQY/1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;