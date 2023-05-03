import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ chefDetails }) => {
    console.log(chefDetails)
    const {id,chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes}=chefDetails;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={chefPicture} alt="" className="rounded-xl w-full" />
                </figure>
                <div className="card-body text-left">
                    <h2 className="card-title text-2xl">{chefName}</h2>
                    <p className='font-bold'>Experience: {yearsOfExperience} years</p>

                    <p className='font-bold'>Recipes: {numberOfRecipes}</p>
                    <div className='flex justify-between items-center gap-10'>
                    <p className='font-bold'>Likes: {likes}</p>
                       
                        <Link to={`/details${id}`}><button className="btn btn-warning">View Recipes</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;