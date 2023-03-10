import React, { useEffect } from "react";
import { useProducts } from "../../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";
import "../ProductCard/ProductCard.css";
import Pagination from "@mui/material/Pagination";
import ModalProduct from "../../UI/Modal/ModalProduct";

const ProductList = () => {
  const { products, getProducts, page, setPage } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const itemsOnPage = 3;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  }
console.log(currentData()[0]?.id);

  return (
    <>
      <div className="products_db">
        {products ? (
          currentData().map((item, index) => (
            <>
              <ProductCard key={item.id} card={item} />
              <div style={{ display: "block", marginTop: "36rem" }}>
                <ModalProduct key={index} card={item} />
              </div>
            </>
          ))
        ) : (
          <h3>Loading...</h3>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "3rem",
        }}
        className="pagin"
      >
        <Pagination
          style={{ background: "transparent", color: "white" }}
          count={count}
          page={page}
          onChange={handlePage}
        />
      </div>
    </>
  );
};

export default ProductList;
