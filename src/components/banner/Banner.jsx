import React from 'react';

const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/DkbZZxP/food-photographer-jennifer-pallian-8p-Ujh-Bm4c-Lw-unsplash.jpg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
               
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className='md:w-6/12'>
                        <img src="https://i.ibb.co/hYYLb06/anh-nguyen-kc-A-c3f-3-FE-unsplash.jpg" className=" rounded-lg" />
                        </div>
                        <div className='md:w-6/12 text-white'>
                            <h1 className="text-5xl font-bold">The perfect dish with the super perfect taste.!</h1>
                            <p className="py-6">Delicious meals are tasty, appetizing, scrumptious, yummy, luscious, delectable, mouth-watering, fit for a king, delightful, lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming.</p>
                            <button className="btn btn-warning">Shop Now</button>
                        </div>
                    </div>
                </div>
            </>
            );
};

            export default Banner;