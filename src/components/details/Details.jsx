import React, { useContext, useEffect, useState } from 'react';
import "./details.css"
import RecipesInfo from '../card/RecipesInfo';
import LazyLoad from 'react-lazyload';

const Details = ({ details, title }) => {
    // const {loading,setLoading}=useContext(AuthContext)
    const [recipesInfo, setRecipesInfo] = useState([])
    const { id, chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, cookingMethod, ingredients, shortBio, rating } = details;


    useEffect(() => {
        fetch("https://foodzoon-itscopebd.vercel.app/recipesinfo")
            .then(res => res.json())
            .then(data => {
                const filterData=data.filter(matchData=>matchData.recipeInfo_id==id);
                setRecipesInfo(filterData)
            })
    }, [])

    return (
        <div>
            <div className="breadcrumbs h-52 flex items-center justify-center">
                <h2 className='text-4xl font-bold text-white text-center'>{title}</h2>
            </div>

            <div className="container mx-auto">
                <div className="card card-side bg-base-100 shadow-xl p-20">
                    <LazyLoad><figure><img className='h-full' src={chefPicture} alt="" /></figure></LazyLoad>
                    <div className="card-body">
                        <h2 className="card-title">{chefName}</h2>
                        <p> <strong>shortBio:</strong> {shortBio}</p>
                        <p> <strong>likes:</strong> {likes}</p>
                        <p> <strong>Recipes: </strong> {numberOfRecipes}</p>
                        <p> <strong>Experience:</strong> {yearsOfExperience} years</p>
                    
                    </div>
                </div>
            </div>
            <div className="container mx-auto my-20">
                <h3 className='text-3xl font-bold text py-4'>Some Recipes of {chefName}</h3>
                <div className='grid md:grid-cols-3 gap-6'>

                  {
                    recipesInfo.map(recipesInfo=><RecipesInfo recipesInfo={recipesInfo}></RecipesInfo>)
                  }

                </div>
            </div>
        </div>
    );
};

export default Details;