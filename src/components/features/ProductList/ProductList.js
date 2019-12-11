import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../../actions/actions';
import Button from 'react-bootstrap/Button';
import data from '../../../Data/Products.json';

class ProductList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          direction: 'asc',
          data: data
        };
        this.sortBy = this.sortByPrice.bind(this);
    }

    sortByPrice(direction) {
        this.setState({
          data: data.sort((a, b) => {
            if (direction === 'asc') {
              return parseFloat(a['price']) - parseFloat(b['price'])
            } else if (direction === 'desc') {
              return parseFloat(b['price']) - parseFloat(a['price'])
            } else {
              return 0;
            }
          })
        });
    }
    
    sortByTitle(direction) {
      this.setState({
        data: data.sort((a, b) => {
          if (direction === 'asc') {
            return a['name'].localeCompare(b['name'])
          } else if (direction === 'desc') {
            return b['name'].localeCompare(a['name'])
          } else {
            return 0;
          }
        })
      });
    }
    

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
                <div className='col-3"'>
                    <h3>Sortuj</h3>
                    <Button onClick={() => this.sortByTitle('asc')}>Name A-Z</Button>
                    <Button onClick={() => this.sortByTitle('desc')}>Name Z-A</Button>
                    <Button onClick={() => this.sortByPrice('asc')}>Price Ascending</Button>
                    <Button onClick={() => this.sortByPrice('desc')}>Price Descending</Button>
                </div>
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