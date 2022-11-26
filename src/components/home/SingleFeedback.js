import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
const colors = {
    orange: "#FFBA5A",
    gray: "#a9a9a9"
}

const SingleFeedback = ({feedback}) => {
    const {name,star,feedbackMessage}=feedback;
    // const [stars,setStars]=useState(star);
    const stars = Array(star).fill(0);

    return (
        <div>
        <div className=" card w-96 bg-base-100 shadow-xl transform">
          
            <div className="card-body  ">
                <h2 className="card-title">{name}</h2>
                <h2>{feedbackMessage}</h2>
                <div className='flex'>
                {
                                            stars.map((_, index) => {
                                                return (
                                                    <AiFillStar key={index}
                                                        size={24}
                                                        style={{
                                                            marginRight: 10,
                                                            cursor: "pointer",
                                                            color:"#FFBA5A"
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