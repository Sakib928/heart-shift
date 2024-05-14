import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllRecommendations = () => {
  const get = useParams();
  console.log(get.id);
  //   const [allRecs, setAllRecs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/viewRecommendations/${get.id}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [get.id]);
  return (
    <div>
      <h1>here should be all recommendation</h1>
    </div>
  );
};

export default AllRecommendations;
