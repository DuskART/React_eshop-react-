import { useState } from 'react';
import './App.css';


function ProductForm (props) {

    const [pname, setPname]= useState("")
    const [price, setPrice]= useState(0)
    const [image, setImage]= useState("")

    const [resp, setRes]= useState()


    const onShandler = event => {
        event.preventDefault()

        const dataT = {
            name: pname,
            price: price,
            img: image
        }


        fetch("http://localhost:3001/products", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(dataT) // body data type must match "Content-Type" header
          }).then((res) => res.json())
          .then(json => setRes(json))
          .finally( () => {
            setPname("");
            setPrice(0)
            setImage()
            props.onNewProduct(dataT)
          })
    }

    return (
        <>
        <form onSubmit={onShandler} >
            <input type="text" value={pname} placeholder="name" onChange={(e) => setPname(e.target.value)} />
            <input type="number" value={price} placeholder="price" onChange={(e) => setPrice(e.target.value)} />
            <input type="text" value={image} placeholder="image name" onChange={(e) => setImage(e.target.value)} />

            <input type="submit" />
        </form>

        {resp && <div>{JSON.stringify(resp)}</div> }

        </>
    )
}

export default ProductForm