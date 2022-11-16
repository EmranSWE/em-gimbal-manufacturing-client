import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import Loading from '../shared/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51M05zgFXEoII0xDNZIsXUD4aExT2gPuSHsMbldhAJxxzsC3vPKQx45W9cRSNqZmMEQLohaUWEhfUzYC8GoOLkcG700tqHnQxAd');
const Payment = () => {
    const { id } = useParams();
    const url = `https://infinite-waters-78594.herokuapp.com/purchase/${id}`
    const { data: purchase, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h1 className='text-2xl text-primary'>Hello,{purchase.userName}</h1>

                    <h2 className="card-title">Pay for {purchase.productName}</h2>
                    <p>Please pay for <span>${purchase.price}</span> </p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm purchase={purchase}/>
                    </Elements>


                </div>
            </div>
        </div>


    );
};

export default Payment;