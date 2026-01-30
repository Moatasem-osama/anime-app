"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full text-white shadow-sm">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center ">
          <Link href={"/"} className="">
          ANIME
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen((prev)=> !prev)}>
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={30} height={30} viewBox="0 0 24 24" style={{fill: '#fff'}}>
  <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z" />
</svg>

            ) : (

            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width={30}
              height={30}
              viewBox="0 0 50 50"
              style={{ fill: "#fff" }}
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
            </svg>
            )
            
            }
          </button>
          {isOpen && (
            <ul className="flex flex-col space-y-4 md:hidden absolute top-18 items-center justify-center left-0 w-full  p-4 shadow-md bg-black/60">
              <li>
                <Link className="text-white Capitalize " href={"/"}>
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white Capitalize " href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="text-white Capitalize " href={"/products"}>
                  Products
                </Link>
              </li>
            </ul>
          )}
          <ul className="hidden md:flex space-x-4 text-white">
            <li>
              <Link className="text-white Capitalize " href={"/"}>
                Home
              </Link>
            </li>
            <li>
              <Link className="text-white Capitalize " href={"/about"}>
                About
              </Link>
            </li>
            <li>
              <Link className="text-white Capitalize " href={"/products"}>
                Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
