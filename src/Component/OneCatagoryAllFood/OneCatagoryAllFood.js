import React from 'react'
const OneCatagoryAllFood=(props)=>{
    const{idMeal,strMealThumb,strMeal}=props.fcd;
    return(
        <>
         <div class="card" style={{width: '12rem',marginBottom:'10px'}}>
            <img class="card-img-top" src={strMealThumb} alt="Card image cap"/>
            <div class="card-body">
{strMeal}
<button onClick={()=>props.handaleFoodDetails(idMeal)} class="btn" style={{backgroundColor:'#B99886',color:'white'}} type="submit" value="Submit">See Ingrident <i class="fa fa-arrow-right"></i></button>
            </div>
          </div>
        </>
    )
}
export default OneCatagoryAllFood;