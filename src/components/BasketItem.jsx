import React, {useContext} from 'react';
import { ShopContext } from '../context/context'

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
  } = props;

  const {
    removeFromBasket = Function.prototype,
    incBasket = Function.prototype,
    decBasket = Function.prototype,
  } = useContext(ShopContext);

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
