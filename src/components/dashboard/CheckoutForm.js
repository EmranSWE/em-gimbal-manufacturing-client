import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({purchase}) => {
    const stripe = useStripe();
    const elements=useElements();
    const [success,setSuccess]=useState('');
    const [processing,setProcessing]=useState(false);
    const [transactionId,setTransactionId]=useState('');
    const [cardError,setCardError]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    const {_id,price,userName,userEmail}=purchase;
    useEffect(()=>{
        fetch('https://infinite-waters-78594.herokuapp.com/create-payment-intent',{
            method:"POST",
            headers:{
                'content-type':"application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data =>{
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }
        })
    },[price])

    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
          }
          // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
        setSuccess('')
        setCardError(error?.message || '');
        setProcessing(true)
    //  Confirm card payment
    const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: userName,
              email:userEmail,
            },
          },
        },
      );
      if(intentError){
        setCardError(intentError?.message);
        setProcessing(false)
      }
      else{
        setCardError('');
        
        setTransactionId(paymentIntent.id)
        setSuccess('Congrats! Your payment is confirmed')
        // store payment
        const payment ={
            product:_id,
            transactionId:paymentIntent.id,
            userName:userName,
            userEmail:userEmail,
            price:price
        }
        fetch(`https://infinite-waters-78594.herokuapp.com/purchase/${_id}`,{
            method:"PATCH",
            headers:{
                'content-type':"application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(payment)

        }).then(res=>res.json())
        .then(data => {
            setProcessing(false)
        })
        
      }
    };
    
    return (
       <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-accent text-white my-5' type="submit" disabled={!stripe  }>
          Pay
        </button>
      </form>
      {
        cardError && <p className='text-red-400'>{cardError}</p>
      }
      {
        success && 
        <div>
            <p className='text-green-500'>{success}</p> 
            <p>Your transaction Id: <span className='text-orange-500 font-bold'>{transactionId}</span></p>
        
        </div>
      }
       </>
    );
};

export default CheckoutForm;