import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

function Myorder({setbill,useremail}) {
    const [list,setlist] = useState([])
    useEffect(async () => {
        fetchcar()
      }, [])
    


      let fetchcar = async () => {
        try {
          let itemdetials = await axios.get(`http://localhost:3003/mybooking/${useremail}`,{
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

    let calculate = async (id) => {
      try {
          var orderinfo = await axios.get(`http://localhost:3003/calorder/${id}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        })
          setbill((orderinfo.data[0].rent*orderinfo.data[0].days)+
          (orderinfo.data[0].costperkm*orderinfo.data[0].kilometers))
          
      } catch (error) {
          console.log(error)
      }
  }


  return (
    <>
    
     
           
            <div className='container' id='paymentcontain'>
                {
                   list.map((obj, index) => {
                          return <div key={index}>
                           
                            <div class="card" id='paymntcard'>
                             <div class="card-body" id='paycrdbdy' >
                                <p class="card-text" id='payptag'>{` ${obj.brandname} - ${obj.carmodel}`}</p>
                                    <p class="card-text  " id='payptag' >{`Rent for ${obj.days} days and  ${obj.kilometers}kms `}</p>
                                     <p class="card-text  " id='payptag' >{`Bill - RS.${(obj.rent*obj.days)+(obj.costperkm*obj.kilometers)}`} </p>
                                    
                               <Link to={`/editbooking/${obj._id}`}><button  
                                className='btn shadow-none' id='paycrdbtns' >Edit</button></Link>
                               <button onClick={() => handleDelete(obj._id)}   
                               className='btn shadow-none' id='paycrdbtns' >Cancel</button><br/>
                                  

                                   <Link to={`/payment/${obj._id}`}> 
                                  <button className='btn mt-3 btn-lg shadow-none'
                                     id='odrbtn'    onClick={() => calculate(obj._id)}
                                    >Pay Now</button></Link> 
                                    
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </>
  )
}

export default Myorder