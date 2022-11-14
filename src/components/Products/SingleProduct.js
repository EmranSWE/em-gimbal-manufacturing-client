import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {_id,name,image,description,minimumOrder,availabeOrder,price}=product;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-52" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>Minimum Order: {minimumOrder}</p>
                    <p>Available Order: {availabeOrder}</p>
                    <p>price: {price}</p>
                    <div className="card-actions">
                    <Link to={`/products/${_id}`}><button className='btn btn-success'>Buy Now!</button></Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;