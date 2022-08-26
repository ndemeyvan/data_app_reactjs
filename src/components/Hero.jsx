import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
    return (
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">

                <p className='uppercase text-[#00df9a] font-bold p-2'>Grow with data analytics</p>
                <h1 className='md:text-7x sm:text-6xl text-4xl font-bold md:py-5'>Grow with data</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Fast , Flexible financing for </p>
                    <Typed strings={['BTC', "ECT", 'XAF', 'SASS']} typeSpeed={120} backSpeed={180} loop className='md:text-5xl sm:text-4xl text-xl font-bold pl-2' />
                </div>
                <p className='pt-2 md:text-2xl text-xl text-gray-600 '>Monitor your data analytics to increase revenue for BTC , BTB & SASS platform .</p>
            </div>

        </div>
    )
}

export default Hero
