import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../Assets/about.jpeg'
const AboutUs = () => {
    return (
        <div>
            {/*  */}
            <div class="hero min-h-screen fullGimbal">
                <div class="hero-overlay bg-opacity-80"></div>
                <div class="hero-content  text-neutral-content">
                    <div class="max-w-lg">
                        <h1 class="mb-5 text-4xl font-bold">About our<br /> flagship gimbal</h1>
                        <p class="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button class="btn btnSecondary border-0 p-5 my-3">Buy Now!</button>
                    </div>
                </div>
            </div>
            {/*  */}

            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/z6l6X3mKTak" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                    <div>
                        <h1 class="text-5xl font-bold text-5xl">Welcome
                            <br /> </h1>
                        <p class="py-6">Em gimbal is a global business that works closely with our members to drive industry transformation in preferred fibers, integrity and standards and responsible supply networks. We identify and share best practices regarding farming, materials, processing, traceability and product end-of-life in order to reduce the textile industrys impact on the worlds water, soil and air, and the human population.</p>

                    </div>
                </div>
            </div>
            {/*  */}
            <ul class="steps steps-vertical lg:steps-horizontal my-5 ml-20">
                <li class="step step-primary">1985- Beginning of Journey</li>
                <li class="step step-primary">1987- Introduction of Revolutionary Technology</li>
                <li class="step step-primary">2000- New Factory Production</li>
                <li class="step step-primary">2007- Agreement signed with PPFGH</li>
                <li class="step step-primary">2008- GoldenTex Award</li>
                <li class="step step-primary">2012- Collaboration with OOKLPL</li>
                <li class="step step-primary"></li>
            </ul>

            <h1 className='text-center text-5xl my-5 font-bold'>Meet the Dream Team</h1>
            <p className='text-center text-xl my-3'>EM gimbal inspires and equips people to accelerate sustainable practices in the textile value chain. <br />
                We focus on minimizing the harmful impacts of the global textile industry and maximizing its positive effects.</p>
            <div>
                <img className='w-3/4 mx-auto' src={about} alt="About page" />
            </div>

            {/*  */}
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    {/* <img src={bluetooth} class="max-w-full rounded " alt='integrated bluetooth' /> */}

                    <div>
                        <h1 class="text-5xl font-bold text-5xl">Office Contacts
                            <br /> Bluetooth</h1>
                        <p class="py-6">We envision a global textile industry that protects and restores the environment and enhances lives..</p>
                        <button class="btn btnSecondary border-0"><Link to='/about'>Read More</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;