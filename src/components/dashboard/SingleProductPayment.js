import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProductPayment = ({index,payment,refetch}) => {
    
    const {price,product,shipment, userEmail,userName}=payment;
    const makeShipment =()=>{
    fetch(`http://localhost:5000/purchase/${product}`,{
        method:"PUT",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
        if(res.status === 403){
            toast.error("Fail to Make an Admin")
        }
        return  res.json()})
    .then(data =>
        {
            if(data.modifiedCount > 0){
                refetch();
                toast.success("Successfully Shipment The product");
                
            }     
    })
}
    return (
        <tr>
        <th>{index + 1}</th>
        <td>{userName}</td>
        <td>{userEmail}</td>
        <td>{product}</td>
        <td>{price}</td>
        <td>{shipment !== true && <button onClick={makeShipment} className='btn btn-primary'>Make a Shipment</button>}
        {shipment === true && <> <h1 className='text-green-500'>Product Shipped</h1></>
        }
        </td>
    </tr>
    );
};

export default SingleProductPayment;