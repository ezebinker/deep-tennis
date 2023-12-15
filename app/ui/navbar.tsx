'use client'

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed w-full p-4 border-b-2 flex align-center bg-white items-center">
      <Link href="/">
      <p className="text-xl font-bold text-black">Deep Tennis</p>

      </Link>
      <ul className="flex ml-5 items-center">
        <li className="flex">
          <Link className={clsx({
                'text-blue-600': pathname === "/",
              })} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={clsx({
                'text-blue-600': pathname === "/about",
              })} href="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
