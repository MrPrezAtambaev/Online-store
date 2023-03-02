import React, { useEffect } from "react";
import { useProducts } from "../../../context/ProductsContext";
import ProductCard from "../ProductCard/ProductCard";
import '../ProductCard/ProductCard.css'

const ProductList = () => {
  const {products, getProducts} = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className="products_db">
    {products.map(item => (
        <ProductCard card={item} key={item.id} />
        ))}
    </div>
  )
};

export default ProductList;
