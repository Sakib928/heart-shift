import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";

const Recommendations = () => {
  const { user } = useContext(AuthContext);
  const userEmail = user.email;
  const [recForMe, setRecForMe] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://assignment-11-server-xi-nine.vercel.app/forMe?email=${userEmail}`
      )
      .then((res) => {
        // console.log(res.data);
        setRecForMe(res.data);
      });
  }, [userEmail]);

  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Reason</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {recForMe.map((item) => {
                const { rImage, rProductName, rAddingDate, rName, rReason } =
                  item;
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
                          <p>added by: {rName}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      {rReason}
                      <br />
                    </td>

                    <th>{rAddingDate}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
