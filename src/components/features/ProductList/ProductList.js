import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../../../actions/actions'

class ProductList extends Component{

    handleClick = (id)=>{
        this.props.addToCart(id);
    }

    render() {
        let itemList = this.props.items.map(item=>{
            return(
                <div key={item.id} className="card">
                        <div>
                            <img src={item.img} className="card-img-top" alt={item.name}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ item.name}</h5>
                            <span>{item.brand}</span>
                            <span to="/" className="btn btn-light" onClick={()=>{this.handleClick(item.id)}}>add to cart</span>
                            <p className="card-text">{item.desc}</p>
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

const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)