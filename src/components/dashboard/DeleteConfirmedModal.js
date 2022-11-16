import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmedModal = ({deletingProduct,refetch,setDeletingProduct}) => {
    const {name,_id}=deletingProduct;

    const handleDelete = () =>{
        fetch(`http://localhost:5000/products/${_id}`,{
            method:"DELETE",
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                toast.success(`Product ${name} is deleted`);
                setDeletingProduct(null)
                refetch();
            }
        })
}
    return (
        <div>
            <input type="checkbox" id="confirmed-delete-doctor" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete? </h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <button className='btn btn-primary' onClick={()=>handleDelete()}>Delete</button>
                        <label htmlFor="confirmed-delete-doctor" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmedModal;