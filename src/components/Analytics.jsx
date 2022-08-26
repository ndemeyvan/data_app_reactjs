import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="laptop" className="w-[500px] md:w-[1200px] my-5" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">
            Data analytics dashboard
          </p>
          <h1 className="font-bold text-black md:text-4xl sm:text-3xl text-2xl py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequuntur recusandae at praesentium ab et debitis, quae voluptas
            deleniti repudiandae repellat! Aliquam repellat fuga unde magni
            tempora tenetur aperiam cumque eveniet.
          </p>
          <button className="bg-black w-[200px] rounded-md my-6 mx-auto py-3 md:mx-0 text-[#00df9a] font-bold">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
