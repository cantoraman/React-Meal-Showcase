import React from 'react';

const RecipeDetails = function (props) {
  if(!props.details) return null;
  return (
    <div>
      <h2>{props.details.strMeal}</h2>
      <img src= {props.details.strMealThumb} />
    </div>
  )
}

export default RecipeDetails
