import React, { useContext } from 'react';
import Alert from '../Alert/Alert';
import BasketList from '../BasketList/BasketList';
import Cart from '../Cart/Cart';
import Item from '../Item/Item'
import Preloader from '../Preloader/Preloader';
import Search from '../Search/Search';
import { ShopContext } from '../../context'
import { API_KEY, API_URL } from '../../config'

function Shop() {
  const {
    goods = [],
    setGoods,
    loading,
    value,
    isBasketShow,
    alertName
  } = useContext(ShopContext);

  React.useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      }
    })
    .then((response) => response.json())
    .then((data) => setGoods(data.featured))
  }, [])

  const filterGoods = goods.filter(item => {
    return item.name.toLowerCase().includes(value.toLocaleLowerCase());
  })

  return <div>
      {
        <Search />
      }
    <div className="content container">
      {
        loading ? <Preloader /> : filterGoods.map(item => <Item key={item.id} item={item}/>)
      }
      {
        !loading ? <Cart /> : null
      }
      {
        isBasketShow && <BasketList />
      }
      {
        alertName && <Alert />
      }
    </div>
  </div>;
}

export default Shop;
