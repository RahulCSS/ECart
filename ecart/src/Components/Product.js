import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
function Product() {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();

    function handleAddToCart(product){
        dispatch(addToCart(product)); //payload
    }
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setProducts(res.data);
        })
    },[])

  return (
    <div className='productsWrapper'>
        {products.map((product)=>{
            return  <div className="card">
                    <img src={product.image} alt="product"/>
                    <h6>{product.title}</h6>
                    <h5>{product.price}</h5>
                    <button onClick={()=>handleAddToCart(product)} classname="btn">Add to Cart</button>
                    </div>
        })}
        
    </div>
  )
}

export default Product