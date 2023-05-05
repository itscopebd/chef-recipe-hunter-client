import React, { useState } from 'react';
import { FaRegStarHalf, FaStar } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RecipesInfo = ({ recipesInfo }) => {

    console.log(recipesInfo)
    const { rating, recipe_name, ingredients, cooking_method,img
    } = recipesInfo;

    const [btnDisable, setBtnDisable] = useState(false)

    const setHeart = () => {
        setBtnDisable(true);
        toast("Favorite List added!")
    }


    return (
        <div className="card card-compact bg-base-100 shadow-xl mt-10">
            <LazyLoad><figure><img className='h-full rounded-md' src={recipesInfo?.img} alt="" /></figure></LazyLoad>
            <div className="card-body m-8">
                <h2 className="card-title text-3xl font-bold">{recipe_name}</h2>
                <p className='text-2xl font-bold'>Ingredients</p>
                <ul>
                    {
                        ingredients.map(ingredient => <li className='list-disc'>{ingredient}</li>)
                    }
                </ul>
                <p className='text-2xl font-bold'>Cooking Method</p>
                <ul>
                    {cooking_method.map(method => <li className='list-disc'>{method}</li>)}
                </ul>
                <p className='flex items-center gap-2'>
                    <strong className='text-2xl font-bold'>Rating:</strong>

                    <Rating
                        placeholderRating={rating}
                        emptySymbol={<FaRegStarHalf className='text-yellow-400'></FaRegStarHalf>}
                        placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar className='text-yellow-400'></FaStar>}
                    />
                </p>
                <div className="card-actions justify-end">

                    <button className="btn  bg-orange-500 hover:bg-purple-500 border-0" onClick={setHeart} disabled={btnDisable}> Favorite <ToastContainer />  </button>

                </div>
            </div>



            {/* <div className="card card-side bg-base-100 shadow-xl md:p-20 flex-col md:flex-row m-5 md:m-0">
                <LazyLoad><figure><img className='h-full' src={chefPicture} alt="" /></figure></LazyLoad>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p className='flex-grow-0'> <strong>shortBio:</strong> {shortBio}</p>
                    <p className='py-0 my-0 flex-grow-0'> <strong>likes:</strong> <span className="badge bg-orange-500 hover:bg-purple-500 border-0">{likes}</span>
                    </p>
                    <p className='py-0 my-0 flex-grow-0'> <strong>Recipes: </strong> <span className="badge bg-orange-500 hover:bg-purple-500 border-0">{numberOfRecipes}</span>
                    </p>
                    <p> <strong>Experience:</strong> {yearsOfExperience} years</p>

                </div>
            </div> */}




        </div>
    );
};

export default RecipesInfo;