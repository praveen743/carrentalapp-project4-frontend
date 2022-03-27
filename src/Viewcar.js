import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Viewcar() {
    const params = useParams();
    const [list,setlist] = useState([])
    useEffect(async () => {
        fetchcar()
      }, [])
    
      let fetchcar = async () => {
        try {
          let itemdetials = await axios.get(`http://localhost:3003/view/${params.id}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
          console.log(itemdetials.data);
          setlist(itemdetials.data)
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
                            <div class="card mt-4 ml-4" id='card' style={{ width: "252px" }}>
                            <img class="card-img-top" id='image' src={obj.url} alt="Card image cap" />
                               
                                <div class="card-body" id='cdbd'>

                                <p class="card-text mt-1" id='para'>{` ${obj.brandname}`}</p>
                                    <p class="card-text" id='para'>{` ${obj.carmodel}`}</p>
                                    <p class="card-text" id='para'>{`Rent Per Day - ₹${obj.rent}`}</p>
                                    <p class="card-text" id='para'>{`Rent Per kilometer - ₹${obj.costperkm}`}</p>
                                  <Link to={`/selected/${obj._id}`}> <button className='btn'
                                     id='selectbtn'    
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