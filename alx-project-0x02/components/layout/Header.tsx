
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-white py-4">
      <nav className="flex justify-center gap-8 text-lg">
        <Link href="/home" className="hover:text-blue-400">
          Home
        </Link>

        <Link href="/about" className="hover:text-blue-400">
          About
        </Link>

        <Link href="/posts" className="hover:text-blue-400">
          Posts
        </Link>
      </nav>
    </header>
  );
};

export default Header;
