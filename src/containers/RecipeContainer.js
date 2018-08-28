import React from 'react';
import CategorySelector from '../components/CategorySelector';
import RecipeSelector from '../components/RecipeSelector';
import RecipeDetails from '../components/RecipeDetails';

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: null,
      recipes : [],
      selectedRecipe: null
    };
    this.handleCategorySelected = this.handleCategorySelected.bind(this);
    this.updateRecipeList = this.updateRecipeList.bind(this);
    this.handleRecipeSelected = this.handleRecipeSelected.bind(this);
  }

  handleCategorySelected(category){
    const selectedCategory = category;
    this.setState({selectedCategory});
    this.updateRecipeList(selectedCategory)
  }

  handleRecipeSelected(index){
    const selectedRecipe = this.state.recipes[index];
    this.setState({selectedRecipe});
  }

  updateRecipeList(category){
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((recipeList) => {
      const recipes = recipeList.meals;
      this.setState({
        recipes
      });
    })
  }

  componentDidMount() {
      const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
      fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((categories) => {
        this.setState({
          categories: categories.categories
        });
      })
  }



  render(){
    return (
      <div>
        <h2>Recipes</h2>
        <CategorySelector categories = {this.state.categories} onCategorySelected={this.handleCategorySelected} updateRecipeList={this.updateRecipeList} />
        <RecipeSelector recipes = {this.state.recipes} onRecipeSelected={this.handleRecipeSelected}/>
        <RecipeDetails details = {this.state.selectedRecipe} />
      </div>
    );
  }
}
export default RecipeContainer;
