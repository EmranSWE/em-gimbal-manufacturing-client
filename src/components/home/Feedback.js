import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading';
import FeedbackPagination from './FeedbackPagination';
import SingleFeedback from './SingleFeedback';

const Feedback = () => {
    const [currentPage,setCurrentPage]=useState(1);
    const [postsPerPage,setPostsPerPage]=useState(3);
    
    const { isLoading,  data:feedback} = useQuery({
        queryKey: ['feedback'],
        queryFn: () =>
          fetch('https://infinite-waters-78594.herokuapp.com/feedback',{
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
    const lastPostIndex= currentPage * postsPerPage;
    const firstPostIndex= lastPostIndex - postsPerPage;
    const currentPost= feedback?.slice(firstPostIndex,lastPostIndex);
    return (
        <div>
        <div className='hero'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
            {
                currentPost.map(feedback => <SingleFeedback key={feedback._id}
                    feedback={feedback} ></SingleFeedback>)
            }       
           <div className='lg:col-span-3 justify-items-center '>
           <FeedbackPagination currentPage={currentPage} totalPosts={feedback.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}></FeedbackPagination>
           </div>
        </div>
        </div> 
       
    </div>
    );
};

export default Feedback;