import React from 'react'
import { Link } from'react-router-dom'

function NavBar() {
  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <span classNam='logo'>Redux Store</span>
        <div>
            <Link className='navLink' to="/">Home</Link>
            <Link className='navLink'to="/cart">Cart</Link>
            <span className='cartCount'>Cart Items : 0</span>
        </div>
    </div>
  )
}

export default NavBar