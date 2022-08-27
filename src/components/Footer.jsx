import React from "react";
import {
    FaGithub,
  FaDribbble,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div className="text-gray-300 max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-20">
        <div>
          {/* Logo */}
          <h1 className=" text-3xl font-bold text-[#00df9a]">FData.</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio
            facilis obcaecati.
          </p>
          {/* Social Network */}
          <div className="flex justify-between md:w-[75%] my-2">
            <FaDribbble
              size={40}
              className="cursor-pointer hover:text-[#00df9a] transition ease-in-out duration-500"
            />
            <FaInstagram
              size={40}
              className="cursor-pointer hover:text-[#00df9a] transition ease-in-out duration-500"
            />
            <FaFacebookF
              size={40}
              className="cursor-pointer hover:text-[#00df9a] transition ease-in-out duration-500"
            />
            <FaGithub
              size={40}
              className="cursor-pointer hover:text-[#00df9a] transition ease-in-out duration-500"
            />
            <FaTwitter
              size={40}
              className="cursor-pointer hover:text-[#00df9a] transition ease-in-out duration-500"
            />
          </div>
        </div>
        {/* right side */}
        <div className="lg:col-span-2 flex justify-between">
          {/* First */}
          <div>
            <h6 className="font-bold text-gray-100 text-md">Solutions</h6>
            <ul>
              <li className="py-2 text-sm ">Analytics</li>
              <li className="py-2 text-sm ">Marketing</li>
              <li className="py-2 text-sm ">Commerce</li>
              <li className="py-2 text-sm ">Inspiration</li>
            </ul>
          </div>
          {/* Second */}
          <div>
            <h6 className="font-bold text-gray-100 text-md">Support</h6>
            <ul>
              <li className="py-2 text-sm ">Pricing</li>
              <li className="py-2 text-sm ">Documentation</li>
              <li className="py-2 text-sm ">Guides </li>
              <li className="py-2 text-sm ">API status</li>
            </ul>
          </div>
          {/* Third */}
          <div>
            <h6 className="font-bold text-gray-100 text-md">Company</h6>
            <ul>
              <li className="py-2 text-sm ">About</li>
              <li className="py-2 text-sm ">Blog</li>
              <li className="py-2 text-sm ">Jobs</li>
              <li className="py-2 text-sm ">Careers</li>
            </ul>
          </div>
          {/* Fourth */}
          <div>
            <h6 className="font-bold text-gray-100 text-md">Legal</h6>
            <ul>
              <li className="py-2 text-sm ">Claim</li>
              <li className="py-2 text-sm ">Policy</li>
              <li className="py-2 text-sm ">Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
