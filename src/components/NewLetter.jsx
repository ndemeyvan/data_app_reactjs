import React from "react";

const NewLetter = () => {
  return (
    <div className="w-full bg-black py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-6">
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full ">
            <input
              type="email"
              placeholder="Enter your email"
              className=" text-black rounded-md p-3 flex w-full"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium py-3  text-black sm:ml-4">
              subscribe
            </button>
          </div>
          <p>
            We can take care of your data souscription to help developper live ,
            with your <span className="text-[#00df9a]">private policies</span> .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
