import { useState, useEffect } from "react";
import axios from "axios";

import ServiceFilterSidebar from "../components/ServiceFilterSidebar";
import ServiceCard from "../components/ServiceCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import EmptyProductGrid from "../components/EmptyProductGrid";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios
      .get("/api/services")
      .then((res) => {
        const data = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.services)
          ? res.data.services
          : [];

        setServices(data);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setServices([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredServices = selectedCategory
    ? services.filter((service) => service.category === selectedCategory)
    : services;

  return (
  <div className="flex px-6 py-4 gap-4">
    <ServiceFilterSidebar
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />

    <div className="grid grid-cols-3 gap-4 flex-1">
      {loading ? (
        Array.from({ length: 6 }).map((_, i) => (
          <LoadingSkeleton key={i} />
        ))
      ) : filteredServices.length === 0 ? (
        <EmptyProductGrid count={6} />
      ) : (
        filteredServices.map((service, i) => (
          <ServiceCard key={service.id || i} service={service} />
        ))
      )}
    </div>
  </div>
);

}
