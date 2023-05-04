import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../components/card/Card';

const LoadData = () => {
    const data=useLoaderData();

    
    return (
        <>
           {
            data.map(chefDetails=><Card chefDetails={chefDetails} key={chefDetails.id}></Card>)
           }
        </>
    );
};

export default LoadData;