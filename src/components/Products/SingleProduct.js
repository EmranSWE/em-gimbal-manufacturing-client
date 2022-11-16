import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id,name,image,description,minimumOrder, availableOrder,price}=product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0,100)}</p>
                    <h1 className='text-xl'>Minimum Order: {minimumOrder} Pcs</h1>
                    <h1 className='text-xl'>Available Order: {availableOrder} Pcs</h1>
                    <h1 className='text-xl '>price: <span className='font-bold'>{price}$</span></h1>
                    <div className="card-actions">
                    <Link to={`/products/${_id}`}><button className='btn btn-success'>Buy Now!</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;