import React, { useContext } from 'react';
import { ShopContext } from '../context/context'

function Alert() {

  const { alertName = '', closeAlert = Function.prototype } = useContext(ShopContext);


  React.useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerId);
    }
  }, [alertName])

  return <div id='toast-container'>
    <div className="toast">{alertName} добавлен в корзину</div>
  </div>;
}

export default Alert;
