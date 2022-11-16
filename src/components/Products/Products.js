import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import SingleProduct from './SingleProduct';

const Products = () => {
    const {data:products,isLoading}=useQuery({
        queryKey: ['product'],
        queryFn: () =>
          fetch('https://infinite-waters-78594.herokuapp.com/products',{
              headers:{
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
          }).then(res =>
            res.json()
          )
      });
      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div>
            <div className='hero'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    products?.map(product => <SingleProduct key={product._id}
                    product={product} ></SingleProduct>)
                }
            </div>
            </div> 
           
        </div>
    );
};

export default Products;