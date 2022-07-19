import logo from './logo.svg';
import './App.css';
import React from 'react'
import ReactDOM from 'react-dom'
import FoodCatagory from './Component/FoodCatagory/FoodCatagory';
import Header from './Component/Header/Header';
import Slider from './Component/Slider/Slider';
import Carocel from './Component/Carocel';



function App() {
  return (
    <div className="App">
      <Header/>
      < Slider/>
<FoodCatagory/>

      
    </div>
  );
}

export default App;
