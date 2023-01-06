import React from 'react'
import { BsPlusLg, BsDashLg } from "react-icons/bs";
//destrukturiranje da ne bismo pisali props.product.p ovo skraceno
function SingleProduct({product,addToCart,removeFromCart}) {

  
  return (
    <div className='singleProduct'>
        
    <div className='title'>{product.title}</div>
    <div className='desc'>{product.desc}</div>

    <div className='button' onClick={() => addToCart(product.id)}>
    <BsPlusLg/>
    </div>
    
    <div className='button' onClick={() => removeFromCart(product.id)}>
    <BsDashLg/>
    </div>
    

    </div>
  )
}

export default SingleProduct