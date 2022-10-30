import React from 'react'
import Counter from './Counter/Counter'
import { Provider } from 'react-redux'
import {store} from './Redux/store'
import Navbar from './Navbar/Navbar'

const App = () => {
  return <>
  <Provider store={store}>
    <Navbar />
  <h1>BootStrap Redux</h1>
  <Counter />
  </Provider>
  </>
}

export default App
