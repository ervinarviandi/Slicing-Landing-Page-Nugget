import React from "react";
import Image from "next/image";
import Logo from "../../public/Hero.png";
import { SiGooglemaps } from "react-icons/si";

const Hero = () => {
  return (
    <>
      <div>
        <div className="w-full mx-auto -mt-[70px]">
          <div className="lg:flex justify-between lg:px-0 px-4">
            <div className="mt-56 lg:ml-28 md:text-left text-center ">
              <h2 className="font-poppins text-4xl font-bold text-Cokelat lg:w-7/12 ">
                Eat bananas with a different flavor 🍌
              </h2>
              <p className="font-bold font-poppins lg:-ml-1 mx-auto  text-Gray mt-10 w-8/12">
                Choose the flavor you like chocolate, cheese, salty, and many
                more.
              </p>
              <div className="relative">
                <input
                  placeholder="kuningan, Jakarta"
                  className="border border-Cokelat border-1 py-3 px-6 w-10/12 text-Gray rounded-full shadow-md mt-10"
                ></input>
                <SiGooglemaps className=" absolute right-0 lg:mr-36 mr-16  -mt-8 text-Cokelat" />
              </div>

              <div className="lg:flex items-center justify-center mt-4 space-x-4 w-10/12 mx-auto lg:-ml-1 ">
                <button className="py-3 px-24 rounded-full bg-Cokelat text-white font-poppins">
                  SEND
                </button>
                <p className="font-poppins text-Cokelat">Or</p>
                <button className="py-3 px-24 rounded-full border text-Cokelat font-poppins">
                  PICK UP
                </button>
              </div>
            </div>
            <div className="w-5/12 ">
              <Image
                src={Logo}
                alt="Hero"
                className=" h-screen w-full object-cover lg:block hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
