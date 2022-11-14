import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import SingleProduct from './SingleProduct';

const Products = () => {
    const {data:products,isLoading}=useQuery({
        queryKey: ['product'],
        queryFn: () =>
          fetch('http://localhost:5000/products').then(res =>
            res.json()
          )
      });
      if(isLoading){
        return <Loading></Loading>
      }
    return (
        <div>
            <div className='hero'>
            <div className='grid grid-cols-3 gap-6'>
                {
                    products.map(product => <SingleProduct key={product._id}
                    product={product} ></SingleProduct>)
                }
            </div>
            </div> 
           
        </div>
    );
};

export default Products;