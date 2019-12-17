import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeItem,addQuantity,subtractQuantity} from '../../../actions/actions';
import Total from '../../features/Total/Total';
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
                                        <h6 className="title">{item.name}</h6>
                                        <h6>{ item.brand }</h6>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
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
                            <button name="add code">Add promo code</button>
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