import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function Sidebar({ useremail }) {
  return (
    
    <div className='sidebar'>
     <i id='logo' class="fa fa-car" aria-hidden="true"></i>
      <div id='apphead'>
      Rent My Car</div>
      {useremail ? <button className='btn' id='profile'>{useremail}</button> :
        <button className='btn' id='notlog'></button>
      }
      <Link to='/'> <button className='insidebar btn'>Dashboard</button></Link>
      <Link to='/mybooking'> <button className='insidebar btn'>Payment</button></Link>
      <Link to='/bookingconfirmedlist'> <button className='insidebar btn'>My Order</button></Link>
      <Link to='/addcar'> <button className='insidebar btn'>Add car</button></Link>
    </div>
  )
}

export default Sidebar