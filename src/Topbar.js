import react, { useEffect} from "react";
import { Link } from "react-router-dom";
import './App.css';
import './style.css';


export default function Topbar({useremail}){
 return (
        <div>
             <nav class="navbar  navbar-expand navbar-light  topbar mb-4 static-top shadow"
             id='topbar'> 
             
               
                <span className="logregbtn">
                    
                <Link to='/register'><button className="btn btn-sm " id='loginbtn' >Register</button></Link>
                <Link to='/login'><button className="btn btn-sm" id='regbtn' >Login</button></Link>
               
                </span>
                </nav>
                </div>
    )
}