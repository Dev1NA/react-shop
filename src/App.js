import React  from 'react'
import { Header, Footer, Shop } from './components/index'
import { ContextProvider } from './context/context'

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
