import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../../actions/actions";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import TextTruncate from "react-text-truncate";
import Pulse from "react-reveal/Pulse";
import './ProductList.scss';

class ProductList extends Component {
  handleClick = id => {
    this.props.addToCart(id);
  };

  render() {
    let itemList = this.props.data.map(item => {
      return (
        <div key={item.id} className="card">
          <div>
            <Link to={`/product/${item.id}`}>
              <img src={item.img} className="card-img-top" alt={item.name} />
            </Link>
          </div>
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <span>{item.author}</span>
            <TextTruncate
              line={2}
              element="span"
              truncateText="…"
              text={item.desc}
              textTruncateChild={
                <Button type="button" className="btn btn-primary mt-3">
                  <Link className="link-text" to={`/product/${item.id}`}>Read more</Link>
                </Button >
              }
            />
            <p className="mt-3">
              <h4>Price: {item.price}$</h4>
            </p>
            <p><del>Old price: {item.oldPrice}$</del></p>
            <p className="text-uppercase font-weight-bold">{item.extra}</p>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Pulse>{ itemList }</Pulse>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: id => {
      dispatch(addToCart(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
