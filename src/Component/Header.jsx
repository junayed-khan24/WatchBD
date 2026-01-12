import React from "react";
import banner from "../../src/assets/images.jfif"; // 

const Header = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-white px-6 md:px-16 max-w-2xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          "Unlike diamonds,<br />
          watches are practical"
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-base">
          Nulla non ex elementum ante ultrices facilisis.
          In sollicitudin molestie lectus id congue.
          Donec arcu justo, consequat.
        </p>

        <button className="btn btn-error mt-6 text-white">
          Explore Collection
        </button>
      </div>
    </section>
  );
};

export default Header;
