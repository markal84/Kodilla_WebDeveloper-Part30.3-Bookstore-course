import React from 'react';
import { Link } from "react-router-dom";
import logoimg from '../../../images/logo/logo.png'

const Logo = () => (
    <Link to={'/'}>
        <img src={logoimg} alt="Computer shop" className="navbar-brand"></img> 
    </Link>
      
);

export default Logo;