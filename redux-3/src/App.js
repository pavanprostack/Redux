import React from 'react'
import { store } from './Redux/store'
import { Provider } from 'react-redux'
import Message from './Message/Message'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Navbar from './Navbar/Navbar'
import Product from './Product/Product'

const App = () => {
  return <>
    <Provider store={store}>
  <h1>Redux Full Concept</h1>
  <Message />
  <Product />
</Provider>

{/* 
    <Provider store={store}>
      <Router>
        <Navbar />
        <h1>Complete Redux Concept</h1>
        <Routes>
          <Route path='/message' element={<Message />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Router>
    </Provider> */}
  </>
}

export default App