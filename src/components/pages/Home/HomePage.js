import React, { Component } from 'react';
import { connect } from 'react-redux'

import SortList from '../../features/SortList/SortList'
import Pagination from '../../features/Pagination/Pagination'



class HomePage extends Component{
    
  render(){
    let itemList = this.props.items.map(item=>{
      return(
          <div className="card" key={item.id}>
                  <div className="card-image">
                      <img src={item.img} alt={item.name}/>
                      <span className="card-title">{item.brand}</span>
                      <span to="/" className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></span>
                  </div>

                  <div className="card-content">
                      <p>{item.desc}</p>
                      <p><b>Price: {item.price}$</b></p>
                      <p>Old price: {item.oldPrice}$</p>
                      <p>{item.extra}</p>
                  </div>
           </div>
      )
  })
    return(
      <div className="d-flex row">
        <div className="col-3">
          <SortList />
        </div>
        <div className="col-9">
          {itemList}
        </div>
        <Pagination />
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return {
      items: state.items
       }
}


export default connect(mapStateToProps)(HomePage)