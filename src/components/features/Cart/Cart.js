import React from 'react';
import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Cart = ()=> {
    return (
        <NavLink to='/cart' className="nav-link">Cart<FontAwesomeIcon className='cart-icon' icon={faCartPlus}/></NavLink>
    )
}

export default Cart;