import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../common/Logo/Logo';

import './NavBar.scss' //if not needed delete it, try to find solution to active/visited links react bootstrap

class NavBar extends React.Component {

  render() {
    return (
      <nav className="navbar text-uppercase">
        <Logo />  
        <ul className="nav justify-content-end"> 
          <Link to='/' className="nav-link active">Home</Link>
          <Link to='/faq' className="nav-link active">Faq</Link>
          <Link to='/terms' className="nav-link active">Terms</Link>
          <Link to='/contact' className="nav-link active">Contact</Link>
          <Link to='/cart' className="nav-link active">Cart temporary</Link>
        </ul>
      </nav>   
    );
  }

}

export default NavBar;