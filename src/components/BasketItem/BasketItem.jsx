import React from 'react';

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incBasket = Function.prototype,
    decBasket = Function.prototype,
  } = props;
  return <div>
    <li className="collection-item cart-item">
      <div className="cart-content">
        {name}
        <i
          className="material-icons icon-add"
          onClick={() => incBasket(id)}
          >add</i>
          x{quantity}
        <i
          className="material-icons icon-sub"
          onClick={() => decBasket(id)}
          >remove</i>

        = {price * quantity}
      </div>
        <i
          className="material-icons cart-delete"
          onClick={() => removeFromBasket(id)}
        >
          close
        </i>
    </li>
  </div>;
}

export default BasketItem;
