
"use client";
import Head from 'next/head';
import { useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import AccordionItem from '@/Components/Member/Accordian/Accordianitem';




const MembershipCard = ({ plan, price, perks, bgClass, lists }) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [visibleItems, setVisibleItems] = useState(6);
  
    const showMoreItems = () => {
      setVisibleItems(lists.length);
    };
  
    const showLessItems = () => {
      setVisibleItems(6);
    };
  
    const displayedLists = lists.slice(0, visibleItems);
  
  
   
    return (
        <div className={`bg-${bgClass} rounded-lg shadow-md p-4 text-white`}>

      <h3>{plan}</h3>
      <p>{price}</p>
      <p>{perks}</p>
      <ul className="list-disc pl-4">
        {displayedLists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {lists.length > visibleItems && visibleItems === lists.length && (
        <span className="text-blue-500 cursor-pointer" onClick={showLessItems}>
          Read less
        </span>
      )}
      {lists.length > visibleItems && visibleItems < lists.length && (
        <span className="text-blue-500 cursor-pointer" onClick={showMoreItems}>
          Read more
        </span>
      )}
      <div className="mt-4 flex justify-between items-center">
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          onClick={() => setIsAdded(!isAdded)}
        >
          {isAdded ? 'Remove' : 'Add to Cart'}
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close Details' : 'View Details'}
        </button>
      </div>
      <button className="bg-green-500 text-white w-full mt-4 px-4 py-2 rounded-md hover:bg-green-600">
        Unlock Membership
      </button>
    </div>
  );
};
  
const page = () => {

  const [formData, setFormData] = useState({
    // State for form data (as an example)
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    passtype: ''
  });

  // Generate an array of 20 items for the MembershipCard lists
  const formatDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1; // January is 0!
    const yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    return dd + '/' + mm + '/' + yyyy;
};

// Calculate today's date
const today = new Date();
const activationDate = formatDate(today);

// Calculate expiring date (6 months from today)
today.setMonth(today.getMonth() + 6);
const expiringDate = formatDate(today);


  const twentyItems = Array.from({ length: 20 }, (_, index) => `Item ${index + 1}`);

  const [membershipPrice, setMembershipPrice] = useState(0); // Default price for BACKPACKER

//   const [gstRate, setGstRate] = useState(0.05);
  const getGstFirst = () => {
    return membershipPrice * 0.05;
  };
  
  const getTotalFirst = () => {
    return membershipPrice + getGstFirst();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'passtype') {
        if (value === 'Trek Pass') {
          setMembershipPrice(1); // Updated Trek Pass price
        } else if (value === 'Tour Pass') {
          setMembershipPrice(21000); // Updated Tour Pass price
        } else {
          setMembershipPrice(9999);
        }
      }
      
  };
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    await initiateAndPayMembership();
};

  const initiateAndPayMembership = async () => {
    const loadRazorpayScript = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => initializeMembershipPayment().catch(console.error); // Call the payment initialization function when the script is loaded
        document.head.appendChild(script);
    };
