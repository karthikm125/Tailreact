import React from "react";
import img from "./img/a.JPG";
import { Link } from "react-router-dom";
import { About } from "./About";
import Contacts from "./Contact";

export const Home = () => {
  return (
    <div className="max-h-screen bg-sky-800 lg:flex-wrap">
      <nav>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-40 ps-5 lg:ps-10 flex-wrap">
          <div className="mt-2 text-center lg:text-left">
            <a href="#" className="text-2xl font-bold text-white">
              Business
            </a>
          </div>
          <div className="flex gap-5 lg:gap-10 mt-3 flex-wrap justify-center lg:justify-start">
            <a href="#" className="text-white">Home</a>
           <Link to= "About" > <a href="#" className="text-white">about</a></Link>
            <Link to="Contact"><a href="#" className="text-white">contact</a></Link>
           
          </div>
        </div>
      </nav>
      
      <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 ps-5 lg:ps-10 pb-10 lg:pb-24 gap-8">
        <div className="pt-10 lg:pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Corporate & Business Site Template By Ayro UI.
          </h1>
          <p className="mt-5 text-white text-sm lg:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            quam qui sequi quod sunt expedita maiores quae.
          </p>
          <div className="flex mt-5 flex-col sm:flex-row">
            <button className="bg-white border-black btn rounded py-2 px-5 text-sky-800 mb-3 sm:mb-0">
              GET STARTED
            </button>
            <div className="ps-0 sm:ps-3 text-center sm:text-left">
              <img src="" alt="" />
              <p className="mt-2 text-white">Watch Intro</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src={img} alt="" className="rounded w-[80%] md:w-[60%] lg:w-[500px] h-auto" />
        </div>
      </div>
      </div>
  )
  };