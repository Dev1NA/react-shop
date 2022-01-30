import React, { useContext }  from 'react'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Shop from './components/Shop/Shop'
import { ContextProvider } from './context'

function App() {

  return (
    <div className="App">
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </div>
  );
}

export default App;
