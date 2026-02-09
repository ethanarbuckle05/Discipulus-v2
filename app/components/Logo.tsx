"use client";

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link
      href="/"
      className="z-[1000] hover:cursor-pointer duration-500 hover:opacity-50"
    >
      <Image
        src="/Discipulus - Logo.png"
        alt="Discipulus Logo"
        width={200}
        height={80}
        className="h-0 sm:h-[80px] w-auto invisible sm:visible"
      />
      <Image
        src="/Discipulus - Logo Small.png"
        alt="Discipulus Logo Small"
        width={125}
        height={50}
        className="h-[50px] w-auto sm:h-0 visible sm:invisible"
      />
    </Link>
  );
};
export default Logo;
