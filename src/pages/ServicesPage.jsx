import { useState, useEffect } from "react";
import axios from "axios";

import FilterSidebar from "../components/FilterSidebar";
import ServiceCard from "../components/ServiceCard";
import LoadingSkeleton from "../components/LoadingSkeleton";
import EmptyProductGrid from "../components/EmptyProductGrid";
import { filterItems } from "../utils/filterItems";
import ErrorPage from "./ErrorPage";

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Filters
  const [selectedFilters, setSelectedFilters] = useState({});
  const [priceRange, setPriceRange] = useState([500, 10000]);
  const [selectedRating, setSelectedRating] = useState(null);

  useEffect(() => {
    setLoading(true);
    setHasError(false); // Reset error state

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
        setHasError(true);
        setServices([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredServices = filterItems(
    services,
    selectedFilters,
    priceRange,
    selectedRating
  );

  if (hasError) {
    return <ErrorPage message="Unable to fetch services. Please try again later." />;
  }

  return (
    <div className="flex px-6 py-4 gap-4">
      <FilterSidebar
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
      />

      <div className="grid grid-cols-3 gap-4 flex-1">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => <LoadingSkeleton key={i} />)
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
