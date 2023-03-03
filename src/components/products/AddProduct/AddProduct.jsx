import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../context/ProductsContext";
import "./AddProduct.css";

const AddProduct = () => {
  const { getProducts, addProduct } = useProducts();
  const [product, setProduct] = useState({
    img: "",
    title: "",
    category: "",
    color: "",
    price: "",
    type: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = {
        ...product,
        price: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };

  return (
    <form className="transparent">
      <div className="form-inner">
        <h3>Add product</h3>
        <label htmlFor="password">Image</label>
        <input
          id="password"
          type="text"
          placeholder=""
          name="img"
          onChange={handleInp}
        />
        <label htmlFor="username">Title</label>
        <input
          type="text"
          id="username"
          placeholder=""
          name="title"
          onChange={handleInp}
        />
        <label htmlFor="password">Category</label>
        <input
          id="password"
          type="text"
          placeholder=""
          name="category"
          onChange={handleInp}
        />
        <label htmlFor="password">Price</label>
        <input
          id="password"
          type="text"
          placeholder=""
          name="price"
          onChange={handleInp}
        />
        <label htmlFor="password">Color</label>
        <input
          id="password"
          type="text"
          placeholder=""
          name="color"
          onChange={handleInp}
        />
        <label htmlFor="password">Type</label>
        <input
          id="password"
          type="text"
          placeholder=""
          name="type"
          onChange={handleInp}
        />
        <button
          onClick={() => {
            addProduct(product);
            navigate("/");
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
