import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../../context/ProductsContext";
import { useCart } from "../../../context/CartContextProvider";
import { Parallax } from "react-parallax";
import "./ProductDetails.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const ProductDetails = () => {
  const { getOneProduct, oneProduct } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProductToCart, checkProductInCart } = useCart();
  const [value, setValue] = useState(1);

  useEffect(() => {
    getOneProduct(id);
  }, []);

  const handleOnChange = (event) => {
    const newValue = event.target.value;
    if (newValue > 100) {
      setValue(100);
    } else if (newValue < 1) {
      setValue(1);
    } else {
      setValue(newValue);
    }
  };
  return (
    <Parallax
      bgImage="https://images.pexels.com/videos/3045163/free-video-3045163.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      bgImageAlt="background image"
      strength={150}
      blur={1}
    >
      <div className="container my-5">
        {oneProduct ? (
          <>
            <div className="card details-card p-0">
              <a href="/" className="back-link">
                <ArrowBackIosIcon />
              </a>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <img
                    className="img-fluid details-img"
                    src={oneProduct.img}
                    alt=""
                  />
                </div>
                <div
                  className="col-md-6 col-sm-12 description-container p-5"
                  style={{ color: "black" }}
                >
                  <div className="main-description">
                    <p className="product-category mb-0">{oneProduct.type}</p>
                    <h3>{oneProduct.title}</h3>
                    <hr />
                    <p className="product-price">${oneProduct.price}</p>
                    <p className="product-price">Color: {oneProduct.color}</p>
                    <form className="add-inputs" method="post">
                      <input
                        type="number"
                        className="form-control"
                        id="cart_quantity"
                        name="cart_quantity"
                        value={value}
                        min={1}
                        max={100}
                        step={1}
                        onChange={handleOnChange}
                      />
                      <button
                        name="add_to_cart"
                        type="submit"
                        className="btn btn-success btn-lg"
                        onClick={() => {
                          addProductToCart(oneProduct);
                          navigate("/cart");
                        }}
                      >
                        Add to cart
                      </button>
                    </form>
                    <form className="add-inputs" method="post">
                      <button
                        name="add_to_cart"
                        type="submit"
                        className="btn btn-primary btn-lg"
                        onClick={() => navigate(`/edit/${oneProduct.id}`)}
                      >
                        Edit
                      </button>
                    </form>
                    <div style={{ clear: "both" }}></div>
                    <hr />
                    <p className="product-title mt-4 mb-1">
                      About this product
                    </p>
                    <p className="product-description mb-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quis assumenda voluptatem tempore dolor quod. Expedita,
                      id, minus similique dolor sed adipisci aliquam natus amet
                      doloremque delectus cupiditate? Sint, quasi, ad
                      necessitatibus omnis quaerat tenetur corporis porro aut,
                      natus ex ab id vel odit veniam fugiat temporibus aperiam
                      quia rem minima!
                    </p>
                    <hr />
                    <p className="product-title mt-4 mb-1">
                      Share this product
                    </p>
                    <ul className="social-list">
                      <li>
                        <a href="#">
                          <FacebookIcon />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <TwitterIcon />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <InstagramIcon />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </Parallax>
  );
};

export default ProductDetails;
