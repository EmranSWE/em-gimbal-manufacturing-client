import React from 'react';
import { Link } from 'react-router-dom';
import  gimbal  from '../../Assets/home2.jpg'
const Home2 = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center">
                <img src={ gimbal } class="max-w-full  " alt=' gimbal '/>

                    <div>
                        <h1 class="text-5xl font-bold text-5xl">Manufacturer
                            <br /> 3-Axis Gimbal</h1>
                        <p class="py-6">With 3-Axis there is more flexibility in the angles you shoot. 320° Pan/Tilt rotation lets you get the desired angle with smooth footage.</p>
                        <button class="btn btnSecondary border-0"><Link to='/about'>Read More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home2;