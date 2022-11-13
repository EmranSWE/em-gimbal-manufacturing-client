import React from 'react';

const Contacts = () => {
    return (
        <div>
            <div className="hero min-h-screen fullGimbal">
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">About our<br /> flagship gimbal</h1>
                        <p className="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button className="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    {/* <img src={bluetooth} className="max-w-full rounded " alt='integrated bluetooth' /> */}

                    <div>
                        <h1 className="text-5xl font-bold my-3">CALL Us or Fill the
                            <br /> FORM</h1>
                       <div className='flex'>
                         <div>
                                <h1>Call:</h1>
                         </div>
                         <div>
                            <h1 className='text-2xl font-bold'>123-142-981</h1>
                            <p>Don't hesitate to contact us</p>
                         </div>
                       </div>
                       <div className='flex my-3'>
                         <div>
                                <h1>Call:</h1>
                         </div>
                         <div>
                            <h1 className='text-2xl font-bold'>Working TIme</h1>
                            <p>Mon-Fri: 9:00 - 18:00 / Closed on weekends</p>
                         </div>
                       </div>
                    </div>
                    {/*  */}
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className='flex'>
                            <div className="form-control mr-3">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Company</span>
                                </label>
                                <input type="text" placeholder="Company" className="input input-bordered" />
                            </div>
                            </div>
                           <div className='flex'>
                           <div className="form-control mr-3">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="phone" className="input input-bordered" />
                            </div>
                           </div>
                            
                            <div>
                            <textarea className="textarea border-2 border-accent w-full" placeholder="How can we help you" type='text' ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btnSecondary border-0">Submit</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div> 

        <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    {/* <img src={bluetooth} className="max-w-full rounded " alt='integrated bluetooth' /> */}

                    <div>
                        <h1 className="text-5xl font-bold my-3">Office Contact
                           </h1>
                           <p className='my-2'>The manufacturer offers extensive technical support, with a team of food scientists that manage your projects from innovation through development, commercialization, and then onto processing and packaging.</p>
                       <div className='flex'>
                         <div>
                                <h1>Call:</h1>
                         </div>
                         <div>
                            <h1 className='text-2xl font-bold'>350 Flatbush ave NEW YORK,</h1>
                            <p>NY 10018 USA</p>
                         </div>
                       </div>
                       <div className='flex'>
                         <div>
                                <h1>Call:</h1>
                         </div>
                         <div>
                            <h1 className='text-2xl font-bold'>123-121-422</h1>
                            <p>Mon-Fri: 9:00 - 18:00 / Closed on weekends</p>
                         </div>
                       </div>
                    </div>
                    {/*  */}
                    <div>
                       
                    </div>
            </div>
        </div> 
        </div >
    );
};

export default Contacts;