import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import AllUsers from './AllUsers';

const Users = () => {
    const { isLoading,  data:users,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: () =>
          fetch('https://em-gimbal-server-side.onrender.com/users',{
            method:"GET",
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
          }).then(res =>
            res.json()
          )
      })
    if(isLoading){
        return <Loading></Loading>
    }
   
    return (
        <div>
            <h2>My purchase :{users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        users.map((user,index) => 
                            <AllUsers key={user._id} user={user} index={index} refetch={refetch}></AllUsers>
                        )
                       }
                       
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;