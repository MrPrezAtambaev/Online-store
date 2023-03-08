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
                          Items: {cartLength}
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
                              style={{ color: "black", cursor: "pointer" }}
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
                </div>
                <div className="col-lg-6 px-2 py-4">
                  <h3
                    className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    style={{ color: "black" }}
                  >
                    Payment
                  </h3>

                  <form className="mb-5">
                    <div className="form-outline mb-5">
                      <label
                        className="form-label"
                        htmlFor="typeText"
                        style={{ color: "black" }}
                      >
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="typeText"
                        className="form-control form-control-lg"
                        siez="17"
                        value="1234 5678 9012 3457"
                        minlength="19"
                        maxlength="19"
                      />
                    </div>

                    <div className="form-outline mb-5">
                      <label
                        className="form-label"
                        htmlFor="typeName"
                        style={{ color: "black" }}
                      >
                        Name on card
                      </label>
                      <input
                        type="text"
                        id="typeName"
                        className="form-control form-control-lg"
                        siez="17"
                        value="John Smith"
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="typeExp"
                            style={{ color: "black" }}
                          >
                            Expiration
                          </label>
                          <input
                            type="text"
                            id="typeExp"
                            className="form-control form-control-lg"
                            value="01/22"
                            size="7"
                            minlength="7"
                            maxlength="7"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-5">
                        <div className="form-outline">
                          <label
                            className="form-label"
                            htmlFor="typeText"
                            style={{ color: "black" }}
                          >
                            Cvv
                          </label>
                          <input
                            type="password"
                            id="typeText"
                            className="form-control form-control-lg"
                            value="&#9679;&#9679;&#9679;"
                            size="1"
                            minlength="3"
                            maxlength="3"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-primary btn-block btn-lg"
                      style={{ color: "white" }}
                      onClick={cartCleaner}
                    >
                      Buy now
                    </button>

                    <h5
                      className="fw-bold mb-5"
                      style={{ position: "absolute", bottom: "0" }}
                    >
                      <a href="/" style={{ color: "black" }}>
                        <i className="fas fa-angle-left me-2"></i>Back to
                        shopping
                      </a>
                    </h5>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
