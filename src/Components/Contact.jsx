import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import "./contact.css";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import logo from "../assets/logo.jpeg"
import { FiPhoneCall } from 'react-icons/fi';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { TbDeviceLandlinePhone } from 'react-icons/tb';
import { MdMarkEmailRead } from 'react-icons/md';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tesuh6a', 'template_rw5w207', form.current, 'WQa1w2oc5lH3IwB3E')
            .then((result) => {
                console.log(result);
                if (result.status === 200) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Email Sent!",
                        icon: "success"
                    });
                    e.target.name.value = "";
                    e.target.email.value = "";
                    e.target.subject.value = "";
                    e.target.message.value = "";
                }
            }, (error) => {
                console.log(error);
            });
    };

    return (
        <div className='formBg'>
            <div className='w-[80%] mx-auto pb-8'>
                <h1 className='text-5xl pt-8 text-[#151515] font-bold text-center'>Contact Me</h1>
                <h3 className='text-xl pt-2 text-[#151515] font-bold text-center'>
                    Whether it's for business inquiries or a friendly chat, don't hesitate to send me an email.
                </h3>

                <div className='flex lg:gap-10 flex-col lg:flex-row'>
                    <div className='flex-1' data-aos="flip-left">
                        <div className='w-full lg:flex-1 flex justify-center items-end'>
                            <div role="listitem" className="relative pt-28 w-[90%] lg:w-[85%]">
                                <div className="rounded-2xl overflow-hidden shadow-2xl infoBg">
                                    <div className="absolute -mt-20 w-full flex justify-center">
                                        <div className="h-32 w-32">
                                            <img src={logo} alt="Logo" role="img" className="rounded-full object-cover h-full w-full shadow-lg" />
                                        </div>
                                    </div>
                                    <div className="px-6 py-16">
                                        <h1 className="font-bold text-3xl text-center mb-1">Sajeed Enayet Aninda</h1>
                                        <p className="text-[#151515] font-semibold text-md text-center">MERN Stack Developer</p>
                                        <div className="flex flex-col xl:flex-row justify-evenly">
                                            <div className="text-center text-[#151515] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                                                <span><BiSolidPhoneCall></BiSolidPhoneCall></span>
                                                <span><a href="tel:+8801763666677">+8801850-504439</a></span>
                                            </div>

                                            <div className="text-center text-[#151515] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                                                <span><FiPhoneCall></FiPhoneCall></span>
                                                <span><a href="tel:+8801711517080">+8801575-782959</a></span>
                                            </div>
                                        </div>
                                        <div className="text-center text-[#151515] text-lg pt-2 font-normal flex items-center justify-center gap-2">
                                            <span><MdMarkEmailRead></MdMarkEmailRead></span>
                                            <span><a href="mailto: info@visaghor.com">sajaninda@gmail.com</a></span>
                                        </div>

                                        <div className="text-center font-semibold text-[#151515] text-lg pt-2 flex items-center justify-center gap-2">
                                            <span>Mirpur, Dhaka, Bangladesh</span>
                                        </div>
                                        <div className='socialLinks flex gap-3 items-center justify-center mt-4'>
                                            <a href="https://www.linkedin.com/in/sajeed-aninda/" target='_blank'>
                                                <FaLinkedin className='text-3xl text-[#151515] hover:text-[#863d8f]' />
                                            </a>
                                            <a href="https://github.com/SajeedAninda" target='_blank'>
                                                <FaGithub className='text-3xl text-[#151515] hover:text-[#863d8f]' />
                                            </a>
                                            <a href="https://www.facebook.com/sajeedaninda/" target='_blank'>
                                                <FaFacebook className='text-3xl text-[#151515] hover:text-[#863d8f]' />
                                            </a>
                                            <a href="https://www.instagram.com/_a.n.i.n.d.a_" target='_blank'>
                                                <FaInstagram className='text-3xl text-[#151515] hover:text-[#863d8f]' />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="h-fit my-8 p-8 rounded-md border-2 border-[#863d8f] flex-1" data-aos="flip-right">
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='flex flex-col md:flex-row w-full gap-6'>
                                <div className='w-full'>
                                    <label className='text-2xl text-[#151515] font-bold' htmlFor="name">Name</label> <br />
                                    <input className='py-3 px-3 mt-2 w-full border-2 border-[#863d8f] rounded-md' name='name' type="text" placeholder='Please Enter Your Name' />
                                </div>
                                <div className='w-full'>
                                    <label className='text-2xl text-[#151515] font-bold' htmlFor="email">Email</label> <br />
                                    <input className='py-3 px-3 mt-2 w-full border-2 border-[#863d8f] rounded-md' name='email' type="email" placeholder='Please Enter Your Email' />
                                </div>
                            </div>
                            <div className='w-full mt-4'>
                                <label className='text-2xl text-[#151515] font-bold' htmlFor="subject">Subject</label> <br />
                                <input className='py-3 px-3 mt-2 w-full border-2 border-[#863d8f] rounded-md' name='subject' type="text" placeholder='Please Enter Your Subject' />
                            </div>

                            <div className='w-full mt-4'>
                                <label className='text-2xl text-[#151515] font-bold' htmlFor="message">Message</label> <br />
                                <textarea rows="5" className='py-3 px-3 mt-2 w-full border-2 border-[#863d8f] rounded-md' name='message' type="text" placeholder='Please Enter The Message That Your Want To Send' />
                            </div>

                            <motion.button whileHover={{ scale: 1.05 }} type='submit' className='px-6 w-full text-white text-lg py-3 font-bold mt-4 rounded-md bg-gradient-to-r from-[#863d8f] to-[#aa95aa] hover:bg-gradient-to-r hover:from-[#aa95aa] hover:to-[#863d8f] '>Send Your Message</motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
