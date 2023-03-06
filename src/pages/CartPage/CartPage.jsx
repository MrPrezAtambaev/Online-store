import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// custom
import { useCart } from "../../context/CartContextProvider";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";
import "./CartPage.css";

export default function CartPage() {
  const {
    getCart,
    cart,
    changeProductCount,
    deleteProductFromCart,
    cartLength,
  } = useCart();

  const navigate = useNavigate();

  React.useEffect(() => {
    getCart();
  }, []);

  function cartCleaner() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
      <div className="container py-5 h-100 ">
        <div className="row d-flex justify-content-center align-items-center h-100 w-100">
          <div className="col-12">
            <div
              className="card card-registration card-registration-2"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-4">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">
                          Shopping Cart
                        </h1>
                        <h6
                          className="mb-0 text-muted"
                          style={{ color: "black" }}
                        >
                          {cartLength}
                        </h6>
                      </div>
                      <hr className="my-4" />
                      {cart?.products.map((row) => (
                        <div
                          key={row.item.id}
                          className="row mb-4 d-flex justify-content-between align-items-center"
                        >
                          <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                              src={row.item.img}
                              className="img-fluid rounded-3"
                              alt="Cotton T-shirt"
                            />
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-muted">{row.item.title}</h6>
                            <h6 className="text-black mb-0">
                              Category: {row.item.category}
                            </h6>
                            <h6 className="text-black mb-0">
                              Color: {row.item.color}
                            </h6>
                            <h6 className="text-black mb-0">
                              Type: {row.item.type}
                            </h6>
                          </div>
                          <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                              className="btn btn-link px-2"
                              onClick={() =>
                                changeProductCount(
                                  parseInt(row.count) - 1,
                                  row.item.id
                                )
                              }
                            >
                              <RemoveIcon fontSize="small" />
                            </button>

                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={row.count}
                              type="text"
                              className="form-control form-control-sm"
                              onChange={(e) =>
                                changeProductCount(
                                  parseInt(e.target.value),
                                  row.item.id
                                )
                              }
                            />

                            <button
                              className="btn btn-link px-2"
                              onClick={() =>
                                changeProductCount(
                                  parseInt(row.count) + 1,
                                  row.item.id
                                )
                              }
                            >
                              <AddIcon fontSize="small" />
                            </button>
                          </div>

                          <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0" style={{ color: "black" }}>
                              ${row.subPrice}
                            </h6>
                          </div>
                          <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <ClearIcon
                              style={{ color: "black" }}
                              onClick={() => deleteProductFromCart(row.item.id)}
                            />
                          </div>
                        </div>
                      ))}

                      <hr className="my-4" />

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <h6 style={{ color: "black" }}>
                            Total Price: ${cart?.totalPrice}
                          </h6>
                          <a href="/" className="text-body">
                            <i className="fas fa-long-arrow-alt-left me-2"></i>
                            Back to shop
                          </a>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-1">
                      <h3
                        className="fw-bold mb-5 mt-2 pt-1"
                        style={{ color: "black" }}
                      >
                        Summary
                      </h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5
                          className="text-uppercase"
                          style={{ color: "black" }}
                        >
                          Count:
                        </h5>
                        <h5 style={{ color: "black" }}>Price:</h5>
                      </div>
                      <h5
                        className="text-uppercase mb-3"
                        style={{ color: "black" }}
                      >
                        Give code
                      </h5>

                      <div className="mb-5">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="form3Examplea2"
                            placeholder="Enter your code"
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>

                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-5">
                        <h5
                          className="text-uppercase"
                          style={{ color: "black" }}
                        >
                          Total price:
                        </h5>
                        <h5 style={{ color: "black" }}>Number of products:</h5>
                      </div>

                      <button
                        type="button"
                        className="btn btn-dark btn-block btn-lg"
                        data-mdb-ripple-color="dark"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
