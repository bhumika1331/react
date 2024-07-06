import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gradient-to-r from-black to-green-950 border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="data:image/jpeg;base64,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"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-500 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-amber-500 hover:bg-amber-600 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-amber-500" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/about"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-amber-500" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-amber-500" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-amber-500" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                                    }
                                >
                                    Github
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/user"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
                                        ${isActive ? "text-amber-500" : "text-gray-700" } lg:hover:bg-transparent lg:border-0 hover:text-amber-500 lg:p-0`
                                    }
                                >
                                    User
                                </NavLink>
                            </li>

                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
