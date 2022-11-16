import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [purchase, setPurchase] = useState([]);
    const [user] = useAuthState(auth);
    const navigate =useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`https://infinite-waters-78594.herokuapp.com/purchase?user=${user.email}`,{
                 method:'GET',
                 headers:{
                    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
                 }
            })
                .then(res => {
                    if(res.stats ===401 || res.status === 403){
                        navigate('/');
                        signOut(auth);
                        localStorage.removeItem('accessToken')

                    }
                    return res.json()
                })
                .then(data => {
                    setPurchase(data)})
        }
    }, [user,navigate])
    return (
        <div>
            <h2>My purchase :{purchase.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        purchase.map((p,index) => 
                            <tr>
                            <th>{index+1}</th>
                            <td>{p.userName}</td>
                            <td>{p.productName}</td>
                            <td>{p.userEmail}</td>
                            <td>{p.price}</td>
                            <td>{(p.price && !p.paid) && <Link to={`/dashboard/payment/${p._id}`}><button className='btn btn-primary btn-xs'>Pay</button></Link> }
                            {(p.price && p.paid) && <>
                                
                                <p><span className='text-primary font-bold text-green-500'>Paid</span></p>
                                <p>Transaction Id: <span className='text-green-500'>{p.transactionId}</span> </p></> }
                            </td>
                        </tr>
                        )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPurchase;