import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  mainDesktopMenuItems,
  mainMobileMenuItems,
  rightSideMenuItems,
} from "../common/MenuItems";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="px-4 py-2 border-b border-gray-200 dark:border-gray-800 bg-white lg:flex lg:items-center lg:justify-between dark:bg-gray-900 dark:text-white">
      {/* Hamburger icon (mobile only) */}
      <div className="flex items-center justify-between lg:hidden">
        <button className="p-2 rounded-md" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="w-6 h-6 dark:text-blue-600" />
          ) : (
            <FaBars className="w-6 h-6 dark:text-blue-600" />
          )}
        </button>
        {/* <img src="/logo.svg" alt="Transport Route BD" className="w-32 h-auto" /> */}
        <div />
        {rightSideMenuItems}
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="block py-4 lg:hidden">{mainMobileMenuItems}</nav>
      )}

      {/* Desktop menu */}
      <nav className="hidden lg:flex lg:items-center lg:justify-end text-gray-700 dark:text-white">
        {mainDesktopMenuItems}
      </nav>
      <div className="hidden lg:block">{rightSideMenuItems}</div>
    </header>
  );
}
