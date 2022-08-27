import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-[10rem] px-4">
      <div className="gap-8 max-w-[1240px] mx-auto grid md:grid-cols-3">
        {/* Single User */}
        <div className="hover:scale-105 duration-300 shadow-xl flex flex-col p-4 my-4 rounded-lg w-full text-center">
          {/* Image */}
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
            srcset=""
          />
          {/* Body */}
          <h2 className="font-bold text-2xl py-8 ">Single User</h2>
          <p className="text-4xl font-bold">$149</p>
          <div className="font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          {/* Button */}
          <button className="hover:text-white hover:bg-black transition ease-out duration-300 bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium py-3  text-black ">
            Start trial
          </button>
        </div>
        {/* Double User */}
        <div className="bg-gray-100 hover:scale-105 duration-300 shadow-xl flex flex-col p-4 my-4 rounded-lg w-full text-center ">
          {/* Image */}
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
            srcset=""
          />
          {/* Body */}
          <h2 className="font-bold text-2xl py-8 ">Single User</h2>
          <p className="text-4xl font-bold">$200</p>
          <div className="font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          {/* Button */}
          <button
            className="
            hover:text-black
           hover:bg-[#00df9a]
            transition 
            ease-out
             duration-300 bg-black w-[200px] rounded-md my-6 mx-auto font-medium py-3  text-[#00df9a] "
          >
            Start trial
          </button>
        </div>
        {/* Triple User */}
        <div className="hover:scale-105 duration-300 shadow-xl flex flex-col p-4 my-4 rounded-lg w-full text-center">
          {/* Image */}
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
            srcset=""
          />
          {/* Body */}
          <h2 className="font-bold text-2xl py-8 ">Triple User</h2>
          <p className="text-4xl font-bold">$300</p>
          <div className="font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          {/* Button */}
          <button className="hover:text-white hover:bg-black transition ease-out duration-300 bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium py-3  text-black ">
            Start trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
