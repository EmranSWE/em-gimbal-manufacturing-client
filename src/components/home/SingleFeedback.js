import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}

const SingleFeedback = ({ feedback }) => {
    const { name, star, feedbackMessage, image } = feedback;
    const stars = Array(star).fill(0);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl transform border-x-4 border-indigo-500">
                <div className="avatar flex justify-center">
                    <div className="w-24 rounded-full">
                        <img src={image} />
                    </div>
                </div>
                <div className="card-body text-center ">
                    <h2 className='text-2xl'>{name}</h2>
                    <h2>{feedbackMessage}</h2>
                    <div className='flex justify-center'>
                        {
                            stars.map((_, index) => {
                                return (
                                    <AiFillStar key={index}
                                        size={24}
                                        style={{
                                            marginRight: 10,
                                            cursor: "pointer",
                                            color: "#FFBA5A"
                                        }}

                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SingleFeedback;