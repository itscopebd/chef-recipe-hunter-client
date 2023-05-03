import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../components/details/Details';
const DetailsPages = ({ title }) => {
    const details = useLoaderData();
    console.log(title)
    console.log(details)
    return (
        <>
            <Details details={details} title={title}></Details>

        </>
    );
};

export default DetailsPages;