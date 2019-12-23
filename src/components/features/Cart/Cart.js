import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../../../actions/actions';
import Total from '../../features/Total/Total';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                       <div>
                            <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img}/>
                                    </div>                         
                                    <div className="item-desc">
                                        <h5 className="title mt-4">{item.name}</h5>
                                        <h6>{ item.author }</h6>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><FontAwesomeIcon icon={faChevronUp} onClick={()=>{this.handleSubtractQuantity(item.id)}}/>Add quantity</Link>
                                            <Link to="/cart" className="ml-4"><FontAwesomeIcon icon={faChevronDown} onClick={()=>{this.handleSubtractQuantity(item.id)}}/>Remove quantity</Link>
                                        </div>
                                        <Button className="btn btn-danger mt-3" onClick={()=>{this.handleRemove(item.id)}}>Remove item</Button>
                                    </div>
                                                                    
                            </li>  
                        </div>                     
                    )
                })
            ):

             (
                <p>Your cart is empty.</p>
             )
             if (addedItems.length > 0) { //if there is no added items in cart don't show total
                return( 
                    <div className="container">
                        <div className="cart">
                            <h5>You have ordered:</h5>
                            <ul className="collection">
                                {addedItems}
                            </ul>
                            < Total />
                        <form>
                            Promo code: <br></br>
                            <input type="text" name="Promo code"></input>
                            <Button className="btn btn-primary ml-3">Add promo code</Button>
                            <div>
                             <Button className="btn btn-success mt-3">Checkout</Button>
                            </div>
                        </form>  
                        </div>    
                    </div>
               )
             } else {
                return( 
                    <div className="container">
                        <div className="cart">
                            <h5>You have ordered:</h5>
                            <ul className="collection">
                                {addedItems}
                            </ul>
                        </div> 
                    </div>
               )
             }
    }
}
const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)