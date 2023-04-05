import ThemeSwitcher from "./ThemeSwitcher";

export const rightSideMenuItems = (
  <div className="flex items-center space-x-2">
    <button className="hover:shadow-form rounded-md bg-[#6A64F1] dark:bg-gray-800 dark:hover:dark:bg-gray-900 py-3 px-8 text-center text-base font-semibold text-white outline-none">
      Login
    </button>
    <ThemeSwitcher />
  </div>
);

export const mainMenuItems = [
  { href: "/", label: "Home" },
  { href: "/buses", label: "Bus List" },
  { href: "/statistics", label: "Statistics" },
  { href: "/about", label: "About" },
  { href: "/contribute", label: "Contribute" },
  { href: "/disclaimer", label: "Disclaimer" },
];
