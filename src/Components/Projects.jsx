import "./project.css"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import imgA from "../assets/sovereign/a.png"
import imgB from "../assets/sovereign/b.png"
import imgC from "../assets/sovereign/c.png"
import imgD from "../assets/sovereign/d.png"
import imgE from "../assets/sovereign/e.png"
import imgF from "../assets/sovereign/f.png"
import imgG from "../assets/sovereign/g.png"
import imgH from "../assets/sovereign/h.png"
import imgI from "../assets/sovereign/i.png"
import imgJ from "../assets/sovereign/j.png"
import imgK from "../assets/sovereign/k.png"
import imgL from "../assets/sovereign/l.png"
import imgAA from "../assets/delightful/aa.png"
import imgBB from "../assets/delightful/bb.png"
import imgCC from "../assets/delightful/cc.png"
import imgDD from "../assets/delightful/dd.png"
import imgEE from "../assets/delightful/ee.png"
import imgFF from "../assets/delightful/ff.png"
import imgGG from "../assets/delightful/gg.png"
import imgHH from "../assets/delightful/hh.png"
import imgII from "../assets/delightful/ii.png"
import imgJJ from "../assets/delightful/jj.png"
import imgAAA from "../assets/crafters/aaa-min.png"
import imgBBB from "../assets/crafters/bbb-min.png"
import imgCCC from "../assets/crafters/ccc-min.png"
import imgDDD from "../assets/crafters/ddd-min.png"
import imgEEE from "../assets/crafters/eee-min.png"
import imgFFF from "../assets/crafters/fff-min.png"
import imgGGG from "../assets/crafters/ggg-min.png"
import imgHHH from "../assets/crafters/hhh-min.png"
import imgIII from "../assets/crafters/iii-min.png"
import imgJJJ from "../assets/crafters/jjj-min.png"
import imgKKK from "../assets/crafters/kkk-min.png"
import imgLLL from "../assets/crafters/lll-min.png"
import imgMMM from "../assets/crafters/mmm-min.png"
import imgAAAA from "../assets/scholarix/aaaa.png"
import imgBBBB from "../assets/scholarix/bbbb.png"
import imgCCCC from "../assets/scholarix/cccc.png"
import imgDDDD from "../assets/scholarix/dddd.png"
import imgEEEE from "../assets/scholarix/eeee.png"
import imgFFFF from "../assets/scholarix/ffff.png"
import imgGGGG from "../assets/scholarix/gggg.png"
import imgHHHH from "../assets/scholarix/hhhh.png"
import imgIIII from "../assets/scholarix/iiii.png"
import imgJJJJ from "../assets/scholarix/jjjj.png"
import imgKKKK from "../assets/scholarix/kkkk.png"
import imgLLLL from "../assets/scholarix/llll.png"
import imgMMMM from "../assets/scholarix/mmmm.png"

