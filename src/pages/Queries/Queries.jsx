import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Queries = () => {
  const { name } = useContext(AuthContext);
  return (
    <div>
      <h1>This is queries page</h1>
      <h1 className="text-4xl">{name}</h1>
    </div>
  );
};

export default Queries;
