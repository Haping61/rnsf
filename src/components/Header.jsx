import React from 'react';
import { IoMdLogIn } from 'react-icons/io';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 bg-blue-600 w-full">
      <div className="max-w-6xl h-24 mx-auto flex items-center max-[1300px]:flex-col max-[1300px]:py-12 max-[1300px]:h-auto max-[1300px]: gap-5 max-sm:h-44">
        <nav className="container mx-auto flex items-center h-full gap-10 max-[1300px]:justify-center">
          <a href="" className="text-white">
            Bank
          </a>
          <a href="" className="text-white">
            Buisness
          </a>
          <a href="" className="text-white">
            Cards
          </a>
          <a href="" className="text-white">
            About us
          </a>
        </nav>
        <div className="container mx-auto flex items-center justify-end h-full gap-5 max-[1300px]:justify-center">
          <h3 className="font-semibold text-emerald-100 text-[15px] max-sm:hidden">
            Sing in/Log in
          </h3>
          <IoMdLogIn color="#d1fae5" size="36px" />
        </div>
      </div>
    </header>
  );
}
