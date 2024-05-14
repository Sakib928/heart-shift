import { useNavigate } from "react-router-dom";
const QueryCard = ({ query }) => {
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/productDetails/${query._id}`);
  };

  const {
    productImage,
    productName,
    queryTitle,
    userPhoto,
    userName,
    addingDate,
    boycottReason,
    recommendationCount,
  } = query;
  return (
    <div>
      <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto mt-8 h-full">
        <img
          className="object-cover w-full h-64 "
          src={productImage}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {productName}
            </span>
            <p
              className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
              tabIndex="0"
              role="link"
            >
              {queryTitle}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {boycottReason}
            </p>
          </div>

          <div className="mt-4 flex flex-col md:flex-row justify-between">
            <div className="flex items-center">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={userPhoto}
                  alt="Avatar"
                />
                <p
                  className="mx-2 font-semibold text-gray-700 dark:text-gray-200"
                  tabIndex="0"
                  role="link"
                >
                  {userName}
                </p>
              </div>
              <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">
                {addingDate}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleDetails}
                className="btn text-lg bg-[#00989E] text-white hover:bg-[#38B8BC]"
              >
                recommend
              </button>
              <button className="btn text-lg bg-[#00989E] text-white hover:bg-red-500">
                recommendations : {recommendationCount}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryCard;
