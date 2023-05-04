import React from 'react';
import "./details.css"
import Rating from 'react-rating';
import { FaRegStarHalf, FaStar } from 'react-icons/fa';
const Details = ({ details, title }) => {
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, cookingMethod, ingredients, shortBio, rating } = details;
    return (
        <div>
            <div className="breadcrumbs h-52 flex items-center justify-center">
                <h2 className='text-4xl font-bold text-white text-center'>{title}</h2>
            </div>

            <div className="container mx-auto">
                <div className="card card-side bg-base-100 shadow-xl p-20">
                    <figure><img className='h-full' src={chefPicture} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{chefName}</h2>
                        <p> <strong>shortBio:</strong> {shortBio}</p>
                        <p> <strong>likes:</strong> {likes}</p>
                        <p> <strong>Recipes: </strong> {numberOfRecipes}</p>
                        <p> <strong>Experience:</strong> {yearsOfExperience} years</p>
                        <h4> <strong>Ingredients:</strong> </h4>
                        <ul>
                            {
                                ingredients.map(ingredient => <li>{ingredient}</li>)
                            }
                        </ul>
                        <p> <strong>Cooking Method:</strong> {cookingMethod}</p>
                        <p className='flex items-center gap-2'>
                             <strong>Rating:</strong>

                        <Rating
                                placeholderRating={rating}
                                emptySymbol={<FaRegStarHalf className='text-yellow-400'></FaRegStarHalf>}
                                placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                                fullSymbol={<FaStar className='text-yellow-400'></FaStar>}
                            />
                        </p>

                      
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;