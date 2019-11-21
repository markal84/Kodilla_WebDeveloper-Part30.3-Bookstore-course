import React, { Component } from 'react';
import { connect } from 'react-redux'


class ProductList extends Component{

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div key={item.id}>
                        <div>
                            <img src={item.img} className="img-thumbnail" alt={item.name}/>
                            <span>{item.brand}</span>
                            <span to="/" className="btn btn-light">add</span>
                        </div>
      
                        <div>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p>
                            <p>Old price: {item.oldPrice}$</p>
                            <p>{item.extra}</p>
                            <span to="/" className="btn btn-light">Read more-link to SingleProductPage</span>
                        </div>
                 </div>
            )
        })
        return(
            <div className="col-9">
                {itemList}
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    return {
        items: state.items
        }
}
  
  
export default connect(mapStateToProps)(ProductList)