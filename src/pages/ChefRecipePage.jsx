import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../components/details/Details';
const ChefRecipePage = ({ title }) => {
    const details = useLoaderData();
    if (details) {
        console.log(title) 
    }
    
    // console.log(details)
    return (
        <>
            <Details details={details} title={title}></Details>

        </>
    );
};

export default ChefRecipePage;