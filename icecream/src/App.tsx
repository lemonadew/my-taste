import React from 'react';
import logo from './kek.jpg';
import './App.css';

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const theButton = document.querySelector(".button");

async function boop() {
  await sleep(5000);
  theButton?.classList.remove("button--loading");
}

theButton?.addEventListener("click", () => {
    theButton?.classList.add("button--loading");
    boop();
});


function App() {
  return (
    <div className = "App">
      <header className = "Logo">
        <h2 data-text = "My Taste"> My Taste</h2>
      </header>
      
      <button type= "button" className="button generate">
        <span className='button__text'>Let's Cook!</span>
      </button>
    </div>
  );
}

export default App;
