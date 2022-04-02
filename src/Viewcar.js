import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Viewcar({useremail}) {
  var navigate = useNavigate();
    const params = useParams();
    const [list,setlist] = useState([0])
    useEffect(async () => {
        fetchcar()
      }, [])
    
      let fetchcar = async () => {
        try {
          if(useremail===null){
            alert("Sign In to see cars");
            navigate('/login');
          }else{
            let itemdetials = await axios.get(`https://carrental-project4-backend.herokuapp.com/view/${params.id}`);
        
            console.log(itemdetials.data);
            setlist(itemdetials.data)
          }
         
        } catch (error) {
          console.log(error)
        }
      }
    
  return (
    
    <>

            <div id='head'> {params.id}</div>
            <div className='container' id='cardcontainer'>
                {
                   list.map((obj, index) => {
                        return <div key={index}>
                            <div class="card" id='viewcard'>
                            <img class="card-img-top" id='image' src={obj.url} alt="Card image cap" />
                               
                                <div class="card-body" id='viewcardbody'>

                                <p class="card-text mt-1" id='cardtext'>{` ${obj.brandname}`}</p>
                                    <p class="card-text" id='cardtext'>{` ${obj.carmodel}`}</p>
                                    <p class="card-text" id='cardtext'>{`Rent Per Day - ₹${obj.rent}`}</p>
                                    <p class="card-text" id='cardtext'>{`Rent Per kilometer - ₹${obj.costperkm}`}</p>
                                  <Link to={`/selected/${obj._id}`}> <button className='btn shadow-none'
                                     id='cardbtn'    
                                    >Select</button></Link> 
                                </div>
                            </div>
                        </div>
                    }) 
                }
            </div>
        </>

  )
}

export default Viewcar
