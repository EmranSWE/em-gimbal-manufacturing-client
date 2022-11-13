import React from 'react';
import 'animate.css';
import Home2 from './Home2';
import HomePage3 from './HomePage3';
import HomeLastSection from './HomeLastSection';
import Products from '../Products/Products';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen homeBg" > 
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold animate__animated  animate__slower animate__repeat-1 animate__zoomInRight">EM Action <br /> Gimbal</h1>
                        <p className="mb-5 text-3xl  animate__animated  animate__slower animate__repeat-3 animate__headShake">All of the action, non of the shakes</p>
                        <p className='text-2xl'>
                            5 Modes | Bluetooth Control |
                        </p>
                        <p className='text-2xl'>
                        6-8 Hours Battery | 3 = Axis
                        </p>
                        
                        <button className="btn btnSecondary  my-3">Buy Now!</button>
                    </div>
                </div>
            </div>
            
            {/* Homepage section 2 */}
            <Home2></Home2>
            {/* Product Section */}
                <h1 className='text-5xl text-center text-secondary font-bold'>Our Products</h1>
            <Products></Products>
          
            <HomePage3></HomePage3>
            <HomeLastSection></HomeLastSection>
        </div>
    );
};

export default Home;