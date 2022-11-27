import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import SingleProductPayment from './SingleProductPayment';

const AllProducts = () => {
   
    const {data:purchase,isLoading,refetch}=useQuery('purchase',()=>fetch(`https://infinite-waters-78594.herokuapp.com/payments`,{
        method:"GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }}).then(res=>{
            if (res.stats === 401 || res.status === 403) {
                localStorage.removeItem('accessToken')
                }
                return res.json()}
                ));

                if(isLoading){
                    return <Loading></Loading>
                }

    return (
        <div>
        <h2>My purchase :{purchase.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchase.map((payment, index) =>
                                <SingleProductPayment key={index} index={index} payment={payment}  refetch={refetch}></SingleProductPayment>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;