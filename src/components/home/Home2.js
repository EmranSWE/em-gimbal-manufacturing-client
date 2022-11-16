import React from 'react';
import { Link } from 'react-router-dom';
import  gimbal  from '../../Assets/home2.jpg';
import 'animate.css'
const Home2 = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center">
                <img src={ gimbal } className="max-w-full  " alt=' gimbal '/>

                    <div>
                        <h1 className="text-5xl font-bold  ">Manufacturer
                            <br /> 3-Axis Gimbal</h1>
                        <p className="py-6">With 3-Axis there is more flexibility in the angles you shoot. 320° Pan/Tilt rotation lets you get the desired angle with smooth footage.</p>
                        <button className="btn btnSecondary border-0 "><Link to='/about'>Read More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home2;