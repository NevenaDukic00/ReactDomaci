import React from 'react'
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import images from './Images';
//destrukturiranje da ne bismo pisali props.product.p ovo skraceno
function SingleProduct({product,addToCart,removeFromCart, flag}) {

  
  return (
    
    <div className={flag === 1 ? "singleProduct" : "inCart"}>

    <div className='title'>{product.title}</div>

    <img src={images[product.imgIndex]} alt="Images" className="image" />

    {flag === 1 ? <div className="desc">{product.desc}</div> : <></>}

    <div className='buttons'>
    {flag===1? <>
      <div className='b' onClick={() => addToCart(product.id)}>
    
    <BsPlusLg/>
    </div>
    
    <div className='b' onClick={() => removeFromCart(product.id)}>
    <BsDashLg/>
    </div>
    </>:( <h4 className="amount">Amount: {product.amount}</h4>)}

    
    </div>
  </div>
  )
}

export default SingleProduct