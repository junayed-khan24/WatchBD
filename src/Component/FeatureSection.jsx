import React from "react";
import banner from "../../src/assets/feature.png"; //

const FeatureSection = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={banner}
            alt="Premium Watch"
            className=" rounded-xl shadow-xl hover:scale-105 transition duration-300"
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Designed for <span className="text-red-500">Modern Lifestyle</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Experience precision, durability, and elegance combined into one
            premium timepiece. Built for those who value both style and
            performance.
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              High-quality stainless steel body
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              Water resistant up to 50 meters
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              Long-lasting battery performance
            </li>
          </ul>

          <button className="btn btn-error mt-8 text-white">
            Learn More
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-20">

       

        {/* Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Designed for <span className="text-red-500">Modern Lifestyle</span>
          </h2>

          <p className="mt-4 text-gray-600">
            Experience precision, durability, and elegance combined into one
            premium timepiece. Built for those who value both style and
            performance.
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              High-quality stainless steel body
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              Water resistant up to 50 meters
            </li>
            <li className="flex items-center gap-3">
              <span className="text-red-500 text-xl">✔</span>
              Long-lasting battery performance
            </li>
          </ul>

          <button className="btn btn-error mt-8 text-white">
            Learn More
          </button>
        </div>
         {/* Image */}
        <div className="flex justify-center">
          <img
            src={banner}
            alt="Premium Watch"
            className=" rounded-xl shadow-xl hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
