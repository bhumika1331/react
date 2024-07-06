import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-black to-green-950 ">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-Golden uppercase">Resources</h2>
                            <ul className="text-yellow-100 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-Golden uppercase">Follow us</h2>
                            <ul className="text-yellow-100 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/hiteshchoudhary"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-Golden uppercase">Legal</h2>
                            <ul className="text-yellow-100 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-yellow-100 sm:text-center">
                        © 2023
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                            bhumikasharma
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-yellow-100 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-yellow-100">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-yellow-100">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-yellow-100">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-yellow-100">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}