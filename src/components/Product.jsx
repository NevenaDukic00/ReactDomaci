import React from 'react'
import SingleProduct from './SingleProduct'
import $ from "jquery";
import { BsSearch} from "react-icons/bs";


function Product({products,addToCart,removeFromCart,search}) {

  
 
  return (
    
    <div className="homepage">

      <div className="formSearch">
     
        <div className="form-div">
        <input
                type="text"
                placeholder="Enter price"
                name="search"
                id="search"
        ></input>
        <div className='b' onClick={() => search( $("#search").val())}>
        <BsSearch/>
        </div>  
        
          </div>
      </div>

      {products.map((product) => {
       
        return (
          <SingleProduct 
            product={product}
            key = {product.id}
            addToCart = {addToCart}
            removeFromCart = {removeFromCart}      
            flag = {1}
          />
        );
      })}
    </div>
  );
 
}

export default Product