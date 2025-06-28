import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.id}`}>
      <div className="border rounded-lg p-4 shadow-sm bg-white hover:shadow-md transition cursor-pointer">
        <h2 className="text-lg font-semibold mb-2">{service.name}</h2>
        <p className="text-sm text-gray-600 mb-2">{service.description}</p>
        <p className="text-md font-bold text-blue-700">Ksh {service.price}</p>
      </div>
    </Link>
  );
}
