import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AllRecommendations = () => {
  const get = useParams();
  console.log(get.id);
  const [allRecs, setAllRecs] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/viewRecommendations/${get.id}`)
      .then((res) => {
        console.log(res.data);
        setAllRecs(res.data);
      });
  }, [get.id]);
  return (
    <div>
      {allRecs.map((item) => {
        const { rTitle, rReason, rProductName, rName, rImage } = item;
        return (
          <section key={item._id} className="bg-white dark:bg-gray-900">
            <div className="max-w-6xl px-6 py-10 mx-auto">
              <h1 className="mt-2 text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                {rTitle}
              </h1>

              <main className="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
                <div className="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>

                <div className="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                  <img
                    className="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl"
                    src={rImage}
                    alt="client photo"
                  />

                  <div className="mt-2 md:mx-6">
                    <div>
                      <p className="text-xl font-medium tracking-tight text-white">
                        {rProductName}
                      </p>
                      <p className="text-blue-200 ">{rName}</p>
                    </div>

                    <p className="mt-4 text-lg leading-relaxed text-white md:text-xl">
                      {" "}
                      {rReason}
                    </p>
                  </div>
                </div>
              </main>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default AllRecommendations;
