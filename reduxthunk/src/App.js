import React from 'react'
import {store} from './Redux/store'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import  {Provider} from 'react-redux'
import User from './User/User'
import User1 from './User1/User1'


const App = () => {
  return <>
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/user' element={<User />} />
          <Route path='/user1' element={<User1 />} />
        </Routes>
      </Router>
    </Provider>
  </>
}

export default App