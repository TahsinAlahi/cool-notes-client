import { Link, NavLink } from "react-router-dom";

function NavBar() {
  function activeClass({ isActive }: { isActive: boolean }): string {
    return `block py-2 px-3 md:text-white md:bg-transparent rounded md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500 hover:underline ${isActive ? "bg-blue-700 text-white lg:underline lg:font-semibold lg:text-yellow-200" : "bg-white text-black"}`;
  }

  return (
    <nav className="border-gray-200 bg-blue-600 dark:bg-gray-900">
      <div className="mx-auto flex max-w-screen-lg flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center whitespace-nowrap text-2xl font-semibold text-white dark:text-white">
            Cool Note App
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5 invert"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 lg:bg-blue-600 rtl:space-x-reverse">
            <li>
              <NavLink to="/" className={activeClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className={activeClass}>
                Privacy
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
