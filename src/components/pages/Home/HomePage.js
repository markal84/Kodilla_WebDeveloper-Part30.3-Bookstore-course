import React, { Component } from 'react';

import SortList from '../../features/SortList/SortList'
import Pagination from '../../features/Pagination/Pagination'
import ProductList from '../../features/ProductList/ProductList'
import Products from '../../../Data/Products.json'


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
        <h3>here it will be pagination componnt</h3>
      </div>
    )
  }
}



export default HomePage;