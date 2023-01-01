import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import DeleteConfirmedModal from './DeleteConfirmedModal';
import ManageSingleProducts from './ManageSingleProducts';

const ManageProducts = () => {
    const [deletingProduct,setDeletingProduct]=useState(null)
    const {data:products,isLoading,refetch}=useQuery('products',()=>fetch(`https://em-gimbal-manufacturing-aksbb.ondigitalocean.app/products`,{
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>My purchase :{products.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>avatar</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Available</th>
                            <th>Order</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                      {products.map((product,index) =><ManageSingleProducts key={product._id} product={product} index={index}
                      refetch={refetch}
                      setDeletingProduct={setDeletingProduct}></ManageSingleProducts> )
                      }
                    </tbody>
                </table>
            </div>
                      {
                        deletingProduct && <DeleteConfirmedModal deletingProduct={deletingProduct} refetch={refetch} setDeletingProduct={setDeletingProduct}></DeleteConfirmedModal>
                      }
        </div>
    );
};

export default ManageProducts;