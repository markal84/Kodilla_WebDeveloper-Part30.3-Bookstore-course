import React from 'react';
import { Link } from 'react-router-dom';


const Product = props => {
  return (
    <Link
      to={`/product/${props.id}`}
      key={`product-${props.id}`}
      id={`product-${props.id}`}
      {...props}
    >
      <div className='product-wrapper' style={{
        backgroundImage: `${props.imgurl}`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
      }}>
      </div>
      <div className='product-info-wrapper'>
        <span className='product-name'>name: {props.name}</span>
        <span className='product-author'>brand: {props.brand}</span>
        <span className='product-price '>Price: $ {props.price}</span>
        <span className={'product-old-price ' + ((props.oldPrice) ? 'show' : 'hidden')}>Old prie: $ {props.old_price}</span>
        <span className={'product-info ' + ((props.extra[0]) ? 'show' : 'hidden')}>{props.extra[0]}!!!</span>
        <span className={'product-info ' + ((props.extra[1]) ? 'show' : 'hidden')}>{props.extra[1]}!!!</span>
      </div>
    </Link>
  );
};

export default Product;
