import React from 'react';
import haut from "../assets/haut.png"
import baf from "../assets/baf.png"
import "./education.css"
import { motion } from 'framer-motion';

const MyEducation = () => {
    return (
        <div id='education' className='bg'>
            <div className='mx-auto w-[80%]'>
                <h1 className='text-5xl pt-8 text-[#151515] font-bold text-center'>My Education</h1>
                <h3 className='text-xl pt-2 text-[#151515] font-bold text-center'>Review my most recent academic experience</h3>

                <div className='mt-8'>
                    <div className='flex'>
                        <motion.div data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine" 
                            whileHover={{ scale: 1.05 }} 
                            className="cardBg cursor-pointer border-4 border-[#863d8f] w-full xl:w-[85%] rounded-md shadow-lg mb-12 py-5 xl:pr-5 h-fit">
                            <div className="xl:flex gap-6 px-4 leading-none max-w-4xl">
                                <div className="flex justify-center xl:justify-start xl:flex-none">
                                    <img
                                        src={haut}
                                        alt="pic"
                                        className="h-72 w-96 object-cover rounded-md shadow-2xl transform -translate-y-4 border-2 border-[#f9d5fa]"
                                    />
                                </div>

                                <div className="flex-col text-[#151515]">
                                    <p className="pt-4 text-2xl font-bold text-center xl:text-left">Henan University of Technology</p>
                                    <div className='space-y-4 text-center xl:text-left'>
                                        <div className="text-md text-center xl:text-left my-2">
                                            <span className="font-bold capitalize text-center xl:text-left">
                                                BSC In Computer Science & Engineering
                                            </span>
                                        </div>
                                        <div className="text-md text-center xl:text-left my-2">
                                            <span className="font-bold capitalize text-center xl:text-left">
                                                Sep 2019- July 2023
                                            </span>
                                        </div>
                                        <div className="text-md text-center xl:text-left my-2">
                                            <span className="font-bold capitalize text-center xl:text-left">
                                                CGPA: 3.53/4.00
                                            </span>
                                        </div>
                                        <div className="text-md my-2">
                                            <span className="font-medium leading-5">
                                                As a Computer Science and Engineering (CSE) student at Henan University of Technology, I benefited from an institution renowned for its commitment to technological education. The CSE program at the university provided me with a comprehensive and cutting-edge curriculum, equipping myself with the knowledge and skills needed to excel in the dynamic field of computer science.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className='w-[15%] hidden lg:block'>

                        </div>
                    </div>
                </div>

                <div className='mt-2'>
                    <div className='flex'>
                        <div className='w-[15%] hidden lg:block'>

                        </div>
                        <motion.div data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine" whileHover={{ scale: 1.05 }} className="cardBg cursor-pointer border-4 border-[#863d8f] w-full xl:w-[85%] rounded-md shadow-lg mb-12 py-5 xl:pr-5 h-fit">
                            <div className="xl:flex gap-6 px-4 leading-none max-w-4xl">
                                <div className="flex justify-center xl:justify-start xl:flex-none">
                                    <img
                                        src={baf}
                                        alt="pic"
                                        className="h-72 w-96 object-cover rounded-md shadow-2xl transform -translate-y-4 border-2 border-[#f9d5fa]"
                                    />
                                </div>

                                <div className="flex-col text-[#151515]">
                                    <p className="pt-4 text-2xl font-bold text-center xl:text-left">BAF Shaheen College Dhaka</p>
                                    <div className='space-y-4 text-center xl:text-left'>
                                        <div className="text-md text-center xl:text-left my-2">
                                            <span className="font-bold capitalize text-center xl:text-left">
                                                Higher Secondary Certificate
                                            </span>
                                        </div>
                                        <div className="text-md text-center xl:text-left my-2">
                                            <span className="font-bold capitalize text-center xl:text-left">
                                                Jun 2016- May 2018
                                            </span>
                                        </div>
                                        <div className="text-md text-center xl:text-left my-2">
                                            <span className="font-bold capitalize text-center xl:text-left">
                                                GPA: 4.42/5.00
                                            </span>
                                        </div>
                                        <div className="text-md my-2">
                                            <span className="font-medium leading-5">
                                                Completing my Higher Secondary Certificate (HSC) at BAF Shaheen College Dhaka has been a formative chapter in my educational journey. The institution's commitment to academic excellence, coupled with a nurturing environment, played a pivotal role in laying a strong foundation for my future endeavors.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEducation;