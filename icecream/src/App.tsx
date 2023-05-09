import React from 'react';
import logo from './kek.jpg';
import './App.css';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const genButton = document.querySelector(".button");

async function boop() {
  await sleep(5000);
  genButton?.classList.remove("button--loading");
}

genButton?.addEventListener("click", () => {
    genButton?.classList.add("button--loading");
    boop();
});


function App() {
  return (
    <div className = "App">
      <header className = "Logo">
        <h2 data-text = "My Taste">My Taste</h2>
      </header>

      <div className = "ingredient-container">
        <h3 className="ingredient-list-title">Your Ingredients</h3>
        <ul className = "ingredient-list">
          <li>Mushrooms</li>
        </ul>
        <form action="">
          <input 
            type="text"
            className="new-ingredient-list"
            placeholder="Add a new ingredient!"
            aria-label="Add a new ingredient"
          />
          <button className="ingredient-btn" aria-label='create a new ingredient'>+</button>
        </form>
      </div> 
      
      <div className="generate">
        <button type= "button" className="button generate">
          <span className='button__text'>Let's Cook!</span>
        </button>
      </div>
      
    </div>
  );
}

export default App;
