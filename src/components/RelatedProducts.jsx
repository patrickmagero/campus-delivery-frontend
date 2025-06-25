// components/RelatedProducts.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function RelatedProducts({ productId }) {
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${productId}/related`)
      .then((res) => {
        setRelated(res.data);
        setLoading(false);
      })
      .catch(() => {
        setRelated([]);
        setLoading(false);
      });
  }, [productId]);

  if (loading) return <div className="mt-12">Loading related products...</div>;
  if (related.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-4">People Also Viewed</h2>
      <div className="flex overflow-x-auto gap-4 pb-2">
        {related.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="min-w-[200px] bg-white p-4 rounded-lg border shadow hover:shadow-md transition"
          >
            <img
              src={item.image_url}
              alt={item.name}
              className="w-full h-40 object-cover rounded mb-2"
            />
            <p className="text-sm text-gray-500">{item.category}</p>
            <h3 className="text-md font-semibold truncate">{item.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-blue-600 font-semibold text-sm">
                Ksh {item.price}
              </span>
              {item.old_price && (
                <span className="line-through text-gray-400 text-xs">
                  Ksh {item.old_price}
                </span>
              )}
            </div>
            {item.rating && (
              <div className="text-sm text-yellow-500 mt-1">⭐ {item.rating}</div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
