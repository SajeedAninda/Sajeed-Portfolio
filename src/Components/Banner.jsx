import React, { useEffect } from 'react';
import "./banner.css"
import bannerImg from "../assets/bannerImg.png"
import Typewriter from 'typewriter-effect';
import { motion, useAnimation } from 'framer-motion';
import gif from "../assets/512.gif"
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Banner = () => {
    const controls = useAnimation();
    const animationProperties = {
        y: [0, 10, 0],
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
        <div className='bannerBg'>
            <div id='banner' className='w-[80%] mx-auto h-fit lg:h-screen flex flex-col md:flex-row justify-center items-center py-12 lg:py-0 text-center md:text-left'>
                <motion.div
                    className='textDiv flex-1 space-y-4 text-center md:text-left'
                    initial={{ opacity: 0, x: '-100%' }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}>
                    <h1 className='text-center md:text-left text-3xl md:text-4xl lg:text-5xl text-[#151515] font-bold flex flex-wrap items-center gap-2 justify-center md:justify-start'>
                        <span className='text-center md:text-left'>Hi, I am Sajeed</span>
                        <img src={gif} className='w-[45px]' alt="" />
                    </h1>
                    <h2 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#151515] font-bold flex items-center justify-center md:justify-start gap-2'>
                        <span>I am a </span>
                        <Typewriter
                            options={{
                                strings: ['MERN Stack Developer', 'IoT Enthusiast', 'Coding Aficionado'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h2>
                    <h3 className='text-xl text-[#151515] font-semibold'>Crafting bridges between design and functionality. <br /> Let's build innovative, user-focused web applications together!</h3>

                    <div className='socialLinks flex gap-3 items-center justify-center md:justify-start'>
                        <a href="https://www.linkedin.com/in/sajeed-aninda/" target='_blank'>
                            <FaLinkedin className='text-3xl text-[#151515] hover:text-[#863d8f]'/>
                        </a>
                        <a href="https://github.com/SajeedAninda" target='_blank'>
                            <FaGithub className='text-3xl text-[#151515] hover:text-[#863d8f]'/>
                        </a>
                        <a href="https://www.facebook.com/sajeedaninda/" target='_blank'>
                            <FaFacebook className='text-3xl text-[#151515] hover:text-[#863d8f]'/>
                        </a>
                        <a href="https://www.instagram.com/_a.n.i.n.d.a_" target='_blank'>
                            <FaInstagram className='text-3xl text-[#151515] hover:text-[#863d8f]'/>
                        </a>
                    </div>

                    <a href={'https://drive.google.com/uc?export=download&id=105iSXii7wx0NrIsAp2L_Rbm_iCHLjcdW'} download={"Resume"} className='mt-3'>
                        <motion.button whileHover={{ scale: 1.05 }} className='px-6 text-white text-lg py-3 font-bold mt-4 rounded-md bg-gradient-to-r from-[#863d8f] to-[#aa95aa] hover:bg-gradient-to-r hover:from-[#aa95aa] hover:to-[#863d8f] '>Download My Resume</motion.button>
                    </a>
                </motion.div>
                <motion.div
                    data-aos="fade-left"
                    className='imageDiv flex-1 flex justify-center'
                    animate={controls}
                >
                    <img className='' src={bannerImg} alt="" />
                </motion.div>
            </div>
        </div>
    );
};

export default Banner;