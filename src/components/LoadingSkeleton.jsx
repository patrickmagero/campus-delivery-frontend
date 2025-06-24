export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse bg-white p-4 rounded-lg shadow">
      <div className="bg-gray-200 h-40 w-full rounded mb-4"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
