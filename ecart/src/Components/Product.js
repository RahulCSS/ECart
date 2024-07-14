import React from 'react';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Store/CartSlice';
import { fetchProducts } from '../Store/ProductSlice';
function Product() {
    const dispatch = useDispatch();
    const {data,status}= useSelector((state)=>state.product)

    function handleAddToCart(product){
        dispatch(addToCart(product)); //payload
    }
    useEffect(()=>{
        dispatch(fetchProducts());
    },[])
 
    if(status == 'loading'){
        return (
            <h2>Loading...</h2>
        )
        
    }else if(status == 'error'){
        return(
            <h2>Error loading products...</h2>
        )
    }
    
  return (
    <div className='productsWrapper'>
        {data.map((product)=>{
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