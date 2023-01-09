import './App.css';
import NavBar from './components/NavBar';
import Product from './components/Product';
import Cart from './components/Cart';
import { useState } from "react";
import {  BrowserRouter, Routes,Route } from "react-router-dom";
function App() {

 
  //fja kojim menjamo njenu vrednost je ovo addCart, za cuvanje stanja komponente
  const [numProducts, setNumProducts] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const [products] = useState([
    {
      id: 1,
      title: "LIGHT OF MY LIFE BOX BOUQUET",
      desc: "From life's big moments to sweet just because sentiments, the Light of My Life Box Bouquet is designed to celebrate your loved ones any day of the year. RSVP'd to the party are hot pink carnations, orange roses, lavender cushion poms and lush greens.",
      price: 1500,
      amount:0,
      imgIndex :0,
      total :0,
      maxAvailNumber : 10
    },
    {
      id: 2,
      title: "MIXED ROSES",
      desc: "Colorful and blooming, this vibrant bouquet of a dozen roses is an instant mood booster. An abundance of the freshest roses is paired with touches of lush greenery to delight everyone from your special someone to your best friend for any occasion or sentiment.",
      price: 2500,
      amount:0,
      imgIndex :1,
      total:0,
      maxAvailNumber:15
    },
    {

      id: 3,
      title: "LIGHT OF MY LIFE BOUQUET & HAPPY BIRTHDAY TOPPER",
      desc: "Celebrate their big day with a gift set that brightens up the room. This dazzling arrangement is one of the favorites among our best sellers and comes with a mix of roses, lilies, poms and more. Nestled among the blooms is a Happy Birthday topper to make this gift so very special.",
      price: 3500,
      amount:0,
      imgIndex :2,
      total:0,
      maxAvailNumber:5
  }]);

  
  const [currentProduct, setCurrentProducts] = useState(products);

  function refreshCart(){
    //da stavimo u niz samo elemente u kojima je amount>0
    setCartProducts(products.filter((product) => product.amount > 0));
    console.log(cartProducts);
  }

    function addToCart(id) {
      products.forEach((product) => {
        if (product.id === id) {
          if (product.amount < product.maxAvailNumber) {
          console.log("Dodajemo:" + id);
          setNumProducts(numProducts+1);
          product.amount++;
          product.total = product.total + product.price;
          refreshCart();
          }else {
            alert(
              "Max avaliable number of product " +
                product.title +
                " is: " + product.maxAvailNumber   
            );
        }
    }});
    }
  
    function removeFromCart(productID) {
      products.forEach((product) => {
        if (product.id === productID) {
          if(product.amount>0){
            product.amount--;
            setNumProducts(numProducts-1);
            product.total = product.total - product.price;
            refreshCart();
          }
         
        }
      });
    }


    function search(price){
      if(price==0){
        setCurrentProducts(products);
      }else{
      console.log("USAO U SEARCH");
      console.log(price);
      const prod = [];
      var k = 0;
      products.forEach((product) => {
        if (product.price <= price) {
         prod[k++] = product;
        }

      });
      prod.forEach((product) => {
        console.log(product.title);

      });
      setCurrentProducts(prod);
    }
      
    }

  return <div className='App'>
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <Product
              products={currentProduct}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              search = {search}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart 
            numProducts={numProducts}  
            products = {cartProducts}/>
          }
        />
      </Routes>
    </BrowserRouter>
    
    </div>
}

export default App;
