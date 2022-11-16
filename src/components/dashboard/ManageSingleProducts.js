import React from 'react';

const ManageSingleProducts = ({ product, index,setDeletingProduct }) => {
    const { name, price, availableOrder
        , minimumOrder,image } = product;

       
        return (
        <tr>
            <th>{index + 1}</th>
            <th><div className="avatar">
                <div className="w-24 rounded-full">
                    <img src={image}  alt={name}/>
                </div>
            </div></th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{availableOrder}</td>
            <td>{minimumOrder}</td>
            <td>
            <label onClick={()=>setDeletingProduct(product)} htmlFor="confirmed-delete-doctor" className="btn btn-xs btn-accent"> Delete</label>
            </td>
        </tr>

    );
};

export default ManageSingleProducts;