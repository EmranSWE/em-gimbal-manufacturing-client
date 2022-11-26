import React from 'react';
import { Link } from 'react-router-dom';

const SinglePurchasePage = ({ index, p, setDeletingPurchase }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{p.userName}</td>
            <td>{p.productName}</td>
            <td>{p.userEmail}</td>
            <td>{p.price}</td>
            <td>
                {(p.shipment) ? <>
                    <p><span className=' font-bold text-green-500'>Your Product Is delivery</span></p>
                    </>
                    : 
                    (p.price && !p.paid) ? <div>
                <Link to={`/dashboard/payment/${p._id}`}><button className='btn btn-primary btn-xs mr-3'>Pay</button></Link>
                   <label onClick={() => setDeletingPurchase(p._id)} htmlFor="confirmed-delete-purchase-product" className="btn btn-primary btn-xs"> Cancel</label>
                  </div>
                  :  <>
                    <p><span className=' font-bold text-green-500'>Paid</span></p>
                    <p>Transaction Id: <span className='text-green-500'>{p.transactionId}</span> </p>
                    </>} 
                    

               
            </td>
        </tr>
    );
};

export default SinglePurchasePage;