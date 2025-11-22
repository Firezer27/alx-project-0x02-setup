import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-800 text-white p-4">
      <nav className="flex gap-6 justify-center">
        <Link href="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link href="/home" className="hover:text-blue-400">
          /home
        </Link>
        <Link href="/about" className="hover:text-blue-400">
          /about
        </Link>
      </nav>
    </header>
  );
};

export default Header;
