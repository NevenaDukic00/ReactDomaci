import React from 'react'
import SingleProduct from './SingleProduct';
import $ from "jquery"
import jquery from "jquery"
import FormMy from './FormMy';

function Cart({numProducts,products}) {

  function totalPrice(){
    var price = 0;
    products.forEach((product) => {
      price = price + product.price*product.amount;
    });
    
     return price;
  }

  console.log("Na stanju:" + numProducts);
    if (numProducts === 0) {
        return (
          <div className="emptyCart">
            The cart is empty!
          </div>
        );
      } else {
        return (
        
        <div className="cart">
        
          <div className='products'>
          {products.map((product) => {       
           return <SingleProduct
              product={product}
              key = {product.id}
              flag = {0}
            />
          })}
          </div>

          <FormMy
            numProducts={numProducts}
            totalPrice = {totalPrice}
           />
          </div>
           
      );
    }
    
  
}

export default Cart