import React from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'

import { API_KEY, API_URL } from './config'
import Preloader from './components/Preloader/Preloader'

function App() {

  const [goods, setGoods] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      }
    })
    .then((response) => response.json())
    .then((data) => setGoods(data.featured))
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <Header />
      <Shop goods={goods} loading={loading}/>
      <Footer />
    </div>
  );
}

export default App;
