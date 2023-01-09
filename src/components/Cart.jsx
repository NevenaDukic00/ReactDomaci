import React from 'react'
import SingleProduct from './SingleProduct';
import $ from "jquery"
import jquery from "jquery"

function Cart({numProducts,products}) {

  function totalPrice(){
    var price = 0;
    products.forEach((product) => {
      price = price + product.price*product.amount;
    });
    
     return price;
  }
 
  jquery(function () {
   

    $("#form").on("submit", function (e) {
      e.preventDefault();
      if (
        $("#firstname").val() &&
        $("#lastname").val() &&
        $("#email").val() &&
        $("#address").val()
      ) {
        
        alert(
          "<Shipping details>" +
            "\nFirstname: " +
            $("#firstname").val() +
            "\nLastname: " +
            $("#lastname").val() +
            "\nEmail: " +
            $("#email").val() +
            "\nAddress: " +
            $("#address").val() +
            "\nTotal price: " +
            totalPrice() +
            "$" +
            "\nTotal number of products: " +
            numProducts
        );
      } else {
        alert("All fields are required!");
      }
    });
  });
 

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
          
          <form action="." id="form"  >
            <h1 className="headerCart">Cart</h1>
            <div className="formCart">
              <label htmlFor="firstname">Firstname:</label>
              <input
                type="text"
                placeholder="Enter firstname"
                name="firstname"
                id="firstname"
              ></input>

              <label htmlFor="lastname">Lastname:</label>
              <input
                type="text"
                placeholder="Enter lastname"
                name="lastname"
                id="lastname"
              ></input>

              <label htmlFor="email">Email:</label>
              <input
                type="text"
                placeholder="Enter email"
                name="email"
                id="email"
              ></input>

              <label htmlFor="address">Address:</label>
              <input
                type="text"
                placeholder="Enter address"
                name="address"
                id="address"
              ></input>

               <div className='price'>Total amount: {numProducts}</div>
              <div className='individualTotal'>Total price: {totalPrice()}</div>
              <input type="submit" className="submit" value="SUBMIT" ></input>

              </div>
              
            </form>
           
            </div>
           
      );
    }
    
  
}

export default Cart