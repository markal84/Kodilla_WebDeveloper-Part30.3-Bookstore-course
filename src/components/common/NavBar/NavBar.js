import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';
import Cart from '../../features/Cart/Cart'

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
          <Cart />
        </ul>
      </nav>   
    );
  }

}

export default NavBar;