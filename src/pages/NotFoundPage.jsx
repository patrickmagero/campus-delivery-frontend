import { useNavigate } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-50 text-center px-4">
      <div className="text-orange-500 text-6xl mb-4">
        <FaExclamationTriangle />
      </div>
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist or has been moved.</p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
        >
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
        >
          <FaHome /> Home
        </button>
      </div>
    </div>
  );
}
