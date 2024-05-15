import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Lottie from "lottie-react";
import noDataAnimation from "../../assets/images/nodata.json";
import MyQuery from "./MyQuery";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyQueries = () => {
  const { user } = useContext(AuthContext);
  const [myQueries, setMyQueries] = useState([]);
  // console.log(myQueries);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure
      .get(
        `https://assignment-11-server-xi-nine.vercel.app/myQueries/?email=${user.email}`
      )
      .then((res) => {
        setMyQueries(res.data);
      });
  }, [user.email, myQueries, axiosSecure]);
  const noData = (
    <>
      <Lottie
        animationData={noDataAnimation}
        className="h-[400px] md:h-[450px] w-[400px] md:w-[450px] mx-auto"
      ></Lottie>
      <h1 className="text-3xl text-center font-bold">
        You have not added any query yet
      </h1>
    </>
  );

  if (!myQueries.length) {
    return (
      <div>
        <div className="px-8 py-2 bg-[#00989E] mt-4">
          <div className="flex items-center mx-auto container justify-center md:justify-between py-2 text-white">
            <div>
              <span className="font-bold text-2xl">
                Add a product to the list and help consumers fight unethical
                business practices
              </span>
            </div>
            <Link to={"/addQuery"}>
              <button className="btn btn-outline text-white hover:bg-[#2BBFC3] ">
                Add Query
              </button>
            </Link>
          </div>
        </div>
        {noData}
      </div>
    );
  }

  return (
    <div>
      <div className="px-8 py-2 bg-[#00989E] mt-4">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2 text-white">
          <div>
            <span className="font-bold text-2xl">
              Add a product to the list and help consumers fight unethical
              business practices
            </span>
          </div>
          <Link to={"/addQuery"}>
            <button className="btn btn-outline text-white hover:bg-[#2BBFC3] ">
              Add Query
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {myQueries.map((query) => {
          return (
            <MyQuery
              key={query._id}
              query={query}
              myQueries={myQueries}
              setMyQueries={setMyQueries}
            ></MyQuery>
          );
        })}
      </div>
    </div>
  );
};

export default MyQueries;
