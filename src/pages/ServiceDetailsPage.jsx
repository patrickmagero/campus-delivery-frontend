import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ServiceDetailsPage() {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/services/${id}`)
      .then((res) => {
        setService(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch service:", err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!service) return <p className="p-6">Service not found.</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{service.name}</h1>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-xl text-blue-700 mb-4">Ksh {service.price}</p>
      <Link to={`/services/${service.id}/book`}>
       <button
         onClick={() => addToCart({ ...service, quantity: 1 })}
         className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
      >
        Book Now
       </button>
      </Link>
    </div>
  );
}
