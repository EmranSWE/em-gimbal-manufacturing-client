import React from 'react';

const ProductPagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {
    let pages = [];
   
    for (let i = 1; i<=Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i)
    }
    return (
        <div className='py-3'>
            {
                pages.map((page,index)=>{
                    return <div class="btn-group ">
                    <button key={index} onClick={()=>setCurrentPage(page)} class={page === currentPage ? "btn btn-active": "btn"}>{page}</button>
                  </div>
                })
            }
        </div>
    );
};

export default ProductPagination;