import React, { Component } from 'react';

import SortList from '../../features/SortList/SortList'
import Pagination from '../../features/Pagination/Pagination'
import ProductList from '../../features/ProductList/ProductList'


class HomePage extends Component{
    
  render(){
    return(
      <div className="d-flex row">
        <div className="col-3">
          <SortList />
        </div>
        <div className="col-9">
          <ProductList />
        </div>
        <Pagination />
      </div>
    )
  }
}



export default HomePage;