"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuItem = () => {
  const pathName = usePathname();
  console.log("pathname is", pathName);
  return (
    <>
      <li>
        <Link href="/" className={`${pathName === "/" ? "bg-green-500 rounded-lg font-bold" : ""}`}>
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`${pathName === "/about" ? "bg-green-500 rounded-lg font-bold" : ""}`}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          href="/product"
          className={`${pathName === "/product" ? "bg-green-500 rounded-lg font-bold" : ""}`}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className={`${pathName === "/profile" ? "bg-green-500 rounded-lg font-bold" : ""}`}
        >
          Profile
        </Link>
      </li>
    </>
  );
};

export default MenuItem;
