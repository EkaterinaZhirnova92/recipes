import './App.css';
import { useState, useEffect } from 'react';
import video from './food.mp4';
import MyRecipesComponent from './MyRecipesComponent';

function App() {

  const MY_ID ='216702ef';
  const MY_KEY = '0c451fb4fda53076db083fc4427dec48';

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
   const [wordSubmitted, setWordSubmitted] = useState('avocado')

  useEffect(async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
    const data = await response.json();
    setMyRecipes(data.hits)
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
 setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
  }

  return (
    <div className="App">

  <div className="container">

  <video autoPlay muted loop>

   <source src={video} type="video/mp4" />

</video>

  <h1>Find a Recipe</h1>

  </div>

  <div className='container'>
    <form onSubmit = {finalSearch}>
      <input className='search' placeholder = 'search' onChange = {myRecipeSearch} value = {mySearch}></input>
    </form>
</div>
<div className='container'>
    <button onClick = {finalSearch}>
      <img src ='https://img.icons8.com/fluency/48/000000/fry.png' alt='food' className= 'icons'/>
    </button>
    </div>


{myRecipes.map(element => (
  <MyRecipesComponent 
  label = {element.recipe.label} 
  image = {element.recipe.image} 
  calories = {element.recipe.calories} 
  ingredients = {element.recipe.ingredientLines}
  />
))}

  </div>


  );
}

export default App;
