import { useState } from "react";
import { Link } from "react-router-dom";

export function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSendCode = () => {
    // TODO: integrate with backend
    alert("Code sent to " + email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Forgot Password</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded-lg"
              placeholder="you@example.com"
            />
          </div>
          <button
            type="button"
            onClick={handleSendCode}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-200"
          >
            Send Code
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don't have an account?
          <Link to="/auth" className="ml-1 text-orange-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
