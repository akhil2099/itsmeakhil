import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = ({ top }) => {
    // Set hover styles based on 'top' state
    const topLinkClass = "text-white font-extrabold inline-flex items-center justify-center w-auto px-6 py-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white";
    const scrolledLinkClass = "text-black font-extrabold inline-flex items-center justify-center w-auto px-6 py-3 rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-white";

    return (
        <>
            <HashLink className={top ? topLinkClass : scrolledLinkClass} smooth to="/#about">
                About
            </HashLink>
            <HashLink className={top ? topLinkClass : scrolledLinkClass} smooth to="/#Explore">
                Explore
            </HashLink>
            <HashLink className={top ? topLinkClass : scrolledLinkClass} to="/portfolio#portfolio">
                Portfolio
            </HashLink>
            <HashLink className={top ? topLinkClass : scrolledLinkClass} to="/Gallery#Gallery">
                Gallery
            </HashLink>
            <HashLink className={top ? topLinkClass : scrolledLinkClass} smooth to="/contact-us#contact">
                Contact Me
            </HashLink>
        </>
    );
}

export default NavLinks;
