export default function ServiceCard({ service }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition duration-200 ease-in-out">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">
        {service?.title || "Unnamed Service"}
      </h3>

      <p className="text-sm text-gray-600 mb-2 line-clamp-2">
        {service?.description || "No description provided."}
      </p>

      {service?.price && (
        <p className="text-sm text-blue-600 font-medium">KES {service.price}</p>
      )}
    </div>
  );
}