console.log("hey charlie")
    const initializeMembershipPayment = async () => {
 
        // Replace with the correct URL and amount calculation logic for membership
        console.log("hey saad")
        const resInitiate = await fetch('http://localhost:4000/member/initiatePayment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ totalamount: getTotalFirst().toFixed(2) }) 
        });

        const dataInitiate = await resInitiate.json();

        const options = {
            key: process.env.RAZORPAY_KEY_ID, // Ensure this is configured correctly
            amount: getTotalFirst().toFixed(2),
            currency: 'INR',
            name: 'Your App Name',
            description: 'Membership Transaction',
            order_id: dataInitiate.orderId,
            handler: async function(response) {
                // Handle the response after payment
                const resVerify = await fetch('http://localhost:4000/member/verifyPayment', {
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
                    // Save membership details to the backend
                    const resSave = await fetch('http://localhost:4000/member/savePayment', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            passtype: formData.passtype,
                            activationdate: activationDate,
                            expiringdate: expiringDate, 
                            title: formData.title,
                            firstname: formData.firstName,
                            lastname: formData.lastName,
                            phonenumber: formData.phonenumber,
                            email: formData.email,
                            amount: membershipPrice, 
                            gst: getGstFirst().toFixed(2), 
                            totalamount: getTotalFirst().toFixed(2) ,
                            razorpayOrderId: response.razorpay_order_id,
                            razorpayPaymentId: response.razorpay_payment_id
                        })
                    });

                    const dataSave = await resSave.json();
                    if(dataSave.success) {
                        alert('Membership payment successful and saved!');
                    } else {
                        alert('Error saving membership details.');
                    }
                } else {
                    alert('Membership payment verification failed.');
                }
            }
        };

        const rzp = new window.Razorpay(options);
        console.log("hey bob")
        rzp.open();
        console.log("hey harry")
    }

    loadRazorpayScript();
};
// initiateAndPayMembership().catch(console.error);
// Usage example



  return (

    <>
      <Head>
        <title>Travel Booking</title>
      </Head>
      <div className="container mx-auto p-8 bg-black">
        <div >
          {/* Guest Details Section  onSubmit={initiateAndPayMembership} */}
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
          <div className="md:w-2/3 p-4">
  <div className="bg-gray-800 p-6 shadow rounded-lg mb-4">
    <h2 className="text-xl font-bold text-white mb-4">Guest Details</h2>

  
      {/* Title Field */}
      <div className="mb-4 md:mb-0 md:col-span-1">
  <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-300">
    Title
  </label>
  <select
    id="title"
    name="title"
    value={formData.title}
    onChange={handleChange}
    className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
    required
  >
    <option value="">Select...</option>
    <option value="Mr.">Mr.</option>
    <option value="Ms.">Ms.</option>
    <option value="Mrs.">Mrs.</option>
   
    {/* Add more options as needed */}
  </select>
</div>

      {/* First Name Field */}
      <div className="mb-4 md:mb-0 md:col-span-1">
        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-300">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          required
        />
      </div>

      {/* Last Name Field */}
      <div className="mb-4 md:mb-0 md:col-span-1">
        <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-300">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
          required
        />
      </div>
      {/* Email Field */}
      {/* Email Field */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Email Field */}
        <div className="flex-1">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="flex-1">
          <label htmlFor="phonenumber" className="block mb-2 text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            type="tel"
            id="phonenumber"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
            required
          />
        </div>
      </div>


                {/* Other input fields */}
                {/* ... */}
       
              </div>
           
          {/* Membership Cards Section */}
        {/* Membership Cards Section */}
            <div className="bg-gray-900 p-8">
              <h2 className="text-white text-3xl font-bold mb-4">THE HOSTELLER COMMUNE</h2>
              <div className="flex gap-4">
                <div className="w-full md:w-1/2">
                  <MembershipCard
                    plan="EXPLORER"
                    price="₹4999"
                    perks={[
                      'A travel package worth ₹4999.',
                      '₹4999 coins funded instantly.',
                      'Affiliate vouchers from top brands worth ₹3000+.',
                    ]}
                    bgClass="bg-gray-700"
                    lists={twentyItems}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <MembershipCard
                    plan="VOYAGER"
                    price="₹9999"
                    perks={[
                      'A travel package worth ₹9999.',
                      '₹9999 coins funded instantly.',
                      'Affiliate vouchers from top brands worth ₹5000+.',
                      'Exclusive access to premium events.',
                    ]}
                    bgClass="bg-gray-700"
                    lists={twentyItems}
                  />
                </div>
              </div>
            {/* ... (other sections) */}
          </div>

          {/* ... (other sections) */}
                  
      <AccordionItem title=" Membership Enrollment Policies" content="All guests must be at least 18 years of age to be able to check in at any of our hostels. ..." />
  <AccordionItem title="Terms & Conditions" content="Booking policies content goes here..." />
  <AccordionItem title="Cancellation Policies" content="Cancellation policies content goes here..." />
       {/* Room Options Section */}
            {/* ... */}
            {/* Add room option cards here */}
          </div>

          {/* Summary Section */}
               {/* Summary Section */}
               <div className="md:w-1/3 p-4">
  {/* Summary Section */}
  <div className="bg-gray-800 shadow rounded-lg p-6 text-white">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">SUMMARY</h2>
                <FontAwesomeIcon icon={faTrashAlt} />
                <button  className="text-yellow-300 hover:text-yellow-200"></button>
              </div>

              {/* New dropdown for pass type */}
              <div className="mt-4">
                <label htmlFor="passtype" className="block mb-2 text-sm font-medium text-gray-300">
                  Select Pass Type
                </label>
                <select
                  id="passtype"
                  name="passtype"
                  value={formData.passtype}
                  onChange={handleChange}
                  className="bg-gray-700 border border-gray-600 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                  required
                >
                  <option value="">Select...</option>
                  <option value="Trek Pass">Trek Pass</option>
                  <option value="Tour Pass">Tour Pass</option>
                </select>
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <span className="font-medium">BACKPACKER</span>
                  <span>₹{membershipPrice.toFixed(2)}</span>
                </div>
                <div className="text-sm">valid till: {expiringDate}</div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <span>Membership Charges</span>
                  <span>₹{membershipPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>G.S.T</span>
                  <span>₹{getGstFirst().toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">Total Price</span>
                  <span className="text-lg font-bold">₹{getTotalFirst().toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <input id="confirmation" type="checkbox" className="w-4 h-4 text-blue-600 rounded" required />
                  <label htmlFor="confirmation" className="ml-2 text-sm">
                    Yes, I confirm all the guests are above 18 years old.
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="policies" type="checkbox" className="w-4 h-4 text-blue-600 rounded" required />
                  <label htmlFor="policies" className="ml-2 text-sm">
                    I acknowledge and accept all the Membership Enrollment Policies, Terms & Conditions, and Cancellation Policies.
                  </label>
                </div>
              </div>

              <button className="w-full bg-yellow-500 text-white p-3 rounded-lg font-semibold hover:bg-yellow-600" type='submit' >
                Unlock Membership
              </button>
            </div>
          
            <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white mt-4">
    <h2 className="text-lg font-semibold mb-4 border-b border-gray-600 pb-2">
      WHY BACKPACKERS UNITED
    </h2>
    <ul>
      <li className="mb-2">
        <span className="block font-medium">Curated Travel Excellence:
</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium">Global Community Connection:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium">Affordable Luxury Adventures:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium">Tailored for Your Wanderlust:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium"> No Third-Party Services, No Outsourcing:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium"> Safety and Security Assurance:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium"> Exclusive Traveler Benefits:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium">Global Responsibility:</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium">Ready to Begin Your Adventure?
</span>
      </li>
      <li className="mb-2">
        <span className="block font-medium">Backpackers United invites you to step into a world where every journey is a story waiting to be told. Trust us to turn your travel dreams into reality – because your adventure begins with Backpackers United.


</span>
      </li>
      
      Discover. Explore. Experience.


    </ul>
  </div>
          </div>
          </form>
            {/* SignUpSection */}
  

        </div>
      </div>
    </>
  );
}

export default page