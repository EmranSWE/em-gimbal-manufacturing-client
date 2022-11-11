import React from 'react';
import 'animate.css';
import Home2 from './Home2';
import HomePage3 from './HomePage3';
import HomeLastSection from './HomeLastSection';
const Home = () => {
    return (
        <div>
            <div class="hero min-h-screen homeBg" > 
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content  text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-6xl font-bold animate__animated  animate__slower animate__repeat-1 animate__zoomInRight">EM Action <br /> Gimbal</h1>
                        <p class="mb-5 text-3xl  animate__animated  animate__slower animate__repeat-3 animate__headShake">All of the action, non of the shakes</p>
                        <p className='text-2xl'>
                            5 Modes | Bluetooth Control |
                        </p>
                        <p className='text-2xl'>
                        6-8 Hours Battery | 3 = Axis
                        </p>
                        
                        <button class="btn btnSecondary  my-3">Buy Now!</button>
                    </div>
                </div>
            </div>
            <Home2></Home2>
            <HomePage3></HomePage3>
            <HomeLastSection></HomeLastSection>
        </div>
    );
};

export default Home;