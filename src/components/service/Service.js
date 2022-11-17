import React from 'react';
import { Link } from 'react-router-dom';
import service1 from '../../Assets/service1.jpg';
import service2 from '../../Assets/service2.jpg';
import service3 from '../../Assets/service3.jpg';
import service4 from '../../Assets/service4.jpg';
import service5 from '../../Assets/service5.jpg';
import { AiFillPhone} from 'react-icons/ai';
import { BiMap} from 'react-icons/bi';

const Service = () => {
    return (
        <div>
            <div className="hero min-h-screen fullLastGimbal">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">The whole gimbal is <br /> splashproof</h1>
                        <p className="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button className="btn btnSecondary  my-3"> <Link to='/shop'>Buy Now</Link></button>
                    </div>
                </div>
            </div>
            {/*  */}

            <h1 className='text-5xl text-center font-bold my-4'>Advanced <br />Stabilization
            </h1>
            <div className='my-6 grid justify-items-center '>
                <p className='text-center text-xl'>A 3-axis stabilization system completely integrated with the camera cancels out your movements </p><p className='text-center text-xl'>in three directions so it stays still even if your hands shake or wobble. This is the first time this technology is available in a camera you can hold.</p>
            </div>
            <div className='hero'>
                <div className="grid lg:grid-cols-2 gap-4 justify-items-center">
                    <div><iframe width="360" height="315" src="https://www.youtube.com/embed/Q8mpxPkutT0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    <div><iframe width="360" height="315" src="https://www.youtube.com/embed/VxYDRfriW9I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                </div>
            </div>
            <div className='text-center my-3 rounded'>
                <button className="btn btnSecondary border-0 my-3"> <Link to='/about'>Learn More</Link></button>
            </div>

            <div className='hero'>
                <div className='hero-content'>
                    <div className='grid lg:grid-cols-5 gap-5  sm:grid-cols-2'>
                        <img className='border-2' src={service1} alt="" />
                        <img className='border-2' src={service2} alt="" />
                        <img className='border-2' src={service3} alt="" />
                        <img className='border-2' src={service4} alt="" />
                        <img className='border-2' src={service5} alt="" />
                    </div>
                </div>
            </div>
            {/*  */}

            <div className='hero my-6'>
                <div className='hero-content'>
                    <div className='grid lg:grid-cols-5 gap-5  sm:grid-cols-2'>
                        <div className='flex items-center'>
                            <div>
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </div>
                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>24</h1>
                                <p>Luxury Our Online Stores</p>
                            </div>
                        </div>
                       
                        <div className='flex items-center'>
                            <div>
                                <div className="stat-figure text-secondary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                </div>
                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>145</h1>
                                <p>Gimbal retailers</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>6100</h1>
                                <p>Our premium client</p>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <div>
                            <div className="stat-figure text-secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                            </div>
                            <div className="stat-title">New Users</div>
                            <div className="stat-value">4,200</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                            </div>  
                        </div>
                        <div className='flex items-center'>
                            <div>
                                <div className="stat-figure text-primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                </div>
                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>500000</h1>
                                <p>Our regular user</p>
                            </div>
                        </div>
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
        </div>
    );
};

export default Service;