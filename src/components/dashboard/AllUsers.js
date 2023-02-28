import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({user,index,refetch}) => {
const {email,role}=user;
const makeAdmin =()=>{
    fetch(`https://em-gimbal-server-side.onrender.com/users/admin/${email}`,{
        method:"PUT",
        headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        }
    })
    .then(res => {
        if(res.status === 403){
            toast.error("Fail to Make an Admin")
        }
        return  res.json()})
    .then(data =>{
        if(data.modifiedCount > 0){
            refetch();
            toast.success("Successfully Made an Admin");
        }
       
    })
}
    return (
        <tr>
        <th>{index+1}</th>
        <th>{user.email}</th>
        <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-primary'>Make An Admin</button>}</td>
        <td>X</td>
      </tr>
    );
};

export default AllUsers;