import React from 'react'
const FoodInCatagory=(props)=>{

  const{idCategory,strCategoryThumb,strCategory}=props.fd;
    return(
        <>
        <div class="card" style={{width: '15.5rem',marginBottom:'10px'}}>
            <img class="card-img-top" src={strCategoryThumb} alt="Card image cap"/>
            <div class="card-body">
<button onClick={()=>props. handaleFoodCatagory(strCategory)} class="btn" style={{backgroundColor:'#B99886',color:'white'}} type="submit" value="Submit">{strCategory} <i class="fa fa-arrow-right"></i></button>
            </div>
          </div>
        </>
    )
}
export default  FoodInCatagory;