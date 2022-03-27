import React from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './App.css';
import './style.css';



function Login({setuseremail}) {
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            try {
                console.log(values);
                let data = await axios.post("http://localhost:3003/login", values)
                 window.localStorage.setItem("my_token", data.data.token)
                console.log(data.data);
                if (data.data.message == "login") {
                     setuseremail(data.data.user.email);
                     navigate("/");
                }else{
                    alert("UserID or Password Incorrect :( ")
                }

            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div  id='loginpage'>
            <h2 id='head'>LOGIN</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='container' id='loginform'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center text-light'><label><b>Email ID:</b></label></div>
                        <div className='col-lg-4'><input type="email" className='form-control'
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center text-light'><label><b>Password:</b></label></div>
                        <div className='col-lg-4'><input type="password" className='form-control'
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='col-lg-12 mt-3 text-centrt'>
                        <input type="submit" className='btn' id='addbtn' value="Login"></input></div>
                </div>
            </form>
        </div>
    )
}

export default Login
