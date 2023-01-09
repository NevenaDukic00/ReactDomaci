import React from 'react'
import SingleProduct from './SingleProduct'
function Product({products,addToCart,removeFromCart}) {
  return (
    <div className="homepage">
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