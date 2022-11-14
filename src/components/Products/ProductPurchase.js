import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import Loading from '../shared/Loading';

const ProductPurchase = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    // const { data: products ,isLoading} = useQuery('products', () => fetch(`http://localhost:5000/products/${id}`).then(res => res.json()));
    // console.log(products)

    // if(isLoading){
    //     <Loading></Loading>
    // }

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [user, loading, error] = useAuthState(auth);
    const { _id, name, image, description, minimumOrder, availabeOrder, price } = products;

    const handleSubmit = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
       const totalPrice=quantity*price;
   
        const purchase = {
            productId: _id,
            productName: name,
            productImage: image,
            availableOrder: availabeOrder,
            price: totalPrice,
            userName: user?.displayName,
            userEmail: user?.email,
            phone: phone,
            address:address
        }

        fetch('http://localhost:5000/purchase', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Order Purchase");
                    navigate('/shop')
                }
            })
    }
    return (
        <div  >
            <h1 className='text-5xl text-center text-purple-400'>Please Purchase Now|</h1>
            <div class="hero">
                <div class="hero-content grid grid-cols-2">
                    <div class=" text-center lg:text-left">
                       <img src={image} className='w-52'   alt="" />
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div class="card-body">
                           <form onSubmit={handleSubmit}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Name</span>
                                </label>
                                <input type="text"  value={user?.displayName} disabled placeholder="name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Email</span>
                                </label>
                                <input type="email"   value={user?.email} disabled placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Address</span>
                                </label>
                                <input type="text" name='address' placeholder="address" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Your Phone</span>
                                </label>
                                <input type="phone" name='phone' placeholder="Your phone number" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Product Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Product Quantity" class="input input-bordered" />
                            </div>
                            {/* <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" class="input input-bordered" />
                            </div> */}
                           
                            <div class="form-control mt-6">
                                <input type='submit' value='submit' class="btn btn-primary"/>
                            </div>

                            </form>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchase;