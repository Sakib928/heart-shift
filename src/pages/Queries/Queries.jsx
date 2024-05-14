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
  return (
    <div>
      {allQueries.map((query) => {
        return <QueryCard key={query._id} query={query}></QueryCard>;
      })}
    </div>
  );
};

export default Queries;
