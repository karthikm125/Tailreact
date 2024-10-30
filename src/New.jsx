import React from "react";
import laptopImage from './img/a.JPG';
import feature1Image from './img/a.JPG';
import feature2Image from './img/a.JPG';
import feature3Image from './img/a.JPG';

const New = () => {
  return (
    <div>

      {/* Hero Section */}
      <div className="bg-blue-500 text-white text-center py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold">HP VICTUS GAMING LAPTOP</h1>
              <p className="mt-4 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
              </p>
              <div className="mt-6">
                <button className="bg-white text-blue-500 font-semibold py-2 px-4 rounded mr-2">
                  Get Started
                </button>
                <button className="border border-white text-white font-semibold py-2 px-4 rounded">
                  Learn More
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={laptopImage}
                alt="Laptop"
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center">
          {/* Feature 1 */}
          <div className="w-full md:w-1/3 text-center mb-10">
            <img
              src={feature1Image}
              alt="Feature 1"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-bold">INTEL CORE I5</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ratione
              fugiat atque libero.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="w-full md:w-1/3 text-center mb-10">
            <img
              src={feature2Image}
              alt="Feature 2"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-bold">12th GENERATION</h3>
            <p className="mt-2">
              Lorem ipsum dolor sit amet.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="w-full md:w-1/3 text-center mb-10">
            <img
              src={feature3Image}
              alt="Feature 3"
              className="mx-auto mb-6"
            />
            <h3 className="text-xl font-bold">NVIDIA GeForce RTX 2050</h3>
            <p className="mt-2">
              Excepturi ipsa quasi dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