import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div id="projects" className='projectBg'>
            <div className='w-[80%] mx-auto'>
                <h1 className='text-5xl pt-8 text-[#151515] font-bold text-center'>My Recent Projects</h1>
                <h3 className='text-xl pt-2 text-[#151515] font-bold text-center'>See the projects that helped me build experience in MERN Stack Development</h3>

                <div className='py-12'>
                    {/* SCHOLARIX  */}
                    <div className='flex gap-6 lg:gap-0 flex-col-reverse lg:flex-row items-center border-b-2 border-[#f9d5fa] pb-6' data-aos="fade-up-right">
                        <div className='texts w-full lg:w-[50%] space-y-3'>
                            <h2 className='text-4xl text-[#151515] font-bold'>Scholarix</h2>
                            <p className='text-xl text-[#151515] font-semibold'>A comprehensive platform connecting students with expert guidance, resources, and opportunities to navigate their academic journey effectively.</p>
                            <ul className='list-disc pl-8 font-medium w-[95%]'>
                                <li>Developed integration for mobile and card payments utilizing the SSLCommerz platform.</li>
                                <li>Implemented highly intricate parallel filtering functionality on the backend system, leveraging advanced techniques to enhance performance and efficiency.</li>
                                <li>Constructed separate dashboards tailored for users and administrators by employing conditional rendering methods.</li>
                            </ul>

                            <div className='flex gap-2'>
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://scholarix.netlify.app/" target='_blank'>Live Link</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Scholarix-Client" target='_blank'>Client Side</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Scholarix-Server" target='_blank'>Server Side</a>
                            </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} className='slides shadow-2xl border-2 p-4 rounded-md border-[#863d8f] w-full lg:w-[50%]'>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper shadow-2xl"
                            >
                                <SwiperSlide>
                                    <img src={imgAAAA} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgBBBB} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgCCCC} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgDDDD} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgEEEE} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgFFFF} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgGGGG} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgHHHH} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgIIII} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgJJJJ} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgKKKK} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgLLLL} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgMMMM} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                    </div>

                    {/* SOVEREIGN ASSETS  */}
                    <div className='flex gap-6 lg:gap-0 flex-col-reverse lg:flex-row items-center pt-8 border-b-2 border-[#f9d5fa] pb-6' data-aos="fade-up-right">
                        <div className='texts w-full lg:w-[50%] space-y-3'>
                            <h2 className='text-4xl text-[#151515] font-bold'>Sovereign Assets Solutions</h2>
                            <p className='text-xl text-[#151515] font-semibold'>A web application that streamlines asset management for businesses through an intuitive platform, allowing HR/Admins to effortlessly track employee interactions with company assets.</p>
                            <ul className='list-disc pl-8 font-medium'>
                                <li>Integrated a Card Payment System utilizing the Stripe platform.</li>
                                <li>Crafted custom layouts for Admin, Employee, and Guests, optimizing user interfaces based on their specific roles.</li>
                                <li>Developed comprehensive set of API endpoints for CRUD operations with advanced features for efficient data handling.</li>
                            </ul>

                            <div className='flex gap-2'>
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://sovereign-assets-solution.web.app/" target='_blank'>Live Link</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Sovereign-Assets-Client" target='_blank'>Client Side</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Sovereign-Assets-Server" target='_blank'>Server Side</a>
                            </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} className='slides shadow-2xl border-2 p-4 rounded-md border-[#863d8f] w-full lg:w-[50%]'>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper shadow-2xl"
                            >
                                <SwiperSlide>
                                    <img src={imgA} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgB} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgC} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgD} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgE} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgF} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgG} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgH} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgI} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgJ} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgK} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgL} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                    </div>

                    {/* DELIGHTFUL BLOGS  */}
                    <div className='flex gap-6 lg:gap-0 flex-col-reverse lg:flex-row  items-center pt-8 border-b-2 border-[#f9d5fa] pb-6' data-aos="fade-up-right">
                        <div className='texts w-full lg:w-[50%] space-y-3'>
                            <h2 className='text-4xl text-[#151515] font-bold'>Delightful Blogs</h2>
                            <p className='text-xl text-[#151515] font-semibold'>An intuitive web platform that provides a delightful and immersive experience for bloggers and readers alike.</p>
                            <ul className='list-disc pl-8 font-medium'>
                                <li>Added a user-exclusive comments section for enhanced interaction.</li>
                                <li>Showcased latest blogs on homepage for instant access and visibility.</li>
                                <li>Implemented Blog Filtering and Search Tab from Backend.</li>
                            </ul>

                            <div className='flex gap-2'>
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://delightful-blogs-sajeed.netlify.app/" target='_blank'>Live Link</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Delightful-Blogs-Client" target='_blank'>Client Side</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Delightful-Blogs-Server" target='_blank'>Server Side</a>
                            </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} className='slides shadow-2xl border-2 p-4 rounded-md border-[#863d8f] w-full lg:w-[50%]'>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper shadow-2xl"
                            >
                                <SwiperSlide>
                                    <img src={imgAA} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgBB} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgCC} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgDD} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgEE} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgFF} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgGG} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgHH} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgII} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgJJ} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                    </div>

                    {/* AUTO CRAFTERS */}
                    <div className='flex gap-6 lg:gap-0 flex-col-reverse lg:flex-row  items-center pt-8' data-aos="fade-up-right">
                        <div className='texts w-full lg:w-[50%] space-y-3'>
                            <h2 className='text-4xl text-[#151515] font-bold'>Auto Crafters</h2>
                            <p className='text-xl text-[#151515] font-semibold'>Auto Crafters stands as the ultimate hub for automotive excellence. Carefully crafted, the platform ensures users a thorough and immersive journey into the realm of automobiles.</p>
                            <ul className='list-disc pl-8 font-medium'>
                                <li>User Authentication with Email, Password and Social Login.</li>
                                <li>Executed CRUD Operations with several complex API's in Backend.</li>
                                <li>Implemented Dark Mode toggle across the website.</li>
                            </ul>

                            <div className='flex gap-2'>
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://auto-crafters-sajeed.netlify.app/" target='_blank'>Live Link</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Auto-Crafters-Client" target='_blank'>Client Side</a>
                                |
                                <a className='font-bold text-lg hover:underline hover:text-[#863d8f]' href="https://github.com/SajeedAninda/Auto-Crafters-Server" target='_blank'>Server Side</a>
                            </div>
                        </div>

                        <motion.div whileHover={{ scale: 1.05 }} className='slides shadow-2xl border-2 p-4 rounded-md border-[#863d8f] w-full lg:w-[50%]'>
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={false}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper shadow-2xl"
                            >
                                <SwiperSlide>
                                    <img src={imgAAA} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgBBB} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgCCC} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgDDD} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgEEE} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgFFF} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgGGG} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgHHH} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgIII} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgJJJ} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgKKK} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgLLL} alt="" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img src={imgMMM} alt="" />
                                </SwiperSlide>
                            </Swiper>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;