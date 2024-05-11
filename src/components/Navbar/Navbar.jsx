import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
const Navbar = () => {
  const { theme, setTheme } = useContext(AuthContext);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <nav className="sticky top-0 bg-[#00989E] dark:bg-gray-800 font-bold text-white py-3 z-50">
      <header className="p-4 dark:bg-gray-800 dark:text-white ">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to={"/"}
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <div>
              <img className="h-[60px] md:h-[80px]" src={logo} alt="" />
              <h1 className="text-2xl font-bold">HeartShift</h1>
            </div>
          </Link>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink
                to={"/"}
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/queries"}
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                Queries
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/recommendations"}
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                Recommendations
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/myQueries"}
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                My Queries
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/myRecommendations"}
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                My Recommendations
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                onChange={handleTheme}
                value="synthwave"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
            <button className="btn btn-outline text-white ml-6">
              <Link to={"/login"}>Sign in</Link>
            </button>
            <button className="btn btn-outline text-white font-semibold dark:bg-violet-600 dark:text-gray-50 ml-6">
              <Link to={"/register"}>Sign up</Link>
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
