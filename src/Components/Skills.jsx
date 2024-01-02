import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { IoLogoHtml5 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import "./skills.css"


const Skills = () => {
    return (
        <div id='skills' className='skillsBg'>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-5xl pt-8 text-[#151515] font-bold text-center'>My Skills</h1>
                <h3 className='text-xl pt-2 text-[#151515] font-bold text-center'>See my key skills that i apply regularly in the field of development</h3>

                <div
                    className='py-6 grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <IoLogoHtml5 className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>HTML</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <FaCss3Alt className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>CSS</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <SiJavascript className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>Javascript</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <TbBrandTailwind className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>Tailwind CSS</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <FaReact className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>React JS</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <FaNode className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>Node JS</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <SiExpress className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>Express JS</h2>
                    </motion.div >

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <SiMongodb className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>Mongo DB</h2>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.05 }} className='cursor-pointer p-4 border-2 border-[#863d8f] rounded-md flex justify-between gap-2 items-center flex-col bg-gradient-to-r from-[#853d8f83] to-[#f5d4f5] hover:bg-[#040407] hover:border-2 hover:border-[#282e46] group' data-aos="zoom-out-up">
                        <IoLogoFirebase className='text-[130px] group-hover:text-white' />
                        <h2 className='text-3xl text-[#151515] group-hover:text-white font-bold text-center'>Firebase</h2>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Skills;