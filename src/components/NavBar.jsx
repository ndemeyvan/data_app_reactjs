import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBAr = () => {
  const [navState, setnavState] = useState(false);

  const handleNav = () => {
    setnavState(!navState);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 ">
      {/* Desktop NavBar */}
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">FData.</h1>
      <ul className="hidden md:flex ">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Ressources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        {/* <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold">
          Get started
        </button> */}
      </ul>
      {/* Hamburger Menu */}
      <div onClick={() => handleNav()} className="block md:hidden">
        {!navState ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      {/* Mobile NavBar */}
      <div
        className={
          navState
            ? "fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300]  ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">FData.</h1>

        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Ressources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBAr;

// rafce comment to create command component
