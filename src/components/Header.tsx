import { Code } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky px-4 top-0 z-50 lg:px-6 h-14 flex items-center border-b border-gray-800 backdrop-blur-md  ">
      <Link className="flex items-center justify-center md:px-40" href="#">
        <Code className="h-6 w-6 text-purple-400" />
        <span className="ml-2 text-lg font-bold text-white">CodeCanvas</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 md:px-40">
        <Link
          className="text-sm font-medium hover:text-purple-400 transition-colors"
          href="#"
        >
          Features
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-400 transition-colors"
          href="#"
        >
          Pricing
        </Link>
        <Link
          className="text-sm font-medium hover:text-purple-400 transition-colors"
          href="#"
        >
          Blog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
