import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
 

function Dashboard() {
   
  return (
      <>
 <div className='container' id='mainpage' >
       <div id='dashcards'><Link to='/view/Hatchback' 
       style={{ textDecoration: 'none',color:'white'}}>Hatchback</Link> </div>
       <div id='dashcards'><Link to='/view/Sedan'  
       style={{ textDecoration: 'none',color:'white'}}>Sedan</Link></div>
       <div id='dashcards'><Link to='/view/Suv' 
       style={{ textDecoration: 'none',color:'white'}}>SUV</Link></div>
</div>
    </>
  )
}

export default Dashboard
