import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id,name,image,description,minimumOrder, availableOrder,price}=product;
    return (
        <div>
            <div className="transform card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body  ">
                    <h2 className="card-title">{name.slice(0,50)}</h2>
                    <p>{description.slice(0,100)}</p>
                    <h1 className=''>Minimum Order: <span className='font-bold text-xl'>{minimumOrder}</span>Pcs</h1>
                    <h1>Available Order: <span className='font-bold text-xl'>{availableOrder}</span>Pcs</h1>
                    <h1 className='text-xl'>Price: <span className='font-bold'>{price}$</span></h1>
                    <div className="mx-auto  ">
                    <Link to={`/products/${_id}`}><button className='btn btn-success text-white font-bold px-12'>Buy Now!</button></Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;