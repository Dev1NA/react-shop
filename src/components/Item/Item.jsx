import React from 'react';

function Item(props) {
  const { id, name, description, price, icon } = props.item;
  const { addToBasket = Function.prototype } = props;
  return <div>
      <div className="card teal darken-2">
        <div className="card-wrapper">
          <div className="front">
            <div className="card-image">
              <img src={icon} />
            </div>
            <div className="card-content">
              <p className='card-name'>{name}</p>
            </div>
          </div>
          <div className="back">
            <p className='back-desc'>{description}</p>
          </div>
        </div>
        <div className="card-action">
          <a className="grey lighten-5 btn" onClick={() => addToBasket({id, name, price})}>Купить</a>
          <span className='price right'>{price} UAH.</span>
        </div>
      </div>
    </div>
}

export default Item;
