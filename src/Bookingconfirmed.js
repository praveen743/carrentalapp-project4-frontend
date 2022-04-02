import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

function Bookingconfirmed({useremail}) {
    const [list,setlist] = useState([])
    useEffect(async () => {
        fetchcar()
      }, [])
    
      let fetchcar = async () => {
        try {
          console.log(useremail)
          let itemdetials = await axios.get(`http://localhost:3003/confirmedbooking/${useremail}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
          console.log(itemdetials.data)
           setlist(itemdetials.data)
        } catch (error) {
          console.log(error)
        }
      }

      let handleDelete = async (id) => {
        try {
            let result = window.confirm("Are you sure do you want to cancel?")
            if (result) {
                await axios.delete(`http://localhost:3003/delete/${id}` )
                fetchcar()
            }
        } catch (error) {
            console.log(error)
        }
    }

  return (
     <>
     
    <div className='container' id='ordercardcontainer'>
   
    {
         list.map((obj, index) => {
            
            return <div key={index}>
               
                <div class="card" id='paymntcard'>
                 <div class="card-body" id='paycrdbdy'>
                     <button className='btn' id='btnx'  onClick={() => handleDelete(obj._id)} 
                     > <b id='xtxt'>X</b></button>
                    <p class="card-text mt-5" id='payptag'>{` ${obj.brandname} - ${obj.carmodel}`}</p>
                        <p class="card-text" id='payptag'>{`Rent for ${obj.days} days 
                         `}</p>
                        <p class="card-text" id='payptag'>{ `
                        and  ${obj.kilometers} kms `}</p>
                         <p class="card-text" id='payptag'>{`Bill - ₹ ${(obj.rent*obj.days)+(obj.costperkm*obj.kilometers)}`} </p>
                     </div>
                     </div>
            </div>
        })
    
      }
    </div>
 </>
  )
}

export default Bookingconfirmed