import React from 'react';
import { Link } from 'react-router-dom';
import lastGimbal from '../../Assets/lastGimblePic.jpg'
const HomeLastSection = () => {
    return (
        <div>
            <div className='hero min-h-screen fullLastGimbal bg-opacity-60'>
            <div className="hero-overlay bg-opacity-60">
                <div className='card card-body'>
                <div className="grid grid-cols-2 my-36 text-white sm:justify-items-center sm:p-10 sm:ml-auto">
                       <div>
                       <h1 className="mb-5 text-7xl font-bold">6-8 Hours <br /> Battery Life</h1>
                        <p className="mb-5 text-xl">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button className="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
                       </div>
                    </div>
                </div>
            </div>
            </div>
     

            {/*  */}

            <div className='hero my-7 animate__animated  animate__slower animate__backInUp'>
                <div className="hero-content grid lg:grid-cols-4 sm:grid-cols-2">
                    <div><img src={lastGimbal} alt="" /></div>
                    <div>
                        <h1 className='text-5xl text-center font-bold'>X1</h1>
                        <p className='text-center border-b-2 border-gray-200'>Sensor Size- 1/23</p>
                        <p className='text-center border-b-2 border-gray-200'>Still Resolution - 12Mb</p>
                        <p className='text-center border-b-2 border-gray-200'>Video Resolution - Up To 4K</p>
                        <div className='text-center '>
                            <button className='btn btnSecondary border-0 my-2'><Link>Learn More</Link></button>
                        </div>
                    </div>



                    <div>
                        <h1 className='text-5xl text-center font-bold'>X12</h1>
                        <p className='text-center border-b-2 border-gray-200'>Sensor Size- 4/3</p>
                        <p className='text-center border-b-2 border-gray-200'>Still Resolution - 16Mb</p>
                        <p className='text-center border-b-2 border-gray-200'>Video Resolution - Up To 4K</p>
                        <div className='text-center '>
                            <button className='btn btnSecondary border-0 my-2'><Link>Learn More</Link></button>
                        </div>
                    </div>

                    <div>
                        <h1 className='text-5xl text-bold text-center font-bold'>X25</h1>
                        <p className='text-center border-b-2 border-gray-200'>Sensor Size- 3/4</p>
                        <p className='text-center border-b-2 border-gray-200'>Still Resolution - 24Mb</p>
                        <p className='text-center border-b-2 border-gray-200'>Video Resolution - Up To 4K</p>
                        <div className='text-center '>
                            <button className='btn btnSecondary border-0 my-2'><Link>Learn More</Link></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='btnSecondary p-14'>
                <h1 className='text-center text-4xl text-white'><button className='btn btn-outline text-white p-5'><Link>Buy Now</Link></button></h1>
            </div>

        </div>
    );
};

export default HomeLastSection;