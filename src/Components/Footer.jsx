import React from 'react';
import logo from "../assets/logo.jpeg"
import "./footer.css"
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <footer className="footerBg rounded-lg shadow p-4">
            <div className="w-[97%] md:w-[80%] mx-auto py-4 md:py-8">
                <div className="flex gap-4 xl:gap-0 flex-col xl:flex-row items-center justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="w-[80px] rounded-full" alt="Flowbite Logo" />
                        <h2 className='text-[#151515] font-bold text-lg'>Sajeed Enayet Aninda</h2>
                    </a>
                    <ul className="flex items-center mb-6 text-xs md:text-base font-medium text-[#151515] sm:mb-0 ">
                        <li>
                            <HashLink smooth to="#aboutme" className="hover:underline hover:text-[#863d8f] me-4 md:me-6">About Me</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#skills" className="hover:underline hover:text-[#863d8f] me-4 md:me-6">My Skills</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#education" className="hover:underline hover:text-[#863d8f] me-4 md:me-6">My Education</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#experience" className="hover:underline hover:text-[#863d8f] me-4 md:me-6">My Experiece</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="#projects" className="hover:underline hover:text-[#863d8f] me-4 md:me-6">Projects</HashLink>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-base text-[#151515] font-medium text-center">
                    2023- Sajeed Enayet Aninda- All Rights Reserved
                </span>
            </div>
        </footer>


    );
};

export default Footer;