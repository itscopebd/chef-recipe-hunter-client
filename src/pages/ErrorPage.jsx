import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error=useRouteError();
    console.log(error)
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img style={{width:"500px",height:"500px"}} src="https://i.ibb.co/c1NZTfJ/shutterstock-479042983.png" alt="" />
            <Link to="/"><button className='btn btn-primary'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;