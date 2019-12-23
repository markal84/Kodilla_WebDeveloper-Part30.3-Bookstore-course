import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div className="text-uppercase float-right">
        <div className="d-inline-flex">
          <Link exact to='/' className="nav-link">Home</Link>
          <Link exact to='/faq' className="nav-link">Faq</Link>
          <Link exact to='/terms' className="nav-link">Terms</Link>
          <Link exact to='/contact' className="nav-link">Contact</Link>
        </div>
      </div>
    );
  }

}

export default Footer;