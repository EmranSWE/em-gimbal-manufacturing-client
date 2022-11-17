import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../Assets/about.jpeg';
import gimbal from '../../Assets/gimbal-main.jpg';
import { AiFillPhone } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
const AboutUs = () => {
    return (
        <div>
            {/*  */}
            <div className="hero min-h-screen fullGimbal">
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content  text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-4xl font-bold">About our<br /> flagship gimbal</h1>
                        <p className="mb-5">The gimbal is with the design of splashproof, making shooting freely</p>
                        <button className="btn btnSecondary border-0 my-3"> <Link to='/shop'>Buy Now</Link></button>
                    </div>
                </div>
            </div>
            {/*  */}

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    <iframe width="360" height="315" src="https://www.youtube.com/embed/z6l6X3mKTak" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                    <div>
                        <h1 className=" font-bold text-5xl">Welcome
                            <br /> </h1>
                        <p className="py-6">Em gimbal is a global business that works closely with our members to drive industry transformation in preferred fibers, integrity and standards and responsible supply networks. ISO 9001:2008 certified manufacturer of gimbals. Gimbal with top cat grinder, grinder, horizontal grinder, impact gun and 360-degree gimbals are available. Applications include arms for assembly, torque, nut running, tool balancing, stud welder, screw driving and helicoil insertion. Counterbalancing, grinding and tapping services are available. Made in the USA.</p>

                    </div>
                </div>
            </div>
            {/*  */}
            <ul className="steps steps-vertical lg:steps-horizontal my-5 ml-20">
                <li className="step step-primary">1985- Beginning of Journey</li>
                <li className="step step-primary">1987- Introduction of Revolutionary Technology</li>
                <li className="step step-primary">2000- New Factory Production</li>
                <li className="step step-primary">2007- Agreement signed with PPFGH</li>
                <li className="step step-primary">2008- GoldenTex Award</li>
                <li className="step step-primary">2012- Collaboration with OOKLPL</li>
                <li className="step step-primary"></li>
            </ul>

            <h1 className='text-center text-5xl my-5 font-bold'>Meet the Dream Team</h1>
            <p className='text-center text-xl my-3'>EM gimbal inspires and equips people to accelerate sustainable practices in the textile value chain. <br />
                We focus on minimizing the harmful impacts of the global textile industry and maximizing its positive effects.</p>
            <div>
                <img className='w-3/4 mx-auto' src={about} alt="About page" />
            </div>

            {/*  */}
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content grid lg:grid-cols-2 sm:grid-cols-1 justify-items-center gap-8">
                    <div>
                        <h1 className="text-5xl font-bold">Office Contacts
                            <br /> Bluetooth</h1>
                        <p className="py-6">We envision a global textile industry that protects and restores the environment and enhances lives..</p>
                        <div className='flex items-center'>
                            <div>
                                <h1 className='text-2xl'><BiMap></BiMap></h1>
                            </div>
                            <div>
                                <h1>350 Flatbush ave New York,<br /> NY 10018 USA.</h1>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div>
                                <h1 className='text-2xl'><AiFillPhone></AiFillPhone></h1>
                            </div>
                            <div>
                                <h1>+8801828335544<br /> +8801838235533</h1>
                            </div>

                        </div>

                    </div>
                    <div>
                        <img src={gimbal} className='w-56' alt="gimbal" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;