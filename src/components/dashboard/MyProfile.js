import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>My profile</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user?.photoURL}  className="rounded-xl"  alt='profile' />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{user?.displayName}</h2>
                    <h2 className="card-title">Email:{user?.email}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;