import { Link } from "react-router-dom";

const MyQueries = () => {
  return (
    <div>
      <div className="px-8 py-2 bg-[#00989E] mt-4">
        <div className="flex items-center mx-auto container justify-center md:justify-between py-2 text-white">
          <div>
            <span>
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
    </div>
  );
};

export default MyQueries;
