import react, { useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import './App.css';
import './style.css';
import './my.css';


export default function Topbar({setuseremail,useremail}){
  var navigate = useNavigate();
  useEffect(async () => {
    setuseremail(window.localStorage.getItem("useremail"))
  }, [])

  let handleLogout = async (id) => {
    try {
        let result = window.confirm("Are you sure do you want to Logout?")
        if (result) {
             
          setuseremail(null);

          window.localStorage.setItem("my_token", null);
          window.localStorage.setItem("useremail", null);
          navigate('/login')

        }
    } catch (error) {
        console.log(error)
    }
}
   
 return (
    
        <div>
             <div id='Tp'> 
             <span> <i class="fa-solid fa-car-side" id="carlog"><span id='tplgtxt'>Rent My Car</span> </i></span>

             <button className="btn shadow-none" id='tbbtn'  
             onClick={() => handleLogout()}>Logout</button>  
             <Link to='/addcar'>  <button className="btn shadow-none" id='tbbtn'>Add Car</button></Link> 
             <Link to='/register'>  <button className="btn shadow-none" id='tbbtn'>Sign Up</button></Link> 
       
       { useremail!==null?<Link to='/login'>  <button className="btn shadow-none" 
         id='tbbtn'>Sign In</button></Link>:<Link to='/login'>  <button className="btn shadow-none" 
         id='blink_me'>Sign In</button></Link> }
   <Link to='/bookingconfirmedlist'>  <button className="btn shadow-none" id='tbbtn'>My Orders</button></Link> 
          <Link to='/mybooking'>  <button className="btn shadow-none" id='tbbtn'>Payment</button></Link>           
          <Link to='/dashboard'>  <button className="btn shadow-none" id='tbbtn'>Home</button></Link> 

         
             </div>
            </div>
                
    )
}
