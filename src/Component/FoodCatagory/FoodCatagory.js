import React, { useEffect, useState } from 'react'
import FoodInCatagory from '../FoodInCatagory/FoodIncatagory'
import '../FoodCatagory/FoodCatagory.css'
import OneCatagoryAllFood from '../OneCatagoryAllFood/OneCatagoryAllFood'
import FoodDetails from '../FoodDetails/FoodDetails'
const FoodCatagory=()=>{
    const url=`https://www.themealdb.com/api/json/v1/1/categories.php`
    const[foodcatagory,setfoodcatagory]=useState([])
    const[foodincatagory,setfoodincatagory]=useState([])
    const[fooddetails,setfooddetails]=useState({})

    const[divstate,setdivstate]=useState([])
  
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
    const handaleFoodDetails=(idMeal)=>{
        const modifyDiv=document.getElementById('foodInCategory-container').style.display='none';
        const modifyfooddt=document.getElementById('fooddt').style.display='block';
        console.log(idMeal);
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
            fetch(url)
            .then(fc=>fc.json())
            .then(fc=>setfooddetails(fc.meals[0]))
            // .then(fc=>console.log(fc.meals[0]))
         
            console.log(fooddetails);
            // setdivstate(1)
          
        

    }

    return(
        <div className='d-flex'>
            <div className="foodcatagory-container">
        <h2 className='text-uppercase mt-3'>Our Food Menu</h2>
        <div className="food-catagory" id='food-catagory'>
    {
            foodcatagory.map(fd=><FoodInCatagory fd={fd}  handaleFoodCatagory={handaleFoodCatagory}/>)
      }
        </div>
        </div>
     
        <div className="foodInCategory-container d-flex flex-wrap justify-content-between" id="foodInCategory-container">
        {foodincatagory.map(fcd=><OneCatagoryAllFood fcd={fcd} handaleFoodDetails={handaleFoodDetails}/>)}
        </div>    
        <div className="div"  id="fooddt" style={{display:'none'}}>
        <FoodDetails fd={fooddetails}/>
        {/* <div  id="fooddt" class="card" style={{width: '15.5rem',marginBottom:'10px',border:'1px solid red'}}>


<div class="card-body">
<p>{fooddetails.strInstructions}</p>
<p>{fooddetails.strMeal}</p>
</div>
</div> */}
        </div>    
       
       
 
        

      
       
        </div>
    )
}
export default FoodCatagory ;