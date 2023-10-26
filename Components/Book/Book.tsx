'use client'
import React,{useState,useEffect} from 'react'
import {IoIosArrowDropleft} from 'react-icons/io'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
const Booking = ({ onClose, Batch, reserveamount, foramount, withoutamount }) => {
    const ticketPrice = foramount ;
    const firstTicketPrice = 2100.00;
    const [isTabOneActive, setIsTabOneActive] = useState(true);
    const [ticketCount, setTicketCount] = useState(1);
    const [isShow, setIsShow] = useState(false);
    const [isCheckboxTicked, setIsCheckboxTicked] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle the checkbox change event
    const handleCheckboxChange = (e) => {
      setIsChecked(e.target.checked);
    };
    const getSubtotal = () => {
      return ticketPrice * ticketCount;
    };
  
    const getGst = () => {
      return getSubtotal() * 0.05;
    };
  
    const getTotal = () => {
      return getSubtotal() + getGst();
    };
    const getSubtotalFirst = () => {
        return firstTicketPrice * ticketCount;
      };
    
      const getGstFirst = () => {
        return getSubtotalFirst() * 0.05;
      };
    
      const getTotalFirst = () => {
        return getSubtotalFirst() + getGstFirst();
      };
    const toggleDiv = () => {
        setIsShow(!isShow);
    };
    const handleIncreaseTicket = () => {
        setTicketCount(prev => prev + 1);
      };
    
      const handleDecreaseTicket = () => {
        if (ticketCount > 1) {
          setTicketCount(prev => prev - 1);
        }
      };
      const finalPrice = getTotal().toFixed(2) 
  
    const [inputValue, setInputValue] = useState({
        date: '',
        name: '',
        email: '',
        number: '',
      });
      const [amount, setAmount] = useState(
        isCheckboxTicked ? getTotal().toFixed(2) :getTotalFirst().toFixed(2) 
    
      );
      console.log(amount,"amount")
    const allFieldsFilled = Object.values(inputValue).every(input => input !== '');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue(prev => ({
          ...prev,
          [name]: value
        }));
      };
    
      
    const switchToTabTwo = () => {
        if (allFieldsFilled) {
            setIsTabOneActive(false);
        }
    };

    const switchToTabOne = () => {
    
            setIsTabOneActive(true)
        
    };
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevents the default form submission behavior
        switchToTabTwo();
    };
    const initiateAndPay = async () => {
      const loadRazorpayScript = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = initializePayment; // Call the payment initialization function when the script is loaded
        document.head.appendChild(script);
      };
      
  const initializePayment = async () => {
      const resInitiate = await fetch('http://localhost:4000/book/initiatePayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: isCheckboxTicked ? getTotalFirst().toFixed(2) :getTotal().toFixed(2)  })  // Replace with the desired amount
      });
    
      const dataInitiate = await resInitiate.json();
    
      const options = {
        key: process.env.RAZORPAY_KEY_ID,
        amount: isCheckboxTicked ? getTotalFirst().toFixed(2) : getTotal().toFixed(2)  ,
        currency: 'INR',
        name: 'Your App Name',
        description: 'Test Transaction',
        order_id: dataInitiate.orderId,
        handler: async function(response) {
          const resVerify = await fetch('http://localhost:4000/book/verifyPayment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpayOrderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature
            })
          });
    
          const dataVerify = await resVerify.json();
    
          if(dataVerify.verified) {
            // Save to DB
            const resSave = await fetch('http://localhost:4000/book/savePayment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                date: '13-10-2023',
                username: 'JohnDoe',  // Replace with actual data
                phoneNumber: '1234567890',  // Replace with actual data
                email: 'john@example.com',  // Replace with actual data
                source: 'Razorpay',
                amount:    isCheckboxTicked ? getTotalFirst().toFixed(2) : getTotal().toFixed(2) ,
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id
              })
            });
    
            const dataSave = await resSave.json();
            if(dataSave.success) {
              alert('Payment successful and saved!');
            } else {
              alert('Error saving payment details.');
            }
          } else {
            alert('Payment verification failed.');
          }
        }
      };

    
      const rzp = new window.Razorpay(options);
      rzp.open();
    }

      loadRazorpayScript();
    };
    

   
    // useEffect(() => {
    //   // Assuming you want to instantiate on component mount
    //   if (window.Razorpay) {
    //     initiateAndPay();
    //   }
    // }, []);
    return (
        <div className="fixed top-0 left-0 w-full h-full   flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto z-10">
            <div className="bg-white rounded shadow-lg mt-40 mb-2">

                {isTabOneActive ? (
                    <div >
                    <div className='flex flex-row bg-form1 p-4 border-b border-gray-400'>
                        <button onClick={onClose} ><IoIosArrowDropleft className="text-3xl text-gray-400 hover:text-green-700" /></button>
                        <div className='flex flex-col justify-center pl-20 pr-16 pt-4'>
                            <div className='text-xl font-bold text-center'>
                                Who Is Booking ?
                                </div>
                                <div className='text-sm text-gray-400 pt-1 text-center'>
                                Ooty Backpacking Tour
                                </div>
                            </div>
                            <div >
                            <div className="flex mt-5 ">
      {/* First rounded circle */}
      <div className="relative">
        <div className={`w-4 h-4 rounded-full ${isTabOneActive ? 'bg-yellow-500' : 'bg-blue-200'} flex items-center justify-center text-white`}>
        </div>
        <div className="absolute h-0.5 w-2 bg-blue-200 top-2 left-4"></div>
      </div>
      <div className="relative">
        <div className={`w-4 h-4 rounded-full ${!isTabOneActive ? 'bg-yellow-500' : 'bg-blue-200'} flex items-center justify-center text-white ml-2`}>
        </div>
        <div className="absolute h-0.5 w-2 bg-blue-200 top-2 left-6"></div>
      </div>
      <div className="w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center text-white ml-2">
        </div>
    </div>
                                </div>
                    </div>
                    <div className='p-4'>
                    <form onSubmit={handleSubmit}>
                    <div className="mb-4 border border-gray-400 p-2 rounded-lg">
        <label className="block text-sm  mb-2 text-center font-bold ">Select Dates</label>
                             <select className="w-full p-2 border rounded" name="date"  value={inputValue.date}
                            onChange={handleChange}  required>
          
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Google">Google</option>
          <option value="Whatsapp">Whatsapp</option>
          <option value="Other">Other</option>
          {/* Add more sources as required */}
        </select>
      </div>
    
      <div className="mb-4 border border-gray-400 p-2 rounded-lg">
        <label className="block text-sm font-bold mb-2">Name</label>
        <input type="text" className="w-full p-2 border rounded" placeholder="Full Name" name="name"  value={inputValue.name}
                            onChange={handleChange}   required/>
      </div>
      <div className="mb-4 flex justify-between">
        <div className="mr-1 border border-gray-400 p-2 rounded-lg">
          <label className="block text-sm font-bold mb-2">ISD Code</label>
          <select className="w-full p-2 border rounded">
            <option value="+91">+91</option>
            {/* Add more ISD codes as required */}
          </select>
        </div>
        <div className="ml-1 border border-gray-400 p-2 rounded-lg">
          <label className="block text-sm font-bold mb-2">Phone Number (WhatsApp)</label>
          <input type="text" className="w-80 p-2 border rounded" placeholder="Phone Number" name="number" value={inputValue.number}
                            onChange={handleChange}  required/>
        </div>
      </div>
      <div className="mb-4 border border-gray-400 p-2 rounded-lg">
        <label className="block text-sm font-bold mb-2">Email Address</label>
        <input type="email" className="w-full p-2 border rounded" placeholder="Email Address" name="email" value={inputValue.email}
                            onChange={handleChange}  required/>
      </div>
      <button type='submit' className="w-full bg-yellow-500 text-white p-3 rounded mt-2" >Next</button>
      </form>
          </div>
                    </div>
                ) : (
                    <div className='w-[420px] '>
                    <div className='flex flex-row bg-form1 p-4 border-b border-gray-400'>
                        <button onClick={switchToTabOne} ><IoIosArrowDropleft className="text-3xl text-gray-400 hover:text-green-700" /></button>
                        <div className='flex flex-col justify-center pl-10 pr-10 pt-4'>
                            <div className='text-xl font-bold text-center'>
                                Create Tickets & Pay
                                </div>
                                <div className='text-sm text-gray-400 pt-1 text-center'>
                                Ooty Backpacking Tour
                                </div>
                            </div>
                            
                            <div className="flex mt-5 ">
      {/* First rounded circle */}
      <div className="relative">
        <div className={`w-4 h-4 rounded-full ${isTabOneActive ? 'bg-yellow-500' : 'bg-blue-200'} flex items-center justify-center text-white`}>
        </div>
        <div className="absolute h-0.5 w-2 bg-blue-200 top-2 left-4"></div>
      </div>
      <div className="relative">
        <div className={`w-4 h-4 rounded-full ${!isTabOneActive ? 'bg-yellow-500' : 'bg-blue-200'} flex items-center justify-center text-white ml-2`}>
        </div>
        <div className="absolute h-0.5 w-2 bg-blue-200 top-2 left-6"></div>
      </div>
      <div className="w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center text-white ml-2">
        </div>
        </div>
        </div>
        <div className={isShow ? 'block' : 'hidden'} >
                 <div className='px-6 border-t-5 border-gray-400 border-t-4 mt-5 text-gray-600 h-[250px]' >
                      <h3 className="text-xl font-semibold mb-3 mt-5">Bill Summary</h3>

<div className="mb-2 flex flex-row">
  <div className="w-[200px]">Total Price:</div>
  <span>INR {getSubtotal().toFixed(2)}/-</span>
</div>

<div className="mb-2 flex flex-row">
  <div className="w-[200px]">GST (5%):</div>
  <span>INR {getGst().toFixed(2)}/-</span>
</div>

<div className="mb-2 flex flex-row">
  
  <div className="w-[200px]">Payment Gateway Charges:</div>
  <span>INR 0.00/-</span>
</div>

<div className="mb-2 flex flex-row">
  <div className="w-[200px] font-bold">Final Payable Amount:</div>
  <span className='font-bold'>INR {getTotal().toFixed(2)}/-</span>
</div>

<div className="mb-2 flex flex-row">
  <div className="w-[200px] text-green-500 font-bold">Payable Now:</div>
  <span className='text-green-500 font-bold'> {isCheckboxTicked ? (
    <div>INR {getTotalFirst().toFixed(2)} /-</div>
  ) : (
    <div>INR {getTotal().toFixed(2)}/-</div>
  )}</span>
</div>
                 </div>
</div>
                    <div className={isShow ? 'hidden' : 'block'}>
                    <div className=" p-4">
                    <label className="block text-sm mb-2 mt-6 text-gray-400 font-bold">Select Ticket(s)</label>
                    <div className="flex items-center  justify-between space-x-4 rounded-xl p-3 bg-form1 border border-gray-400">
                      <span className='font-bold text-sm'>With transport: ₹ {ticketPrice}</span>
                      <button onClick={handleDecreaseTicket} className='pl-20'>-</button>
                      <span>{ticketCount}</span>
                      <button onClick={handleIncreaseTicket}>+</button>
                    </div>
                  </div>
                  <div className='mx-4 mb-4 bg-green-100  w-50 rounded-lg flex flex-row justify-between items-center'>
                  <button className="p-2 pl-4  justify-start font-bold">Apply Coupon</button>
                  <div className='pr-4'><MdOutlineKeyboardArrowRight className="text-3xl " ></MdOutlineKeyboardArrowRight> </div>
                  </div>
                  <div className="flex items-center justify-between  px-6 text-sm">
                  <label>
                      <input type="checkbox" className="mr-2 " onChange={() => setIsCheckboxTicked(!isCheckboxTicked)}/>
                     Reserve your slot by paying : INR  {getSubtotalFirst().toFixed(2)}/-
                    </label>
                    </div>
                    <div className="flex items-center justify-between mt-2 px-6 text-sm">
                    <label>
                      <input type="checkbox" className="mr-2" onChange={handleCheckboxChange} />
                      I have read and accept the Refunds, Cancellation Policy & Terms & Conditions
                    </label>
                  </div>
                  </div>
                
                  <div className="flex items-center justify-between mb-4 p-4">
                  
                  </div>
                  <div className='p-4 border-t border-gray-400 flex justify-between bg-form1'>
                    <div className='flex flex-col '> 
                        <div > {isCheckboxTicked ? (
    <div><FaRupeeSign className='float-left text-xl pt-1 font-bold'/>{getTotalFirst().toFixed(2)} </div>
  ) : (
    <div><FaRupeeSign className='float-left text-xl pt-1 font-bold'/>{getTotal().toFixed(2)}</div>
  )}</div>
                        <div className='text-xxs text-blue-500 pl-2 cursor-pointer'   onClick={toggleDiv}>   {isShow ? 'Hide Details' : 'Show Details'} </div>
                    </div>
                  <button className= {`${isChecked ? 'bg-yellow-500' : 'bg-yellow-200'}  text-white w-40 h-10 rounded-lg`} onClick={initiateAndPay}  disabled={!isChecked} >Pay Now</button>
                </div>
                  </div>
                )}
            </div>
            </div>
    );

}

export default Booking
