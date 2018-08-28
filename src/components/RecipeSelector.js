import React from 'react';

const RecipeSelector = (props) => {


  function handleChange(evt) {
    props.onRecipeSelected(evt.target.value);
  }


  const options = props.recipes.map((recipe, index) => {
    return <option
      value={index}
      key={index}>
      {recipe.strMeal}
      </option>
  });

  return (
    <select
      id="recipe-selector"
      defaultValue = "default"
      onChange={handleChange}>
      <option disabled value="default">Pick A Recipe</option>
      {options}
    </select>

  )


}


export default RecipeSelector;
