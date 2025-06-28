import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../context/CartContext";

export default function ServiceBookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [service, setService] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    location: "",
    instructions: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/services/${id}`)
      .then((res) => setService(res.data))
      .catch((err) => {
        console.error("Failed to fetch service:", err);
      });
  }, [id]);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add service to cart (simulate for now)
    addToCart({ ...service, quantity: 1 });

    // Proceed to payment with form and service data
    navigate("/payment", {
      state: {
        type: "service",
        service,
        booking: form,
      },
    });
  };

  if (!service) {
    return <p className="p-6 text-gray-600">Loading service details...</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-6">
        Book: <span className="text-orange-500">{service.name}</span>
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="w-full border px-3 py-2 rounded"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full border px-3 py-2 rounded"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full border px-3 py-2 rounded"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="date"
          type="date"
          className="w-full border px-3 py-2 rounded"
          value={form.date}
          onChange={handleChange}
          required
        />

        <input
          name="time"
          type="time"
          className="w-full border px-3 py-2 rounded"
          value={form.time}
          onChange={handleChange}
        />

        <textarea
          name="location"
          rows="2"
          placeholder="Location (e.g. Hall 5 Room 402)"
          className="w-full border px-3 py-2 rounded"
          value={form.location}
          onChange={handleChange}
          required
        />

        <textarea
          name="instructions"
          rows="3"
          placeholder="Additional Instructions (optional)"
          className="w-full border px-3 py-2 rounded"
          value={form.instructions}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 w-full"
        >
          Continue to Payment
        </button>
      </form>
    </div>
  );
}
