import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { AiFillStar } from 'react-icons/ai'
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../shared/Loading';
const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}
const MyReview = () => {
    const [user, loading] = useAuthState(auth);
    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState(0);

    if (loading) {
        return <Loading></Loading>
    }
    const handleClick = value => {
        setCurrentValue(value)
    };

    const handleReview = event => {
        event.preventDefault();
        const feedback = {
            image:user?.photoURL,
            name: event.target.name.value,
            star: currentValue,
            feedbackMessage: event.target.feedbackMessage.value
        }

        //send to your database
        fetch('https://em-gimbal-manufacturing-aksbb.ondigitalocean.app/feedback', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(feedback)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('Thank You For your feedback');

                }
                else {
                    toast.error("Failed to add your Feedback")
                }
            })

    }

    return (
        <div className='text-center'>
            <form onSubmit={handleReview}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center">
                            
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-center bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' value={user.displayName} disabled className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Give Star</span>
                                    </label>
                                    <div className='flex'>
                                        {
                                            stars.map((_, index) => {
                                                return (
                                                    <AiFillStar key={index}
                                                        size={24}
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer"
                                                        }}
                                                        color={(currentValue) > index ? colors.orange : colors.gray}
                                                        onClick={() => handleClick(index + 1)}

                                                    />
                                                )
                                            })
                                        }
                                    </div>

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your feedback</span>
                                    </label>
                                    <input type="text" name="feedbackMessage" placeholder="Your Feedback Here" className="input input-bordered input-lg w-full max-w-xs" />


                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyReview;