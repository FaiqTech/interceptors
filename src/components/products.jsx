import Product from "./product.jsx";
import { useSelector } from "react-redux";

const Products = () => {
  const isOpen = useSelector((state) => state.home.isOpen);
  return (
    <div>
      <hr />
      <span>Products</span> IsOpen : {isOpen.toString()}
      <hr />
      <Product />
    </div>
  );
};

export default Products;
