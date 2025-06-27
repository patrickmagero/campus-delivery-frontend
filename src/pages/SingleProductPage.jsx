// pages/SingleProductPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Breadcrumb from "../components/Breadcrumb";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductInfo from "../components/ProductInfo";
import DeliverySidebar from "../components/DeliverySidebar";
import TabsSection from "../components/TabsSection";
import RelatedProducts from "../components/RelatedProducts";

export default function SingleProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        const data = res.data;

        // Normalize keys for consistent behavior
        const normalizedProduct = {
          ...data,
          id: data.product_id, // 👈 convert backend field to `id`
          image: data.images?.[0], // 👈 grab the first image if available
        };

        setProduct(normalizedProduct);
        setLoading(false);
      })
      .catch((err) => {
        setError("Product not found");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb productName={product.name} />

      <div className="flex flex-col lg:flex-row gap-8">
        <ProductImageGallery images={product.images} />
        <ProductInfo product={product} />
        <DeliverySidebar productId={product.id} product={product} />
      </div>

      <TabsSection product={product} />
      <RelatedProducts products={product.related_products} />
    </div>
  );
}
