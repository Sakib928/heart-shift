import { useContext } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const AddQuery = () => {
  const { user } = useContext(AuthContext);
  //   console.log(user);

  const handleAddQuery = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand = form.productBrand.value;
    const productImage = form.productImage.value;
    const queryTitle = form.queryTitle.value;
    const boycottReason = form.boycottReason.value;
    const userEmail = user.email;
    const userName = user?.displayName;
    const userPhoto = user?.photoURL;
    const addingTime = new Date();
    const year = addingTime.getFullYear();
    const month = String(addingTime.getMonth() + 1).padStart(2, "0");
    const day = String(addingTime.getDate()).padStart(2, "0");
    const hours = String(addingTime.getHours()).padStart(2, "0");
    const minutes = String(addingTime.getMinutes()).padStart(2, "0");
    const seconds = String(addingTime.getSeconds()).padStart(2, "0");
    const addingDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    const query = {
      productName,
      productBrand,
      productImage,
      queryTitle,
      boycottReason,
      userEmail,
      userName,
      userPhoto,
      addingDate,
      recommendationCount: 0,
    };
    // console.log(query);
    axios
      .post("https://assignment-11-server-xi-nine.vercel.app/addQuery", query)
      .then((res) => {
        // console.log(res.data);
        if (res.data.acknowledged) {
          toast.success("Added query successfully");
          form.reset();
        }
      });
  };

  return (
    <section className="p-6 dark:bg-gray-800 dark:text-slate-400">
      <Toaster />
      <form
        onSubmit={handleAddQuery}
        noValidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-800">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-bold text-3xl ">Add Product</p>
            <p className="text-sm">
              Add a product to the boycott list with valid reasons
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Product Name</span>
                </div>
                <input
                  name="productName"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Product Brand</span>
                </div>
                <input
                  name="productBrand"
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
                    Product Image-URL
                  </span>
                </div>
                <input
                  name="productImage"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label className="form-control w-full ">
                <div className="label">
                  <span className="label-text font-bold">Query TItle</span>
                </div>
                <input
                  name="queryTitle"
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="col-span-full ">
              <label htmlFor="bio" className="text-sm font-bold">
                Boycotting Reason Details
              </label>
              <textarea
                name="boycottReason"
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
                Add Query
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default AddQuery;
