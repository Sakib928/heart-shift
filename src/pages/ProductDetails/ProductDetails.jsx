import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const details = useParams();
  console.log(details.id);
  const [product, setProduct] = useState([]);
  console.log(product);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/productDetails/${details.id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      });
  }, [details.id]);

  return (
    <div>
      <h1>This is product details</h1>
    </div>
  );
};

export default ProductDetails;
