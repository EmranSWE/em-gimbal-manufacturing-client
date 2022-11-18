import React from 'react';
import 'animate.css';
import Home2 from './Home2';
import HomePage3 from './HomePage3';
import HomeLastSection from './HomeLastSection';
import Products from '../Products/Products';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            <div className='hero min-h-screen homeBg bg-opacity-60'>
            <div className="hero-content hero-overlay bg-opacity-60">
                <div className='card card-body'>
                <div className="grid  grid-cols-1 my-36 text-white ">
                       <div>
                        <h1 className="mb-5 animate__backInUp animate__animated animate__repeat-2 text-6xl font-bold ">EM Action <br /> Gimbal</h1>
                        <p className="mb-5 text-xl">All of the action, non of the shakes</p>
                        <p className='text-2xl'>
                            5 Modes | Bluetooth Control |
                        </p>
                        <p className='text-2xl'>
                        6-8 Hours Battery | 3 = Axis
                        </p>
                        <button className="btn btnSecondary border-0 my-3"> <Link to='/shop'>Buy Now</Link></button>
                       </div>
                    </div>
                </div>
            </div>
            </div>
           
            
            {/* Homepage section 2 */}
            <Home2></Home2>
            {/* Product Section */}
                <h1 className='text-5xl text-center text-secondary font-bold animate__animated  animate__slower animate__backInUp animate__repeat-2'>Our Products</h1>
            <Products></Products>
          
            <HomePage3></HomePage3>
            <HomeLastSection></HomeLastSection>
        </div>
    );
};

export default Home;