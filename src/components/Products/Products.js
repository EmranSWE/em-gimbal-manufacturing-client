import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import ProductPagination from './ProductPagination';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(6);
    
    const {data:products,isLoading}=useQuery({
        queryKey: ['product'],
        queryFn: () =>
          fetch('http://localhost:5000/products',{
              headers:{
                  authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
          }).then(res =>
            res.json()
          )
      });
      const lastPostIndex= currentPage * postsPerPage;
      const firstPostIndex= lastPostIndex - postsPerPage;
    

      if(isLoading){
        return <Loading></Loading>
      }

      const currentPost= products?.slice(firstPostIndex,lastPostIndex);
    return (
        <div>
            <div className='hero'>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    currentPost.map(product => <SingleProduct key={product._id}
                    product={product} ></SingleProduct>)
                }       
               <div className='lg:col-span-3 justify-items-center '>
               <ProductPagination currentPage={currentPage} totalPosts={products.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}></ProductPagination>
               </div>
            </div>
            </div> 
           
        </div>
    );
};

export default Products;