import React from 'react'
const FoodDetails=(props)=>{
   
    console.log(props);
  
    return(
       
         <div class="card" style={{width: '15.5rem',marginBottom:'10px',border:'1px solid red'}}>


<div class="card-body">
<p>{props.fd.strInstructions}</p>
<p>{props.fd.strMeal}</p>
</div>
</div>
       
    )
}
export default FoodDetails;