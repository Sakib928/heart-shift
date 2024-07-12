import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
const Navbar = () => {
  const { user, theme, setTheme, userLogout, loading } =
    useContext(AuthContext);
  const handleTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const navigate = useNavigate();

  // console.log(user);

  const handleLogout = (e) => {
    e.preventDefault();
    userLogout().then(toast.success("Logged Out"));
    navigate("/");
  };

  const noUserNav = (
    <div className="hidden lg:block">
      <Link to={"/login"}>
        <button className="btn btn-outline text-white ml-6">Sign in</button>
      </Link>
    </div>
  );

  const userNav = (
    <>
      <div>
        <div className="dropdown dropdown-end z-[100]">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                data-tooltip-id="my-tooltip-1"
                alt="Tailwind CSS Navbar component"
                src={user?.photoURL}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="font-bold text-black dark:text-white">
                User : {user?.displayName}
              </a>
              <a onClick={handleLogout} className="font-bold text-red-600">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  return (
    <nav className="lg:sticky top-0 bg-[#00989E] dark:bg-gray-800 font-bold text-white md:py-3 z-50">
      <Toaster />
      <header className="p-4 dark:bg-gray-800 dark:text-white ">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
            to={"/"}
            rel="noopener noreferrer"
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
                className="flex items-center px-4 -mb-1 border-b-2"
              >
                Home
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to={"/queries"}
                rel="noopener noreferrer"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
              >
                Queries
              </NavLink>
            </li>
            {!loading && user ? (
              <>
                {" "}
                <li className="flex">
                  <NavLink
                    to={"/recommendations"}
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Recommendations
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to={"/myQueries"}
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    My Queries
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to={"/myRecommendations"}
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    My Recommendations
                  </NavLink>
                </li>
              </>
            ) : (
              ""
            )}
          </ul>
          <div className="items-center justify-end flex-shrink-0 flex">
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
                checked={theme === "light" ? false : true}
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
            <div>{!loading && user ? userNav : noUserNav}</div>
            <div className="dropdown dropdown-end lg:hidden z-[100]">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-transparent text-white border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="w-6 h-6 dark:text-gray-800"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-black dark:text-white text-end"
              >
                <li className="flex">
                  <NavLink
                    to={"/"}
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="flex">
                  <NavLink
                    to={"/queries"}
                    rel="noopener noreferrer"
                    className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                  >
                    Queries
                  </NavLink>
                </li>
                {user && (
                  <li className="flex">
                    <NavLink
                      to={"/recommendations"}
                      rel="noopener noreferrer"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      Recommendations
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li className="flex">
                    <NavLink
                      to={"/myQueries"}
                      rel="noopener noreferrer"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      My Queries
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li className="flex">
                    <NavLink
                      to={"/myRecommendations"}
                      rel="noopener noreferrer"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      My Recommendations
                    </NavLink>
                  </li>
                )}
                {!user && (
                  <li className="flex">
                    <NavLink
                      to={"/login"}
                      rel="noopener noreferrer"
                      className="flex items-center px-4 -mb-1 border-b-2 dark:border-"
                    >
                      Login
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
