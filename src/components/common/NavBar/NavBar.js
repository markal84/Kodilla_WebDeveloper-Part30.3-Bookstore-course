import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {

  render() {
    return (  
      <div> 
        <Link to='/'>Home</Link>
        <Link to='/faq'>Faq</Link>
        <Link to='/terms'>Terms</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/cart'>Cart temporary</Link>
      </div>
    );
  }

}

export default NavBar;