import React from 'react'
import Message from './Message/Message'
import {Provider} from 'react-redux' 
import { store } from './Redux/store'

const App = () => {
  return <>
  <Provider store={store}>
  <h1>App Component</h1>
  <hr/>
  <Message />

  </Provider>
  </>
}

export default App