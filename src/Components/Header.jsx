import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <header className="max-w-6xl mx-auto z-10 relative hidden lg:block">
      <div className="flex justify-between py-4 items-center">
        <Link href="">
          <h2 className="text-Cokelat font-poppins font-bold text-xl">
            🍌Nugget.
          </h2>
        </Link>
        <nav>
          <ul className="flex space-x-9 px-4 text-Cokelat items-center">
            <li>
              <Link href="/" className="font-poppins  hover:font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="font-poppin  hover:font-bold">
                About
              </Link>
            </li>
            <li>
              <Link href="/" className="font-poppins  hover:font-bold">
                Product
              </Link>
            </li>
            <li>
              <Link href="" className="font-poppins  hover:font-bold">
                Contact
              </Link>
            </li>
            <li>
              <button
                href=""
                className="font-poppins py-2 px-4 rounded-xl bg-Cokelat text-white "
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div
        className={
          nav
            ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-8"
            : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black  text-center ease-in  duration-300 z-8 dark:text-white   "
        }
      >
        <ul>
          <li className="p-4 text-2xl hover:text-pink-500 font-poppins text-white">
            <Link href="/">Home</Link>
          </li>
          <hr className="text-sky-500 w-[100%]" />
          <li className="p-4 text-2xl hover:text-pink-500 font-poppins text-white">
            <Link href="/about">About</Link>
          </li>
          <hr />
          <li className="p-4 text-2xl hover:text-pink-500 font-poppins text-white">
            <Link href="/work">Product</Link>
          </li>
          <hr />
          <li className="p-4 text-2xl hover:text-pink-500 font-poppins text-white">
            <Link href="/MyBlog">Contact</Link>
          </li>
          <hr />
        </ul>
      </div>
    </header>
  );
};

export default Header;
