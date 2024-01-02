import React from 'react';
import Lottie from "lottie-react";
import experienceLottie from "../assets/experienceLottie.json"
import { motion } from 'framer-motion';
import "./experience.css"

const MyExperience = () => {
    return (
        <div id='experience' className='experienceBg'>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-5xl pt-8 text-[#151515] font-bold text-center'>My Experience</h1>
                <h3 className='text-xl pt-2 text-[#151515] font-bold text-center'>Take a look at the expertise I've gained during my brief journey.
                </h3>

                <div className='flex flex-col lg:flex-row items-center gap-4'>
                    <div className='flex-1 py-12'>
                        <motion.div data-aos="fade-up" whileHover={{ scale: 1.05 }} className='text-semibold text-xl space-y-3 border-2 border-[#863d8f] p-6 rounded-md hover:bg-[#282e46] hover:border-2 hover:border-[#282e46] group cursor-pointer text-center md:text-left'>
                            <p className='group-hover:text-white'>
                                Following my graduation, I enrolled in a comprehensive Full Stack Development course at Programming Hero. Throughout this intensive six-month program, my primary focus was on mastering the MERN (MongoDB, Express.js, React, Node.js) Stack. Over the course duration, I successfully completed approximately 20 projects encompassing both frontend and backend development.
                            </p>

                            <p className='group-hover:text-white'>
                                This transformative learning experience was not merely about acquiring technical skills; it entailed navigating through various phases of development, investing countless nights in resolving intricate bugs, and gaining a profound understanding of the intricacies involved in creating robust web applications. This learning phase has been the cornerstone of my skill development, shaping me into a proficient Full Stack Developer ready to tackle diverse challenges in the field.
                            </p>
                        </motion.div>
                    </div>
                    <div className='lottieDiv flex-1 flex justify-center w-full md:w-[60%] lg:w-full' data-aos="fade-up">
                        <Lottie animationData={experienceLottie} loop={true} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyExperience;