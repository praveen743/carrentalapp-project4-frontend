import { useNavigate, useParams } from 'react-router-dom';
import React,{useState} from 'react';
import './style.css';
import './my.css';
 

function Payment({bill}) {
var params = useParams();
   var navigate = useNavigate();
  const [amount, setamount] = useState('');
console.log(amount);
console.log(bill);
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else if(amount === String(bill)){
      var options = {
        key: "rzp_test_NtkRCHDnclEkkH",
        key_secret:"v3DVdSOtNaaiQGLLkOK1Bri7",
        amount: amount *100,
        currency:"INR",
        name:"CAR_RENTAL_APP",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
          var paymentid = response.razorpay_payment_id;
          if(paymentid){
             navigate(`/orderpayment/${params.id}`)
          }

        },
        prefill: {
          name:"praveen",
          email:"praveenrajb2w@gmail.com",
          contact:"7449117322"
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#DC143C"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }else{
      alert('enter correct price');
    }
  }
  return (
    <div className="App" id='paymentbox'>
     <h2>Razorpay Payment</h2>
     <br/>
     <input className='text-center text-light' id='paymentinput'
      type="text" placeholder='Enter Amount' value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button className='btn shadow-none' id='billbtn' onClick={handleSubmit}>{`PAY ${bill}`}</button>
    </div>
  );
}

export default Payment;