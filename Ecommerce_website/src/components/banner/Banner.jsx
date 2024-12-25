import React from "react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500  py-24  text-white">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Welcome to E-Commerce
        </h1>

        <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
          Discover high-quality products tailored to your needs. Shop now and
          enjoy exclusive offers.
        </p>

        <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          Shop Now
        </button>
        
      </div>
    </section>
  );
};

export default Banner;
