import axios from "axios";
import { useEffect, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import RecommendForm from "../../components/recommendForm/RecommendForm";

const ProductDetails = () => {
  const details = useParams();
  //   console.log(details.id);
  const [product, setProduct] = useState([]);
//   console.log(product);
  const navigate = useNavigate();

  const handleViewRecs = () => {
    // console.log(details.id);
    navigate(`/viewRecommendations/${details.id}`);
  };

  const {
    productImage,
    productBrand,
    queryTitle,
    productName,
    boycottReason,
    addingDate,
    userName,
    userPhoto,
    recommendationCount,
    // userEmail,
  } = product;

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-xi-nine.vercel.app/productDetails/${details.id}`
      )
      .then((res) => {
        // console.log(res.data);
        setProduct(res.data);
      });
  }, [details.id]);

  return (
    <div>
      <div className="max-w-5xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mx-auto">
        <img
          className="object-cover w-full h-100"
          src={productImage}
          alt="Article"
        />

        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {productBrand}
            </span>{" "}
            <br />
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              Product : {productName}
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

          <div className="mt-4 flex justify-between">
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
            <div>
              <button onClick={handleViewRecs} className="btn">
                <FaRegHandPointRight />
                recommendations : {recommendationCount}
              </button>
            </div>
          </div>
        </div>
      </div>
      <RecommendForm product={product}></RecommendForm>
    </div>
  );
};

export default ProductDetails;
