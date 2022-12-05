import { signOut } from 'firebase/auth';
import React, {  useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
import DeletePurchaseProduct from './DeletePurchaseProduct';
import SinglePurchasePage from './SinglePurchasePage';

const MyPurchase = () => {
    // const [purchase, setPurchase] = useState([]);
    const [deletingPurchase,setDeletingPurchase]=useState(null);
    const [user,loading] = useAuthState(auth);
    const navigate = useNavigate();
    
    
    const {data:purchase,isLoading,refetch}=useQuery('purchase',()=>fetch(`https://em-gimbal-server-side.onrender.com/purchase?user=${user.email}`,{
        method:"GET",
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }}).then(res=>{
            if (res.stats === 401 || res.status === 403) {
                navigate('/');
                signOut(auth);
                localStorage.removeItem('accessToken')
                }
                return res.json()}
                ));

                if(isLoading){
                    return <Loading></Loading>
                }
                if(loading){
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
                            <th>Product</th>
                            <th>Email</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchase.map((p, index) =>
                                <SinglePurchasePage key={index} index={index} p={p} setDeletingPurchase={setDeletingPurchase}></SinglePurchasePage>
                            )
                        }

                    </tbody>
                </table>
            </div>
            { deletingPurchase && <DeletePurchaseProduct deletingPurchase={deletingPurchase}  setDeletingPurchase={setDeletingPurchase} refetch={refetch}></DeletePurchaseProduct>
                      }
        </div>
    );
};

export default MyPurchase;