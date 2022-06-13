import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { useState } from "react";
import Router from 'next/router'
import {useFlutterwave,closePaymentModal} from 'flutterwave-react-v3'
import Top from '../components/Top'
import Head from "next/head";

export default function Order() {
  const router = useRouter();

  const {query: { item, price, }, } = router;

  const props = {item, price,};

  
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [phonenumber,setPhoneNumber] = useState('')
  const [address,setAddress] = useState('')

  const config = {
    public_key: 'FLWPUBK-5ce732bb653d94cd9b750e6f69524d35-X',
    tx_ref: Date.now(),
    amount: price,
    currency: 'UGX',
    payment_options: 'card,mobilemoneyuganda',
    customer: {
      email: 'owinoonline@gmail.com',
      phonenumber: '',
      name: lastname,
    },
    customizations: {
      title: item,
      description: 'Payment for items in cart',
      logo: 'https://cdn.filestackcontent.com/RpUFRZxYROiIZP8RffVA',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const orderItems  = async e =>{

    // FlutterwaveCheckout({
    //     public_key: "5ce732bb653d94cd9b750e6f69524d35-X",
    //     tx_ref: Date.now(),
    //     amount: price,
    //     currency: "UGX",
    //     payment_options: "card, mobilemoneyuganda",
    //     callback: function(payment) {
    //       // Send AJAX verification request to backend
    //       verifyTransactionOnBackend(payment.id);
    //     },
    //     onclose: function(incomplete) {
    //       if (incomplete || window.verified === false) {
    //         document.querySelector("#payment-failed").style.display = 'block';
    //       } else {
    //         document.querySelector("form").style.display = 'none';
    //         if (window.verified == true) {
    //           document.querySelector("#payment-success").style.display = 'block';
    //         } else {
    //           document.querySelector("#payment-pending").style.display = 'block';
    //         }
    //       }
    //     },
    //     meta: {
    //       consumer_id: 23,
    //       consumer_mac: "92a3-912ba-1192a",
    //     },
    //     customer: {
    //       email: "rose@unsinkableship.com",
    //       phone_number: phonenumber,
    //       name: lastname,
    //     },
    //     customizations: {
    //       title: "Owino Online",
    //       description: "Payment for Products",
    //       logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    //     },
    //   });
                  

        // const order ={
        //     prodItem:item,
        //     priceItem:price,
        //     //form data
        //     prodfname:firstname,
        //     prodlname:lastname,
        //     // prodphone:phonenumber,
        //     prodadd  :address,
        //     // prodtoke :,
        // }
        // //call to api


     
        



        // console.log("Stuff in the order from pre product page",order)
        console.log("Stuff I send to the api",orderItems)
        // console.log("Flutterwave details",handleFlutterPayment)


      }

      const onChange = e => {
        setErrorMessage(null)
        setInput({ ...input, [e.target.name]: e.target.value })
      }

    
   

  return (
    <>
    <Head>
      <title>{props.item}</title>
      <meta name="Order" content={props.item}/>
    </Head>
    <Top/>
      <Navbar />
      <div className="container p-12 mx-auto">
        <div className="flex flex-col w-full px-0 mx-auto md:flex-row">
          <div className="flex flex-col md:w-full">
          <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Item Name: <span className="mb-4 font-bold md:text-xl text-heading text-red-800">{props.item}</span>
            </h2>
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Item Price: <span className="text-red-800">UGX {props.price}</span>
            </h2>
            <h2 className="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form
              className="justify-center w-full mx-auto"
              method="post"
              action
            >
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      value={firstname}
                      onChange={e => setFirstName(e.target.value)}
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      name="Last Name"
                      value={lastname}
                      onChange={e => setLastName(e.target.value)}
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Phone Number
                    </label>
                    <input
                      name="Last Name"
                      value={phonenumber}
                      onChange={e => setPhoneNumber(e.target.value)}
                      type="text"
                      placeholder="Phone number"
                      className="w-full px-4 py-3 text-sm border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className="w-full px-4 py-3 text-xs border border-gray-300 rounded lg:text-sm focus:outline-none focus:ring-1 focus:ring-blue-600"
                      name="Address"
                      value={address}
                      onChange={e => setAddress(e.target.value)}
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <button
                type="button"
                onClick={(e)=>{
                    handleFlutterPayment({
                      callback: (response) => {
                         console.log(response);
                          closePaymentModal() // this will close the modal programmatically
                      },
                      onClose: () => {},
                    });
                  }}
                
                className="mt-8 border rounded py-2 px-6 bg-rose-500 hover:bg-rose-600 border-rose-500 hover:border-rose-600 focus:ring-4 focus:ring-opacity-50 focus:ring-rose-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Guula kati / Buy now
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
