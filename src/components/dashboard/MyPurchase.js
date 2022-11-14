import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import auth from '../../firebase.init';

const MyPurchase = () => {
    const [purchase, setPurchase] = useState([]);
    const [user] = useAuthState(auth);
    const navigate =useNavigate();
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/purchase?user=${user.email}`,{
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
    }, [user])
    return (
        <div>
            <h2>My purchase :{purchase.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Price</th>
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