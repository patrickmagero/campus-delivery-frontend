import { useState, useEffect } from "react";
import axios from "axios";

import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import EmptyProductGrid from "../components/EmptyProductGrid";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/api/products")
      .then((res) => {
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.products)
          ? res.data.products
          : [];

        setProducts(data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setProducts([]); // fallback
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="flex px-6 py-4 gap-4">
      <FilterSidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <div className="grid grid-cols-3 gap-4 flex-1">
        {loading ? (
          Array.from({ length: 9 }).map((_, i) => (
            <LoadingSkeleton key={i} />
          ))
        ) : filteredProducts.length === 0 ? (
          <EmptyProductGrid count={6} />
        ) : (
          filteredProducts.map((product, i) => (
            <ProductCard key={product.id || i} product={product} />
          ))
        )}
      </div>
    </div>
  );
}
