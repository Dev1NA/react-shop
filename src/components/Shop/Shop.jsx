import React from 'react';
import Alert from '../Alert/Alert';
import BasketList from '../BasketList/BasketList';
import Cart from '../Cart/Cart';
import Item from '../Item/Item'
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';

function Shop(props) {
  const { goods = [], loading } = props;
  const [value, setValue] = React.useState('');
  const [order, setOrder] = React.useState([]);
  const [isBasketShow, setBasketShow] = React.useState(false);
  const [alertName, setAlertName] = React.useState('');

  const closeAlert = () => {
    setAlertName('');
  }


  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter(item => item.id !== itemId)
    setOrder(newOrder);
  }

  const incBasket = (itemId) => {
   const newOrder = order.map(item => {
    const newQuantity = item.quantity + 1;
    if (item.id === itemId){
      return {
        ...item,
        quantity: newQuantity,
      }
    }
    else {
      return item
    }
   })
   setOrder(newOrder)
  }
  const decBasket = (itemId) => {
   const newOrder = order.map(item => {
    const newQuantity = item.quantity - 1;
    if (item.id === itemId){
      return {
        ...item,
        quantity: newQuantity >= 0 ? newQuantity : 0,
      }
    }
    else {
      return item
    }
  })
  setOrder(newOrder)
  }

  const addToBasket = (item) => {
    const indexItem = order.findIndex(orderItem => orderItem.id === item.id);
    if (indexItem < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      }
      setOrder([...order, newItem]);
    }
    else {
      const newOrder = order.map((orderItem, index) => {
        if (index === indexItem) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          }
        }
        else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlertName(item.name);
  }
  const filterGoods = goods.filter(item => {
    return item.name.toLowerCase().includes(value.toLocaleLowerCase());
  })


  return <div>
      {
        <Search setValue={setValue} value={value}/>
      }
      {
        <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      }
    <div className="content container">
      {
        loading ? <Preloader /> : filterGoods.map(item => <Item key={item.id} item={item} addToBasket={addToBasket}/>)
      }
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeFromBasket={removeFromBasket} incBasket={incBasket} decBasket={decBasket}/>
      }
      {
        alertName && <Alert name={alertName} closeAlert={closeAlert}/>
      }
    </div>
  </div>;
}

export default Shop;
