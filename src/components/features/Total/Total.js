import React, { Component } from 'react';
import { connect } from 'react-redux';
import shippingCost from './ShipppingCost'

class Total extends Component{

    componentWillUnmount() {
            if(this.refs.shipping.checked)
                this.props.substractShipping()
    }
    handleChecked = (e)=>{
        if(e.target.checked){
            this.props.addShipping();
        }
        else{
            this.props.substractShipping();
        }
    }

    render(){
        
        return(
            <div className="container">
                <div className="collection">
                    <ul>
                        <li className="collection-item">
                            <label>
                                <input type="checkbox" ref="shipping" onChange= {this.handleChecked} />
                                <span>Shipping(+{ shippingCost }$)</span>
                            </label>
                        </li>
                        <li className="collection-item"><b>Total: {this.props.total}$</b></li>
                    </ul>
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch({type: 'ADD_SHIPPING'})},
        substractShipping: ()=>{dispatch({type: 'SUB_SHIPPING'})}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Total)
