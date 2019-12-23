import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './NavBar.scss' 

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar text-uppercase mb-4">
        <Logo />  
        <ul className="nav justify-content-end"> 
          <NavLink exact to='/' className="nav-link">Home</NavLink>
          <NavLink excat to='/faq' className="nav-link">Faq</NavLink>
          <NavLink exact to='/terms' className="nav-link">Terms</NavLink>
          <NavLink exact to='/contact' className="nav-link">Contact</NavLink>
          <NavLink exact to='/cart' className="nav-link">Cart<FontAwesomeIcon className='cart-icon ml-1' icon={faCartPlus}/></NavLink>
        </ul>
      </nav>   
    );
  }

}

export default NavBar;