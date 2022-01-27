import React from 'react';

function Cart(props) {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return <div className='cart' onClick={handleBasketShow}>
    <i className="material-icons white-text">shopping_cart</i>
    {
      quantity ? <span className='cart-count'>{quantity}</span> : null
    }
  </div>;
}

export default Cart;
