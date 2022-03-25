import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
      <>
 <div className='container' id='mainpage' >
      <button className='cards'><Link to='/view/Hatchback' 
      style={{textDecoration: 'none',color:'black'}}>HATCHBACK</Link> </button>
      <button className='cards'><Link to='/view/Sedan' 
      style={{textDecoration: 'none',color:'black'}}>SEDAN</Link> </button>
      <button className='cards'><Link to='/view/Suv' 
      style={{textDecoration: 'none',color:'black'}}>SUV</Link> </button>
</div>
    </>
  )
}

export default Dashboard