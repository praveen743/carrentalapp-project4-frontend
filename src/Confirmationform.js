import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

function Confirmationform({useremail}) {
    const params = useParams();
    const [list,setlist] = useState([])
    useEffect(async () => {
        fetchcar()
      }, [])
    
      let fetchcar = async () => {
        try {
          let itemdetials = await axios.get(`http://localhost:3003/car/${params.id}`,{
            headers: {
                Authorization: window.localStorage.getItem("my_token")
            }
        });
          console.log(itemdetials.data);
          formik.setFieldValue('rent',itemdetials.data[0].rent)
          formik.setFieldValue('brandname',itemdetials.data[0].brandname)
          formik.setFieldValue('carmodel',itemdetials.data[0].carmodel)
          formik.setFieldValue('cartype',itemdetials.data[0].cartype)
          formik.setFieldValue('costperkm',itemdetials.data[0].costperkm)
          setlist(itemdetials.data[0])
        } catch (error) {
          console.log(error)
        }
      }

      let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      userid:useremail,
        days:'',
        kilometers:'',
        rent:'',
        brandname: '',
        carmodel: '',
        cartype: '',
        costperkm: '',
        payment:'not paid'
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let data = await axios.post("http://localhost:3003/order", values)
        navigate('/mybooking')

        } catch (error) {
        console.log(error)
      }
    }
    
  })
  return (
    <>
    <div className='text-light text-lg'> </div>
    <form onSubmit={formik.handleSubmit}>
      <div className='container' style={{marginTop:'50px'}}>
<div className='text-light' id='head'>{`${list.brandname} - ${list.carmodel}`}</div>
      <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b> Number Of Days You Need For Rent : </b></label></div>

          <div className='col-lg-4'><input type="number" className='form-control'
           
             onChange={formik.handleChange} value={formik.values.days} name='days'></input></div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b> Number Of Kilometers:</b></label></div>
             <div className='col-lg-4'><input type="number" className='form-control' 
            onChange={formik.handleChange} value={ formik.values.kilometers} name='kilometers'></input></div>
        </div>
      

     
        <div className='row mt-2'>
        
        <div className='col-lg-12 mt-3 text-center'><input type="submit"  id='addbtn'
         className='btn' value="Submit"></input></div>
      </div>
      </div>
    </form>
    </>
  )
}

export default Confirmationform