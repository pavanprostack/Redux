import React from 'react'
import Counter from './Counter/Counter'
import {Provider} from 'react-redux'
import {store} from './Redux/store'

const App = () => {
  return <>
 <Provider store={store}>
  <h1>Counter Component</h1>
  <Counter />
 </Provider>
  </>
}

export default App