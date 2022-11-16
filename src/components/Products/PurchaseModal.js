import React from 'react';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
const PurchaseModal = ({product,setProduct}) => {
    const [user, loading, error] = useAuthState(auth);
    const {_id,name,image,description,minimumOrder,availabeOrder,price}=product;
    const handleSubmit = event =>{
        event.preventDefault();
        const minimum=event.target.minimum.value;
        const phone=event.target.phone.value;
       
        
        const purchase={
            productId:_id,
            productName:name,
            image:image,
            minimumOrder:minimum,
            availableOrder:availabeOrder,
            price:price,
            userName:user.displayName,
            userEmail:user.email,
            phone:phone
        }

        fetch('http://localhost:5000/purchase',{
            method:"POST",
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(purchase)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                toast.success("Order Purchase")
            }
            setProduct(null)
        })
        
       
    }
    return (
        <div>
            <input type="checkbox" id="product-purchase" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box ">
                    <h2>Buy: {name}</h2>
                    <label htmlFor="product-purchase" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 justify-center p-6'>
                         <input placeholder={name} name='pName' type="text" className="input input-bordered w-full max-w-xs" />
                        <input value={user?.displayName || ''} disabled name='Name' type="text" className="input input-bordered w-full max-w-xs" />
                   
                    <input value={user?.email || ''} disabled name='email'  type="email" className="input input-bordered w-full max-w-xs" />
                    <input placeholder='Phone' name='phone'  type="phone" className="input input-bordered w-full max-w-xs" />
                    <input placeholder={minimumOrder} name='minimum' type="text" className="input input-bordered w-full max-w-xs" />
                    <input placeholder={availabeOrder} name='available' type="text" className="input input-bordered w-full max-w-xs" />
                    <label >Price</label>
                    <input placeholder={price} name='price' type="text" className="input input-bordered w-full max-w-xs" />
                    <input  type="submit" value='Submit' className="btn btn-secondary w-full max-w-xs" />
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default PurchaseModal;