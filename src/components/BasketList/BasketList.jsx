import React from 'react';
import BasketItem from '../BasketItem/BasketItem';

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incBasket = Function.prototype,
    decBasket = Function.prototype,
   } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0)

  return <ul className="collection basket-list" key={'12-124-4554-sfs'}>
          <li
            className="secondary-content cart-close"
            onClick={handleBasketShow}
          >
            <i className="material-icons">close</i>
          </li>
          <li className="collection-item active">Корзина</li>
          {
            order.length
              ? order.map(item => <BasketItem key={item.id} {...item} removeFromBasket=   {removeFromBasket} decBasket={decBasket} incBasket={incBasket}/>)
              : <li className="collection-item">Корзина пустая</li>
          }
        <li className="collection-item active">Всего: {totalPrice} UAH.</li>
      </ul>
}

export default BasketList;
