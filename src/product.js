import { useState } from 'react';
import './App.css';


function Product ({product, onClickHandler}) {

    const [inC, setinC] = useState(false)
    


    return (
        <div className='pro'>
            <h3>{product.name}</h3>
            <div> <img src={product.img} alt="" /></div>
            <div>{inC && "added"}</div>
            <span>{product.price} czk</span>
            <button onClick={()=> {
                setinC(true);
                onClickHandler(product)}}>buy</button>
        </div>
    )
}

export default Product;