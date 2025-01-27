import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../image/logo.png";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar Container */}
            <div
                className="flex flex-col md:flex-row items-center justify-between w-full px-6 py-8 md:py-10"
                style={{ backgroundColor: "var(--deepblue)", color: "var(--yellow)" }}
            >
                {/* Logo Section (Visible on Small Screens) */}
                <div className="flex md:hidden justify-center items-center mb-4">
                    <NavLink to="/login">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[12vh] w-auto object-contain"
                        />
                    </NavLink>
                </div>

                {/* Left Section (Navigation Links) */}
                <div
                    className={`${isMenuOpen ? "block" : "hidden"
                        } md:flex flex-col md:flex-row items-center gap-8 text-lg md:text-xl text-white`}
                >
                    <ul className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <li>
                            <NavLink
                                to="/"
                                className="hover:text-yellow-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about-us"
                                className="hover:text-yellow-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className="hover:text-yellow-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <a
                                href="www.lifeevents.co.in" target="_blanck"
                                className="bg-sky-300 text-deepblue font-medium py-2 px-4 rounded hover:bg-sky-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Men Power
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Center Section (Logo - Visible on Medium Screens and Above) */}
                <div className="hidden md:flex justify-center items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                    <NavLink to="/login">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[10vh] w-auto md:h-[12vh] object-contain"
                        />
                    </NavLink>
                </div>

                {/* Right Section (Navigation Links) */}
                <div
                    className={`${isMenuOpen ? "block mt-4" : "hidden"
                        } md:flex flex-col md:flex-row items-center gap-8 text-lg md:text-xl text-white`}
                >
                    <ul className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        <li>
                            <NavLink
                                to="/gallery"
                                className="hover:text-yellow-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Gallery
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/testimonials"
                                className="hover:text-yellow-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Testimonials
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contacts"
                                className="hover:text-yellow-300 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Toggle Button (Small Screens Only) */}
                <button
                    className="text-white text-3xl md:hidden focus:outline-none absolute right-6 top-26"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? "✖" : "☰"}
                </button>
            </div>
        </>
    );
}

export default Navbar;
