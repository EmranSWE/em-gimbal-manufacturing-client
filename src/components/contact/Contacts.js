import React from 'react';
import { AiFillPhone} from 'react-icons/ai';
import { BiMap} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import gimbal from '../../Assets/gimbal-main.jpg';

const Contacts = () => {
    return (
        <div>
            <div className="hero min-h-screen fullGimbal">
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">About our<br /> flagship gimbal</h1>
                        <p className="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button className="btn btnSecondary  my-3"> <Link to='/shop'>Buy Now</Link></button>
                    </div>
                </div>
            </div>
            {/*  */}
      
            <div className="my-4">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-5">
                    <div>
                        <h1 className="text-4xl font-bold my-3">Call Us or Fill the <br /> Form</h1>
                        <div className='flex items-center'>
                            <div>
                              <h1 className='text-3xl'><AiFillPhone></AiFillPhone></h1>  
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>123-142-981</h1>
                                <p>Don't hesitate to contact us</p>
                            </div>
                        </div>
                        <div className='flex my-3 items-center'>
                            <div>
                                <h1 className='text-3xl'><BiMap></BiMap></h1> 
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>Working TIme</h1>
                                <p>Mon-Fri: 9:00 - 18:00 / Closed on weekends</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                        <div className="p-3 border-l-4 border-indigo-500">
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:p-2 gap-3'>
                                <div className="form-control ">
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
                            <div className='grid lg:grid-cols-2 sm:grid-cols-1 sm:p-2 gap-3'>
                                <div className="form-control ">
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

                            <div className='grid grid-cols-1 lg:p-2 sm:mt-3'>
                                <textarea className="textarea border-2 border-accent w-full" placeholder="How can we help you" type='text' ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btnSecondary border-0">Submit</button>
                            </div>
                    </div>
                </div>
            </div>

             {/*  */}
             <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    <div>
                        <h1 className="text-5xl font-bold">Office Contacts
                            <br /> Bluetooth</h1>
                        <p className="py-6">We envision a global textile industry that protects and restores the environment and enhances lives..</p>
                        <div className='flex items-center'>
                            <div>
                                <h1 className='text-2xl'><BiMap></BiMap></h1>
                            </div>
                            <div>
                                <h1>350 Flatbush ave New York,<br /> NY 10018 USA.</h1>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div>
                                <h1 className='text-2xl'><AiFillPhone></AiFillPhone></h1>
                            </div>
                            <div>
                                <h1>+8801828335544<br /> +8801838235533</h1>
                            </div>

                        </div>

                    </div>
                    <div>
                        <img src={gimbal} className='w-56' alt="gimbal" />
                    </div>
                </div>
            </div>
       
        </div >
    );
};

export default Contacts;