import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

const MyRecommendations = () => {
  const { user } = useContext(AuthContext);
  const matchEmail = user.email;
  const [myRecs, setMyRecs] = useState([]);
  console.log(myRecs);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/myRecommendation?email=${matchEmail}`)
      .then((res) => {
        // console.log(res.data);
        setMyRecs(res.data);
      });
  }, [matchEmail]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myRecs.map((item) => {
              const { rImage, rProductName, rAddingDate, _id } = item;
              const handleDelete = () => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You won't be able to revert this!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    axios
                      .delete(
                        `http://localhost:5000/recommendation/${_id}?link=${item.linkID}`
                      )
                      .then((res) => {
                        if (res.data.deletedCount) {
                          Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success",
                          });
                          const remaining = myRecs.filter(
                            (item) => item._id !== _id
                          );
                          setMyRecs(remaining);
                        }
                      });
                  }
                });
              };
              return (
                <tr key={item._id}>
                  <th></th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={rImage}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{rProductName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {rAddingDate}
                    <br />
                  </td>

                  <th>
                    <button
                      onClick={handleDelete}
                      className="btn btn-ghost btn-xs text-xl"
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecommendations;
