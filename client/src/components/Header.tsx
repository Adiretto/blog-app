import Link from "next/link";
const categories = [
  { name: "React", slug: "react" },
  { name: "Web Development", slug: "web-dev" },
];
import React from "react";

const Header = () => {
  return (
    <div className="mx-auto container px-10 mb-8">
      <div className="border-b w-full inline-block border-white py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Blog App
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents"></div>
      </div>
    </div>
  );
};

export default Header;
