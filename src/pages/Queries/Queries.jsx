import { useEffect, useRef, useState } from "react";
import axios from "axios";

import QueryCard from "./QueryCard";

const Queries = () => {
  const [allQueries, setAllQueries] = useState([]);
  const [showQueries, setShowQueries] = useState(allQueries);
  const searchRef = useRef();
  useEffect(() => {
    axios
      .get("https://assignment-11-server-xi-nine.vercel.app/allProducts")
      .then((res) => {
        // console.log(res.data);
        setAllQueries(res.data);
        setShowQueries(res.data);
      });
  }, []);
  // console.log(allQueries);
  const [cols, setCols] = useState(1);
  const handleView = (col) => {
    setCols(col);
  };

  const handleSearch = () => {
    const searchText = searchRef.current.value.toLowerCase();
    if (searchText === "") {
      setShowQueries(allQueries);
      return;
    }
    // console.log(searchText);
    const newShowQueries = showQueries.filter((query) => {
      const check = query.productName.toLowerCase();
      console.log(check);
      return check.includes(searchText);
    });
    // console.log(newShowQueries);
    // console.log(showQueries);
    setShowQueries(newShowQueries);
  };
  return (
    <div>
      <div className="text-center mt-8 ">
        <div className="dropdown mx-auto">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-[#00989E] text-white hover:bg-[#34BBC0]"
          >
            View
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleView(1)}>
              <a>One Column</a>
            </li>
            <li onClick={() => handleView(2)}>
              <a>Two Column</a>
            </li>
          </ul>
        </div>
        <div>
          <label className="input input-bordered flex items-center gap-2 max-w-sm mx-auto">
            <input
              ref={searchRef}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              onClick={handleSearch}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-5 h-5 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-${cols} gap-4`}>
        {showQueries.map((query) => {
          return <QueryCard key={query._id} query={query}></QueryCard>;
        })}
      </div>
    </div>
  );
};

export default Queries;
