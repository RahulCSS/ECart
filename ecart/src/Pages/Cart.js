import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { removeFromCart } from '../Store/CartSlice';
function Cart() {
  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  function handleremoveFromCart(id){
    dispatch(removeFromCart(id));
  }
  return (
    <div className='cartWrapper'>
      {items.map(item =>{
        return  <div className='cartCard'>
          <img src={item.image} alt='product' />
                  <h3>{item.title}</h3>
                  <p>Price: {item.price}</p>
                  <button onClick={()=>handleremoveFromCart(item.id)}className='remove-btn'>Remove from cart</button>
                </div>
      })}
    </div>
  )
}

export default Cart;