export default function reducer (state, { type, payload }) {
  console.log('type: ', type);
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload,
        loading: false,
      };
    case 'SET_VALUE':
      return {
        ...state,
        value: payload,
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };
    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.order.filter((item) => item.id !== payload.id),
      };
    case 'HANDLE_BASKET_SHOW':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'ADD_TO_BASKET': {
      const indexItem = state.order.findIndex((orderItem) => orderItem.id === payload.id);
      let newOrder = null;
      if (indexItem < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === indexItem) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }
      return {
        ...state,
        order: newOrder,
        alertName: payload.name,
      };
    }
    case 'INC_BASKET':
      return {
        ...state,
        order: state.order.map((item) => {
          const newQuantity = item.quantity + 1;
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: newQuantity,
            };
          } else {
            return item;
          }
        }),
      };
    case 'DEC_BASKET':
      return {
        ...state,
        order: state.order.map((item) => {
          const newQuantity = item.quantity - 1;
          if (item.id === payload.id) {
            return {
              ...item,
              quantity: newQuantity >= 0 ? newQuantity : 0,
            };
          } else {
            return item;
          }
        }),
      };
    default: throw new Error();
  }
}
