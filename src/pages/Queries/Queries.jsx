import { useEffect, useState } from "react";
import axios from "axios";

import QueryCard from "./QueryCard";

const Queries = () => {
  const [allQueries, setAllQueries] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/allProducts").then((res) => {
      // console.log(res.data);
      setAllQueries(res.data);
    });
  }, []);
  // console.log(allQueries);
  const [cols, setCols] = useState(1);
  const handleView = (col) => {
    setCols(col);
  };
  return (
    <div>
      <div className="text-center mt-8">
        <div className="dropdown mx-auto">
          <div tabIndex={0} role="button" className="btn m-1">
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
      </div>
      <div className={`grid grid-cols-1 lg:grid-cols-${cols} gap-4`}>
        {allQueries.map((query) => {
          return <QueryCard key={query._id} query={query}></QueryCard>;
        })}
      </div>
    </div>
  );
};

export default Queries;
