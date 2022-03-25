import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import './style.css'

 
function Addcar() {
  let navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
        url:'',
        rent:'',
        brandname:'',
        carmodel:'',
        cartype:'',
        costperkm:''
    },
    onSubmit: async (values) => {
      try {
        console.log(values);
        let data = await axios.post("https://carrental-project4-backend.herokuapp.com/addcar", values)
        navigate('/')

        } catch (error) {
        console.log(error)
      }
    }
    
  })
  return (
    <>
    <div className='text-light' id='head'>Add New Car</div>
    <form onSubmit={formik.handleSubmit}>
      <div className='container' style={{marginTop:'50px'}}>

      <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b> Brand Name:</b></label></div>
          <div className='col-lg-4'><input type="text" className='form-control' 
             onChange={formik.handleChange} value={formik.values.brandname} name='brandname'></input></div>
        </div>

      <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b> Car Model:</b></label></div>
          <div className='col-lg-4'><input type="text" className='form-control' 
             onChange={formik.handleChange} value={formik.values.carmodel} name='carmodel'></input></div>
        </div>

      <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b> Car Type:</b></label></div>
          <div className='col-lg-4'><input type="text" className='form-control' 
          placeholder='hatchback/sedan/SUV' 
            onChange={formik.handleChange} value={formik.values.cartype} name='cartype'></input></div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b> Car Image URL:</b></label></div>
          <div className='col-lg-4'><input type="url" className='form-control'  
            onChange={formik.handleChange} value={formik.values.url} name='url'></input></div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-4 text-right align-self-center text-light text-lg'>
            <label><b>Rent per Day:</b></label></div>
          <div className='col-lg-4'><input type="number" className='form-control'  
            onChange={formik.handleChange} value={formik.values.rent} name='rent'></input></div>
        </div>

        <div className='row mt-4'>
          <div className='col-lg-4 text-right text-light text-lg'>
            <label><b>Cost Per Kilometer:</b></label></div>
          <div className='col-lg-4'><input type="number" className='form-control'  
            onChange={formik.handleChange} value={formik.values.costperkm} name='costperkm'></input></div>
        </div>
        
        <div className='row mt-2'>
        
        <div className='col-lg-12 mt-3 text-center'><input type="submit"  id='addbtn'
         className='btn  ' value="Add Car"></input></div>
      </div>
      </div>
    </form>
    </>
  )
}

export default Addcar