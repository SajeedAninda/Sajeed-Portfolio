import React, { useEffect } from 'react';
import "./about.css"
import aboutPic from "../assets/aboutmePic.png"
import { motion, useAnimation } from 'framer-motion';

const AboutMe = () => {
    const controls = useAnimation();
    const animationProperties = {
        x: [0, 10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
        },
    };

    useEffect(() => {
        controls.start(animationProperties);
    }, []);


    return (
        <div id='aboutme' className='aboutBg h-fit'>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-5xl pt-8 text-[#151515] font-bold text-center'>About Me</h1>
                <h1 className='text-xl pt-2 text-[#151515] font-bold text-center'>Get to know more about me and my journey</h1>
                <div className='flex flex-col lg:flex-row justify-center items-center'>
                    <motion.div

                        className='imageDiv flex-1 flex justify-center'
                        animate={controls}
                    >
                        <img className='w-full md:w-[60%] lg:w-full' src={aboutPic} alt="" />
                    </motion.div>
                    <div className='flex-1 py-12'>
                        <motion.div whileHover={{ scale: 1.05 }} className='text-semibold text-xl space-y-3 border-2 border-[#863d8f] p-6 rounded-md hover:bg-[#282e46] hover:border-2 hover:border-[#282e46] group cursor-pointer'>
                            <p className='group-hover:text-white'>
                                Hello World, I am Sajeed Enayet Aninda a Web Developer based out of Dhaka, Bangladesh.  I'm a passionate and recently graduated Full Stack Developer with a focus on MERN stack development. My journey in the world of coding began with a determination to turn ideas into innovative digital solutions.
                            </p>

                            <p className='group-hover:text-white'>
                                With a solid foundation in MongoDB, Express.js, React.js, and Node.js, I thrive on creating seamless, user-friendly applications. My ambition is to contribute to cutting-edge projects that push technological boundaries and enhance user experiences.
                            </p>

                            <p className='group-hover:text-white'>
                                Driven by curiosity and a love for problem-solving, I aspire to continuously learn and adapt to emerging technologies. My goal is to leverage my skills to build robust, scalable applications that make a positive impact.
                            </p>
                            <p className='group-hover:text-white'>Let's code the future together!</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutMe;