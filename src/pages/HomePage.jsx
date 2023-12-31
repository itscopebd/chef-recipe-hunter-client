import React from 'react';
import Banner from '../components/banner/Banner';
import LoadData from '../loadApiData/LoadData';
import Newsletter from '../components/newsletter/Newsletter';
import Gallery from '../components/gallery/Gallery';

const HomePage = () => {
    
    return (
        <>
            <Banner />
            <div className='container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                <LoadData></LoadData>
            </div>
            <Newsletter></Newsletter>
            <Gallery></Gallery>
        </>
    );
};

export default HomePage;