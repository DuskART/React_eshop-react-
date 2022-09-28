import './App.css';
import Product from './product';
import ProductForm from './productForm';
import { useEffect, useState } from 'react';

function App() {

  const [cart, setCart]= useState([])
  const [data, setData]= useState([])
  const [isPending, setisPending]= useState(true)
  const [error, setError]= useState()

  const onNewProductHandler = (product) => {
    const newData = [...data]
    newData.push(product)
    console.log(data)
    setData(newData)
  }

  useEffect(()=>{
    setTimeout(() => {
      fetch("http://localhost:3001/products")
        .then(response => {
          if (response.ok) { 
          return response.json()
          }
          throw new Error(`unable to get data: ${response.statusText}`) 
        })
        .then(data => setData(data))
        .catch((err) => setError(err.message))
        .finally(() => setisPending(false))
    }, 1000)

  },[])






  const handler = function(product) {
    const newCart = [...cart]
    newCart.push(product)
    console.log(cart)
    setCart(newCart)
  }

  return (
    <div className="App">
     <h1>ESHOP</h1>

     {isPending && "data loading"}
    
     {error && <div>{error}</div>}

     {!isPending && cart.length}



     
     {data.map(item => <Product key={item.id} product={item}  onClickHandler={handler}></Product>)}
     
     
     {!isPending && <ProductForm onNewProduct={onNewProductHandler} ></ProductForm>}
     
     
    </div>
  );
}

export default App;
