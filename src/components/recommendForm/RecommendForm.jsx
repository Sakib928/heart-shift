import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const RecommendForm = ({ product }) => {
  const { user } = useContext(AuthContext);
  const handleAddRecommendation = (e) => {
    e.preventDefault();
    const form = e.target;
    const rTitle = form.rTitle.value;
    const rProductName = form.rProductName.value;
    const rImage = form.rImage.value;
    const rReason = form.rReason.value;
    const linkID = product._id;
    const queryTitle = product.queryTitle;
    const productName = product.productName;
    const userName = product.userName;
    const userEmail = product.userEmail;
    const rEmail = user.email;
    const rName = user.displayName;
    const addingTime = new Date();
    const year = addingTime.getFullYear();
    const month = String(addingTime.getMonth() + 1).padStart(2, "0");
    const day = String(addingTime.getDate()).padStart(2, "0");
    const rAddingDate = `${year}-${month}-${day}`;
    const rProduct = {
      rTitle,
      rProductName,
      rImage,
      rReason,
      linkID,
      queryTitle,
      productName,
      userName,
      userEmail,
      rEmail,
      rName,
      rAddingDate,
    };
    // console.log(rProduct);
    axios
      .post("http://localhost:5000/recommendProduct", rProduct)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("added recommendation");
          form.reset();
        }
      });
  };

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-gray-900 max-w-5xl mx-auto mt-6 rounded-lg">
      <Toaster />
      <form
        onSubmit={handleAddRecommendation}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-800 dark:text-white">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-bold text-3xl ">
              Recommend an alternative Product
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">
                    Recommendation Title
                  </span>
                </div>
                <input
                  name="rTitle"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">
                    Recommended product Name
                  </span>
                </div>
                <input
                  name="rProductName"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">
                    Recommended Product Image
                  </span>
                </div>
                <input
                  name="rImage"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full ">
              <label htmlFor="bio" className="text-sm font-bold">
                Recommendation reason
              </label>
              <textarea
                name="rReason"
                id="bio"
                placeholder=""
                className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 input input-bordered h-[80px]"
              ></textarea>
            </div>
            <div className="col-span-full">
              <button
                type="submit"
                className="btn btn-block  bg-[#00989E] border-none text-white hover:bg-[#2BBFC3]"
              >
                Add Recommendation
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default RecommendForm;
