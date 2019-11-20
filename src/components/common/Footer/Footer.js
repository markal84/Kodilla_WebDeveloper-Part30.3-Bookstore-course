import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {

  render() {
    return (
      <div className="text-uppercase float-right">
        <div className="d-inline-flex">
          <Link to='/' className="nav-link active">Home</Link>
          <Link to='/faq' className="nav-link active">Faq</Link>
          <Link to='/terms' className="nav-link active">Terms</Link>
          <Link to='/contact' className="nav-link active">Contact</Link>
        </div>
      </div>
    );
  }

}

export default Footer;