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
            
            <div className='container' id='ordercardcontainer'>
                {
                    list.map((obj, index) => {
                        
                        return <div key={index}>
                           
                            <div class="card mt-4 ml-4" id='ordercard' style={{ width: "252px" }}>
                             <div class="card-body" id='odrcardbd'>
                                <p class="card-text mt-1 text-dark" id='ordtxt'>{` ${obj.brandname} - ${obj.carmodel}`}</p>
                                    <p class="card-text text-dark" id='ordtxt'>{`Rent for ${obj.days} days and  ${obj.kilometers}kms `}</p>
                                     <p class="card-text text-dark" id='ordtxt'>{`Bill - RS.${(obj.rent*obj.days)+(obj.costperkm*obj.kilometers)}`} </p>
                                 <div className='row' id='ordrow'>
                                   <div className='col-lg-6' >
                                   <Link to={`/editbooking/${obj._id}`}><button  className='btn btn-sm text-light '  ><b>Edit Order</b></button></Link>
                                   </div>
                                   <div className='col-lg-6'>
                                   <button onClick={() => handleDelete(obj._id)} className='btn btn-sm text-light'  ><b>cancel</b></button>
                                   </div>
                                 

                                 </div>
                                  <Link to={`/payment/${obj._id}`}> 
                                  <button className='btn mt-2'
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