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
               
                <div class="card mt-4 ml-4" id='ordercard' style={{ width: "252px" }}>
                 <div class="card-body" id='odrcardbd'>
                     <button className='btn'  onClick={() => handleDelete(obj._id)} 
                     id='xbtn'> <b id='xtxt'>X</b></button>
                    <p class="card-text mt-1 text-dark" id='ordtxt'>{` ${obj.brandname} - ${obj.carmodel}`}</p>
                        <p class="card-text text-dark" id='ordtxt'>{`Rent for ${obj.days} days and  ${obj.kilometers}kms `}</p>
                         <p class="card-text text-dark" id='ordtxt'>{`Bill - RS.${(obj.rent*obj.days)+(obj.costperkm*obj.kilometers)}`} </p>
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