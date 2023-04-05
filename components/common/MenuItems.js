import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export const rightSideMenuItems = (
  <div className="flex items-center space-x-2">
    <button className="hover:shadow-form rounded-md bg-[#6A64F1] dark:bg-gray-800 dark:hover:dark:bg-gray-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
      Login
    </button>
    <ThemeSwitcher />
  </div>
);

export const mainMobileMenuItems = (
  <>
    <Link
      href="/"
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Home
    </Link>
    <Link
      href="/buses"
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Bus List
    </Link>
    <Link
      href="/statistics"
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Statistics
    </Link>
    <Link
      href="/about"
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      About
    </Link>

    <Link
      href="/contribute"
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Contribute
    </Link>
    <Link
      href="/disclaimer"
      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      Disclaimer
    </Link>
  </>
);
export const mainDesktopMenuItems = (
  <>
    <Link
      href="/"
      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
    >
      Home
    </Link>
    <Link
      href="/buses"
      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
    >
      Bus List
    </Link>
    <Link
      href="/statistics"
      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
    >
      Statistics
    </Link>
    <Link
      href="/about"
      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
    >
      About
    </Link>
    <Link
      href="/contribute"
      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
    >
      Contribute
    </Link>
    <Link
      href="/disclaimer"
      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
    >
      Disclaimer
    </Link>
  </>
);
