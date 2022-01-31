import React, { useContext } from 'react';
import { Alert, BasketList, Cart, Item, Preloader, Search} from './'
import { ShopContext } from '../context/context'
import { API_KEY, API_URL } from '../config'

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
