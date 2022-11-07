import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return <>
 <nav className='navbar navbar-dark bg-success navbar-expand-lg'>
  <Link to="#" className='navbar-brand'>Redux Thunk</Link>
  <div className='ml-auto'>
    <ul className='navbar-nav'>
      <li className='nav-list'><Link to="user" className='nav-link'>User</Link></li>
      <li className='nav-list'><Link to="user1" className='nav-link'>User1</Link></li>
    </ul>
  </div>
 </nav>
  </>
}

export default Navbar