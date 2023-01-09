import React from 'react'
import SingleProduct from './SingleProduct';

function Cart({numProducts,products}) {
  console.log("Na stanju:" + numProducts);
    if (numProducts === 0) {
        return (
          <div className="emptyCart">
            The cart is empty!
          </div>
        );
      } else {
        console.log("Usao u else");
       return products.map((product) => {
          return (
            <SingleProduct
              product={product}
              key = {product.id}
              flag = {0}
            />
          );
        })
       // return <div>{numProducts}</div>
    }
    
  
}

export default Cart