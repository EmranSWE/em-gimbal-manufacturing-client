import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const ProductPurchase = () => {
    const { id } = useParams();
    const navigate = useNavigate()

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [id])
    const [user, loading] = useAuthState(auth);
    const { _id, name, image,  availableOrder, price } = products;

    if(loading){
        return <Loading></Loading>
    };

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
            availableOrder: availableOrder,
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
        <div>
            <h1 className='text-5xl text-center text-purple-400'>Please Purchase Now|</h1>
            <div className="hero">
                <div className="hero-content grid grid-cols-2">
                    <div className=" text-center lg:text-left">
                       <img src={image} className='w-52'   alt="product" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                           <form onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text"  value={user?.displayName} disabled placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email"   value={user?.email} disabled placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Address:</span>
                                </label>
                                <input type="text" name='address' placeholder="address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Phone</span>
                                </label>
                                <input type="phone" name='phone' placeholder="Your phone number" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Quantity</span>
                                </label>
                                <input type="text" name='quantity' placeholder="Product Quantity" className="input input-bordered" />
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div> */}
                           
                            <div className="form-control mt-6">
                                <input type='submit' value='submit' className="btn btn-primary"/>
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