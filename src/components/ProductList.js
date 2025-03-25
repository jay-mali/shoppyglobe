import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import SearchBar from "./SearchBar";
import Loader from "./Loader";
import "./ProductList.css";

function ProductList() {
  const { products, loading, error } = useProducts();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <Loader />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="product-list">
        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
