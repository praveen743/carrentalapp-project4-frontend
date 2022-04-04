import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './Sb.css'; 
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Addcar from './Addcar';
import Viewcar from './Viewcar';
import Confirmationform from './Confirmationform';
import Myorder from './Myorder';
import Payment from './Payment';
import Edit from './Edit';
import Login from './Login';
import Register from './Register';
import Orderpayment from './Orderpayment';
import Bookingconfirmed from './Bookingconfirmed';
  
 
 
function App() {
  const [bill,setbill]=useState(null)
  const [useremail,setuseremail]=useState(null)
   return (
    <div className="App">
      <BrowserRouter>
        <div id="wrapper">
          {/* <Sidebar useremail={useremail}/>  */}
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar setuseremail={setuseremail} useremail={useremail}/>
              <div class="container-fluid">
                <Routes>
                <Route path="/dasdboard" element={<Dashboard/>}></Route>
                <Route path="/login" element={<Login setuseremail={setuseremail}/>}></Route>
                <Route path="/" element={<Register/>}></Route>
                <Route path="/addcar" element={<Addcar/>}></Route>
                <Route path="/view/:id" element={<Viewcar useremail={useremail}/>}></Route>
                <Route path="/selected/:id" element={<Confirmationform useremail={useremail}/>}></Route>
                <Route path="/mybooking" element={<Myorder setbill={setbill} useremail={useremail}/>}></Route>
                <Route path="/payment/:id" element={<Payment bill={bill}/>}></Route>
                <Route path="/editbooking/:id" element={<Edit/>}></Route>
                <Route path="/orderpayment/:id" element={<Orderpayment/>}></Route>
                <Route path="/bookingconfirmedlist" element={<Bookingconfirmed useremail={useremail}/>}></Route>
  </Routes>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter >
    </div>

  );
}

export default App;
