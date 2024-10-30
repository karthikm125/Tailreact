import React from "react";
import img from "./img/a.JPG";

export const About = () => {
  return (
    <div className="max-h-screen bg-sky-800 lg:flex-wrap">
      <nav>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-40 ps-5 lg:ps-10 flex-wrap">
         
        </div>
      </nav>
      
      <div className="mt-10 lg:mt-14 grid grid-cols-1 lg:grid-cols-2 ps-5 lg:ps-10 pb-10 lg:pb-24 gap-8">
        <div className="pt-10 lg:pt-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            ABOUT
          </h1>
          <p className="mt-5 text-white text-sm lg:text-base">
           
Google is one of the world’s most influential technology companies, founded in 1998 by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University. Initially, Google started as a search engine aimed at organizing the vast amount of information available on the web, quickly becoming the most popular platform for internet searches due to its powerful algorithms and user-friendly design.

Over the years, Google expanded its reach far beyond search. It now offers a variety of services and products, including Gmail, Google Maps, Google Drive, Google Photos, and the Android operating system. Google is also a leader in areas like cloud computing (Google Cloud), artificial intelligence (AI), and machine learning, continuously driving innovation in these fields. Its parent company, Alphabet Inc., was established in 2015 to oversee Google's diverse portfolio of businesses.

In addition to its technological advancements, Google has had a profound impact on how people access and interact with information. The term "Google" has even become a verb, reflecting how deeply integrated it is into everyday life. Despite its successes, Google faces scrutiny over data privacy, antitrust concerns, and the vast influence it holds over the internet ecosystem.
          </p>
         
            <div className="ps-0 sm:ps-3 text-center sm:text-left">
              <img src="" alt="" />
              <p className="mt-2 text-white">Watch Intro</p>
            </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img src={img} alt="" className="rounded w-[80%] md:w-[60%] lg:w-[500px] h-auto" />
        </div>
      </div>
      </div>
  )
  };