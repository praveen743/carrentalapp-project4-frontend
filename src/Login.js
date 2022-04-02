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
                let data = await axios.post("https://carrental-project4-backend.herokuapp.com/login", values)
                 window.localStorage.setItem("my_token", data.data.token);
                 window.localStorage.setItem("useremail", data.data.user.email);
                // alert(data.data.message);
                
                if (data.data.message === "login") {
                    console.log(data.data.user.email);
                    console.log(window.localStorage.getItem("useremail"));
                    setuseremail(window.localStorage.getItem("useremail"));
                     navigate("/");
                }else{
                    console.log("UserID or Password Incorrect :( ")
                    alert("UserID or Password Incorrect :( ")
                }

            } catch (error) {
                alert("UserID or Password Incorrect :(")
                alert("Register to login")
                // navigate('/register')
            }
        }
    })
    return (
        <div  id='loginpage'>
            <h2 id='head'>LOGIN</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className='container' id='loginform'>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center text-light'>
                            <label id='lbls'><b>Email ID:</b></label></div>
                        <div className='col-lg-4'><input type="email" className='form-control'
                            onChange={formik.handleChange} value={formik.values.email} name='email'></input></div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-4 text-right align-self-center text-light'>
                            <label id='lbls'><b>Password:</b></label></div>
                        <div className='col-lg-4'><input type="password" className='form-control'
                            onChange={formik.handleChange} value={formik.values.password} name='password'></input></div>
                    </div>
                    <div className='col-lg-12 mt-3 text-centrt'>
                        <input type="submit" className='btn btn-lg shadow-none'  id='logbtn' value="Login"></input></div>
                </div>

                
            </form>
        </div>
    )
}

export default Login
