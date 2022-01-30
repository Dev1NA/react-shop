import React, { useContext } from 'react';
import { ShopContext } from '../../context'

function Cart() {

  const { handleBasketShow = Function.prototype, order } = useContext(ShopContext);

  const quantity = order.length;

  return <div className='cart' onClick={handleBasketShow}>
    <i className="material-icons white-text">shopping_cart</i>
    {
      quantity ? <span className='cart-count'>{quantity}</span> : null
    }
  </div>;
}

export default Cart;
