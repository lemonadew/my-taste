import React from 'react';
import logo from './logo.svg';

import type {AriaTextFieldProps} from 'react-aria';
import {useTextField} from 'react-aria';

import IngredientInput from './IngredientInput'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='logo'>
        <span className='logo-text'>My Taste</span>
      </div>

      <div className='ingredients'>
        <span className='ingredients-heading'> Add your ingredients!</span>
        <IngredientInput label="" />
        
      </div>

      <div className='generate'>
        
      </div>
    </div>
  );
}

export default App;
