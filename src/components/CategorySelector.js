import React from 'react';

const CategorySelector = (props) => {

  function handleChange(evt) {

    props.onCategorySelected(evt.target.value);
  //  receiveRecipes(evt.target.value)
    // get the data from api
    // invoke method from props, passing data
  }

  // function receiveRecipes(category) {
  //   const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  //   fetch(url)
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((recipes) => {
  //     props.updateRecipeList(recipes)
  //   })
  // }

  const options = props.categories.map((category, index) => {
    return <option
      value={category.strCategory}
      key={index}>
{category.strCategory}
      </option>
  });

  return (
    <select
      id="category-selector"
      defaultValue = "default"
      onChange={handleChange}>
      <option disabled value="default">Pick A Category</option>
      {options}
    </select>

  )

}

export default CategorySelector;
