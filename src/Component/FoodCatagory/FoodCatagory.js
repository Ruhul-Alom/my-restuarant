import React, { useEffect, useState } from 'react'
import FoodInCatagory from '../FoodInCatagory/FoodIncatagory'
import '../FoodCatagory/FoodCatagory.css'
import OneCatagoryAllFood from '../OneCatagoryAllFood/OneCatagoryAllFood'
const FoodCatagory=()=>{
    const url=`https://www.themealdb.com/api/json/v1/1/categories.php`
    const[foodcatagory,setfoodcatagory]=useState([])
    const[foodincatagory,setfoodincatagory]=useState([])
  
useEffect(()=>{
fetch(url)
.then(fc=>fc.json())
.then(fc=>setfoodcatagory(fc.categories))

    },[0])
    const handaleFoodCatagory=(strCategory)=>{
        const modifyDiv=document.getElementById('food-catagory').style.width='660px'
        console.log(strCategory);
        const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
            fetch(url)
            .then(fc=>fc.json())
            .then(fc=>setfoodincatagory(fc.meals))
          
        

    }

    return(
        <div className='d-flex'>
            <div className="foodcatagory-container">
        <h2 className='text-uppercase mt-3'>Our Food Menu</h2>
        <div className="food-catagory" id='food-catagory'>
    {
            foodcatagory.map(fd=><FoodInCatagory fd={fd}  handaleFoodCatagory={ handaleFoodCatagory}/>)
      }
        </div>
        </div>
        <div className="foodInCategory-container d-flex flex-wrap justify-content-between">
        {foodincatagory.map(fcd=><OneCatagoryAllFood fcd={fcd}/>)}
        </div>

        </div>
    )
}
export default FoodCatagory ;