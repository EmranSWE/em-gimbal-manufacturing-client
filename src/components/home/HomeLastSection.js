import React from 'react';
import { Link } from 'react-router-dom';
import lastGimbal from '../../Assets/lastGimblePic.jpg'
const HomeLastSection = () => {
    return (
        <div>
              {/*  */}
              <div class="hero min-h-screen fullLastGimbal">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content  text-neutral-content">
                    <div class="max-w-lg">
                        <h1 class="mb-5 text-4xl font-bold">The whole gimbal is <br /> splashproof</h1>
                        <p class="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button class="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='hero my-7'>
                <div className="hero-content grid grid-cols-4">
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