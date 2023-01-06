import React from 'react'

function Cart({numProducts}) {
    if (numProducts === 0) {
        return (
          <div className="emptyCart">
            The cart is empty!
          </div>
        );
      } else {
        return <div>{numProducts}</div>
    }
    
  
}

export default Cart