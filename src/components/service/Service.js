import React from 'react';
import service1 from '../../Assets/service1.jpg';
import service2 from '../../Assets/service2.jpg';
import service3 from '../../Assets/service3.jpg';
import service4 from '../../Assets/service4.jpg';
import service5 from '../../Assets/service5.jpg';

const Service = () => {
    return (
        <div>
            <div className="hero min-h-screen fullLastGimbal">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">The whole gimbal is <br /> splashproof</h1>
                        <p className="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button className="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
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
                    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/Q8mpxPkutT0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/VxYDRfriW9I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
                </div>
            </div>
            <div className='text-center my-3 rounded'>
                <button className="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
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
                        <div className='flex'>
                            <div>

                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>24</h1>
                                <p>Luxury Department stores</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>

                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>24</h1>
                                <p>Luxury Department stores</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>

                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>145</h1>
                                <p>Clothing retailers</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>

                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>61</h1>
                                <p>Fashion retailer</p>
                            </div>
                        </div>
                        <div className='flex'>
                            <div>

                            </div>
                            <div >
                                <h1 className='text-5xl font-bold'>249</h1>
                                <p>Brand names labels</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
        </div>
    );
};

export default Service;