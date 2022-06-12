import React from 'react'
const OneCatagoryAllFood=(props)=>{
    const{strMealThumb}=props.fcd;
    return(
        <>
         <div class="card" style={{width: '12rem',marginBottom:'10px'}}>
            <img class="card-img-top" src={strMealThumb} alt="Card image cap"/>
            <div class="card-body">

            </div>
          </div>
        </>
    )
}
export default OneCatagoryAllFood;