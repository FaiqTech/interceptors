import { useState } from "react";
import { useSelector } from "react-redux";

const Product = () => {
  const [productIsOpen, setProductIsOpen] = useState(false);
  const isOpen = useSelector((state) => state.home.isOpen);
  return <div>Product component : {isOpen.toString()}</div>;
};

export default Product;
