import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './NavBar.scss' //if not needed delete it, try to find solution to active/visited links react bootstrap

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar text-uppercase">
        <Logo />  
        <ul className="nav justify-content-end"> 
          <NavLink to='/' className="nav-link">Home</NavLink>
          <NavLink to='/faq' className="nav-link">Faq</NavLink>
          <NavLink to='/terms' className="nav-link">Terms</NavLink>
          <NavLink to='/contact' className="nav-link">Contact</NavLink>
          <NavLink to='/cart' className="nav-link">Cart<FontAwesomeIcon className='cart-icon' icon={faCartPlus}/></NavLink>
        </ul>
      </nav>   
    );
  }

}

export default NavBar;