import React from 'react';
import { toast } from 'react-toastify';

const DeletePurchaseProduct = ({setDeletingPurchase,deletingPurchase,refetch}) => {
    const handleDelete = () =>{
        fetch(`https://em-gimbal-server-side.onrender.com/purchase/${deletingPurchase}`,{
            method:"DELETE",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success(`Your Checkout product  is deleted`);
                setDeletingPurchase(null);
                refetch();
            }
        })
}
    return (
        <div>
            <input type="checkbox" id="confirmed-delete-purchase-product" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete? </h3>
                    <p className="py-4">If you click delete, You will no longer to see the product. Think before delete , <span className=' font-bold text-green-500'> think this product is best for you!</span> I</p>
                    <div className="modal-action">
                        <button className='btn btn-primary' onClick={()=>handleDelete()}>Delete</button>
                        <label htmlFor="confirmed-delete-purchase-product" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeletePurchaseProduct;