import { useEffect, useState } from "react";

const mockStatus = ["Order Placed", "Preparing", "On the way", "Delivered"];

export default function DeliveryProgress() {
  const [statusIndex, setStatusIndex] = useState(1); // simulate progress

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((prev) => Math.min(prev + 1, mockStatus.length - 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Track Your Order</h2>

      <div className="space-y-6">
        {mockStatus.map((step, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-4 rounded-lg ${
              index <= statusIndex ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full ${
                index <= statusIndex ? "bg-green-600" : "bg-gray-400"
              }`}
            />
            <span
              className={`font-medium ${
                index <= statusIndex ? "text-green-700" : "text-gray-500"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
