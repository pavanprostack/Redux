 import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return <>
  <nav className='navbar navbar-dark bg-success navbar-expand-lg'>
    <Link to="#" className='navbar-brand'>Redux Full Concept</Link>
    <div className='ml-auto'>
      <ul className='navbar-nav'>
        <li className='nav-list'><Link to="message" className='nav-link'>Message</Link></li>
        <li className='nav-list'><Link to="product" className='nav-link'>Product</Link></li> 
      </ul>
    </div>
  </nav>
  </>
}

export default Navbar