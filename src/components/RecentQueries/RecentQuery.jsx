import { AiOutlineProduct } from "react-icons/ai";
import { MdOutlineBrandingWatermark } from "react-icons/md";
const RecentQuery = ({ card }) => {
  const {
    productImage,
    productBrand,
    queryTitle,
    boycottReason,
    productName,
    addingDate,
    userName,
    userPhoto,
  } = card;
  return (
    <div>
      <div className="w-full max-w-lg overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 mx-auto h-full">
        <img
          className="object-cover object-center w-full h-56"
          src={productImage}
          alt="avatar"
        />

        <div className="flex items-center px-6 py-3 bg-red-500">
          <h1 className="mx-3 text-lg font-semibold text-white">
            {productBrand}
          </h1>
        </div>

        <div className="px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white">
            {queryTitle}
          </h1>

          <p className="py-2 text-gray-700 dark:text-gray-400">
            {boycottReason}
          </p>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <AiOutlineProduct />
            <h1 className="px-2 text-sm font-bold">
              Product Name : {productName}
            </h1>
          </div>

          <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
            <MdOutlineBrandingWatermark />
            <h1 className="px-2 text-sm font-bold">
              Brand Name : {productBrand}
            </h1>
          </div>

          <div className="flex items-center mt-8 space-x-4">
            <img
              src={userPhoto}
              alt=""
              className="w-10 h-10 rounded-full dark:bg-gray-500"
            />
            <div>
              <h3 className="text-sm font-medium">{userName}</h3>
              <time
                dateTime="2021-02-18"
                className="text-sm dark:text-gray-600"
              >
                {addingDate}
              </time>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentQuery;
