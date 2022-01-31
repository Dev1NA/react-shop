import { createContext, useReducer } from "react";
import reducer from './reducer'

export const ShopContext = createContext();

export const ContextProvider = ({children}) => {

  const initialState = {
    value: '',
    alertName: '',
    order: [],
    goods: [],
    isBasketShow: false,
    loading: false,
  }

  const [val, dispatch] = useReducer(reducer, initialState);

  val.setValue = (value) => {
    dispatch({type: 'SET_VALUE', payload: value})
  }
  val.setGoods = (data) => {
    dispatch({type: 'SET_GOODS', payload: data})
  }

  val.addToBasket = (item) => {
    dispatch({type: 'ADD_TO_BASKET', payload: item})
  }

  val.incBasket = (itemId) => {
    dispatch({type: 'INC_BASKET', payload: {id: itemId}})
  }

  val.decBasket = (itemId) => {
    dispatch({type: 'DEC_BASKET', payload: {id: itemId}})
  }

  val.closeAlert = () => {
    dispatch({type: 'CLOSE_ALERT'});
  }

  val.removeFromBasket = (itemId) => {
    dispatch({type: 'REMOVE_FROM_BASKET', payload: {id: itemId}})
  }

  val.handleBasketShow = () => {
    dispatch({type: 'HANDLE_BASKET_SHOW'})
  }

  return <ShopContext.Provider value={val}>
    {children}
  </ShopContext.Provider>
}