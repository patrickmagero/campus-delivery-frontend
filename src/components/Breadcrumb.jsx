// src/components/Breadcrumb.jsx
import { Link, useLocation } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

export default function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 px-6 py-2 bg-white shadow-sm">
      <ol className="flex items-center space-x-2">
        <li>
          <Link to="/" className="flex items-center gap-1 text-blue-600 hover:underline">
            <AiFillHome className="text-lg" /> Home
          </Link>
        </li>

        {pathnames.map((segment, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <span className="text-gray-400">›</span>
              {isLast ? (
                <span className="capitalize text-gray-700">{decodeURIComponent(segment)}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="capitalize text-blue-600 hover:underline"
                >
                  {decodeURIComponent(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
