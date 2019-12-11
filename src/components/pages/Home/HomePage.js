import React, { Component } from 'react';

import Pagination from '../../features/Pagination/Pagination'
import ProductList from '../../features/ProductList/ProductList'


class HomePage extends Component{
    
  render(){
    return(
      <div className="d-flex row">
        <div className="col-12">
        <Pagination >
          <ProductList />
        </Pagination>  
        </div>
      </div>
    )
  }
}



export default HomePage;