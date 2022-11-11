import React from 'react';
import { Link } from 'react-router-dom';
import bluetooth from '../../Assets/integrated bluetooth.jpg'
const HomePage3 = () => {
    return (
        <div>
            <h1 className='text-5xl text-center font-bold my-4'>Advanced <br />Stabilization
            </h1>
            <div className='my-6 grid justify-items-center '>
                <p className='text-center text-xl'>A 3-axis stabilization system completely integrated with the camera cancels out your movements </p><p className='text-center text-xl'>in three directions so it stays still even if your hands shake or wobble. This is the first time this technology is available in a camera you can hold.</p>
            </div>
            <div className='hero'>
                <div className="grid lg:grid-cols-2 gap-4 justify-items-center">
                    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/Q8mpxPkutT0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div><iframe width="560" height="315" src="https://www.youtube.com/embed/VxYDRfriW9I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </div>
            <div className='text-center my-5'> <button class="btn btnSecondary border-0  my-3 ">Buy Now!</button></div>


            {/*  */}
            <div class="hero min-h-screen fullGimbal">
                <div class="hero-overlay bg-opacity-80"></div>
                <div class="hero-content  text-neutral-content">
                    <div class="max-w-lg">
                        <h1 class="mb-5 text-4xl font-bold">The whole gimbal is <br /> splashproof</h1>
                        <p class="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button class="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
                    </div>
                </div>
            </div>

            {/*  */}

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    <img src={bluetooth} class="max-w-full rounded " alt='integrated bluetooth'/>

                    <div>
                        <h1 class="text-5xl font-bold text-5xl">Integrated
                            <br /> Bluetooth</h1>
                        <p class="py-6">Easily connect to one of the compatible YI action cameras using the integrated Bluetooth Low Energy (BLE) 4.0, just turn on bluetooth on your camera, press the gimbal's shutter button and you're ready to go.</p>
                        <button class="btn btnSecondary border-0"><Link to='/about'>Read More</Link></button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomePage3;