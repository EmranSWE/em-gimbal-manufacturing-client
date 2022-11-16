import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register,reset, formState: { errors }, handleSubmit } = useForm();

  
    
    const imageStorageKey= '04a15e088ece55785654a58ff0dfb648';
    const onSubmit = async data => {
        const image = data.image[0];
        const formData= new FormData();
        formData.append('image',image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method:'POST',
            body: formData 
        })
        .then(res => res.json())
        .then(result =>{
            if(result.success){
                const image = result.data.url;
                const products = {
                    name:data.name,
                    description:data.description,
                    image:image,
                    minimumOrder:data.minimumOrder,
                    availableOrder:data.availableQuantity,
                    price:data.price
                }
                //send to your database
                fetch('http://localhost:5000/products',{
                    method:"POST",
                    headers:{
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(products)
                })
                .then(res => res.json())
                .then(inserted =>{
                    if(inserted.insertedId){
                        toast.success('Product added successfully');
                        reset();
                    }
                    else{
                        toast.error("Failed to add the New Product")
                    }
                })
            }
        })
       
    };

  
    return (
       <div>
        <div className='hero'>
        <div className='border-l-4 border-indigo-500 '>
           
            <div className='p-6'>
            <h2 className='text-3xl text-accent'>Add a new Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input  {...register("name", {
                    required: {
                        value: true,
                        message: "Name is required"
                    }
                })} type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>

                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <input  {...register("description", {
                    required: {
                        value: true,
                        message: "Description is required"
                    }
                })} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>

                <label className="label">
                    <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input  {...register("minimumOrder", {
                    required: {
                        value: true,
                        message: "Minimum order quantity is required"
                    }
                })} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.minimumOrder?.type === 'required' && <span className="label-text-alt text-red-500">{errors.minimumOrder.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input  {...register("availableQuantity", {
                    required: {
                        value: true,
                        message: "Available  quantity is required"
                    }
                })} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.availableQuantity?.type === 'required' && <span className="label-text-alt text-red-500">{errors.availableQuantity.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input  {...register("price", {
                    required: {
                        value: true,
                        message: "price  quantity is required"
                    }
                })} type="text" placeholder="Description" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.price?.type === 'required' && <span className="label-text-alt text-red-500">{errors.price.message}</span>}
                </label>
                <label className="label">
                    <span className="label-text">Product Image</span>
                </label>
                <input  {...register("image", {
                    required: {
                        value: true,
                        message: "Image is required"
                    }
                })} type="file" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                </label>
                <input className='btn w-full max-w-xs ' type="submit" value="Add" />
            </form>
        </div>
        </div>
        </div>
       </div>
    );
};

export default AddProduct;