import React from 'react';
import tzar_1 from '../../assets/Images/tzar_1.png';

export default function About() {
    return (
        <div className="py-16 bg-gradient-to-r from-black to-green-900">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img
                            src={tzar_1}
                            alt="image"
                            className='rounded-lg'
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-Golden font-semi-bold md:text-4x ">
                        
                        The 'art of tea' is a spiritual force for us to share...
                        </h2>
                        <p className="mt-6 text-yellow-100">
                        Sip the taste of premium quality tea of Assam, a perfect blend of true essence and flavour.
                         Tzar brand presents The Classic Chai - Available on Amazon and Flipkart.
                        </p>
                        <p className="mt-4 text-yellow-100">
                        Tzar Tea dedicates to source, process Premium Quality Handpicked Tea from the Finest 
                        Tea-estates of India & HandCrafted for Great Taste.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}