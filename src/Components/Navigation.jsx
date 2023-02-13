import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";

const Navigation = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#transparent");
        setTextColor("#ffffff");
      } else {
        setColor("#transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div className="max-w-6xl mx-auto z-10 relative fixed  ">
      <div className="lg:flex  lg:block justify-between py-4 items-center ">
        {/* Mobile Button */}

        <Link href="">
          <h2 className="text-Cokelat font-poppins font-bold text-xl lg:block hidden">
            🍌Nugget.
          </h2>
        </Link>
        <ul
          // style={{ color: `${textColor}` }}
          className="flex space-x-9 px-4 text-Cokelat items-center  "
        >
          <li className="lg:block hidden">
            <Link href="/" className="font-poppins  hover:font-bold">
              Home
            </Link>
          </li>
          <li className="lg:block hidden">
            <Link href="/about" className="font-poppins  hover:font-bold">
              About
            </Link>
          </li>
          <li className="lg:block hidden">
            <Link href="/product" className="font-poppins  hover:font-bold">
              Product
            </Link>
          </li>
          <li className="lg:block hidden">
            <Link href="/contact" className="font-poppins  hover:font-bold">
              Contact
            </Link>
          </li>
          <li>
            <button
              href=""
              className="font-poppins py-2 px-4 rounded-xl bg-Cokelat text-white lg:block hidden "
            >
              Login
            </button>
          </li>

          <Link href="" className=" absolute">
            <h2 className="text-Cokelat  font-poppins font-bold text-xl lg:hidden block">
              🍌Nugget.
            </h2>
          </Link>

          <div
            onClick={handleNav}
            className=" block sm:hidden  z-50 text-Cokelat absolute right-10"
          >
            {nav ? (
              <GrFormClose className="w-6 h-6 text-Cokelat" />
            ) : (
              <RxHamburgerMenu
                className="w-6 h-6 text-Cokelat"
                //  style={{ color: `${textColor}` }}
              />
            )}
          </div>
        </ul>

        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-9/12 h-screen  text-center bg-Cokelat ease-in duration-300 z-8"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in  duration-300 z-8 text-white   "
          }
        >
          <ul>
            <li className="p-4 text-2xl hover:text-Orange font-poppins text-white">
              <Link href="/">Home</Link>
            </li>
            <hr className="text-sky-500 w-[100%]" />
            <li className="p-4 text-2xl hover:text-Orange font-poppins text-white">
              <Link href="/about">About</Link>
            </li>
            <hr />
            <li className="p-4 text-2xl hover:text-Orange font-poppins text-white">
              <Link href="/work">Product</Link>
            </li>
            <hr />
            <li className="p-4 text-2xl hover:text-Orange font-poppins text-white">
              <Link href="/MyBlog">Contact</Link>
            </li>
            <hr />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
