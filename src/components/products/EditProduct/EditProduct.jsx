import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductsContext";
import "./EditProduct.css";

const EditProduct = () => {
  const { editedProduct, getOneProduct, oneProduct } = useProducts();
  const [product, setProduct] = useState({
    img: "",
    title: "",
    category: "",
    color: "",
    price: "",
    type: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
  }, []);

  useEffect(() => {
    setProduct(oneProduct);
  }, [oneProduct]);

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
    <>
      {product ? (
        <form className="transparent">
          <div className="form-inner">
            <h3>Edit product</h3>
            <label htmlFor="username">Title</label>
            <input
              type="text"
              id="username"
              placeholder=""
              value={product.title}
              name="title"
              onChange={handleInp}
            />
            <label htmlFor="password">Category</label>
            <input
              id="password"
              type="text"
              placeholder="Category"
              value={product.category}
              name="category"
              onChange={handleInp}
            />
            <label htmlFor="password">Price</label>
            <input
              id="password"
              type="text"
              placeholder="Price"
              value={product.price}
              name="price"
              onChange={handleInp}
            />
            <label htmlFor="password">Image</label>
            <input
              id="password"
              type="text"
              placeholder="Image"
              value={product.img}
              name="img"
              onChange={handleInp}
            />
            <label htmlFor="password">Color</label>
            <input
              id="password"
              type="text"
              placeholder="Color"
              value={product.color}
              name="color"
              onChange={handleInp}
            />
            <label htmlFor="password">Type</label>
            <input
              id="password"
              type="text"
              placeholder="Type"
              name="type"
              value={product.type}
              onChange={handleInp}
            />
            <button
              style={{ marginTop: "2rem" }}
              className="button-3"
              role="button"
              onClick={() => {
                editedProduct(product);
                navigate("/");
              }}
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <h1>...Loading</h1>
      )}
    </>
  );
};

export default EditProduct;
