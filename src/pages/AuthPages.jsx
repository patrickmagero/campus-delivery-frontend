import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(true);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    dob: "",
    zipcode: "",
    address: "",
  });
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (step === 2) otpRefs.current[0]?.focus();
  }, [step]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOtpInput = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 1 && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
    if (value === "" && index > 0 && e.nativeEvent.inputType === "deleteContentBackward") {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleRegisterStep = async () => {
    try {
      const { data } = await axios.post("/api/users/register", formData);
      if (data.otpSent) {
        alert("OTP sent! Please check your phone/email.");
        setStep(2);
      }
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.error || err.message));
    }
  };

  const handleOtpSubmit = async () => {
    const code = otp.join("");
    if (code.length !== 6) {
      alert("Please enter the full 6-digit OTP.");
      return;
    }

    try {
      const { data } = await axios.post("/api/users/verify-otp", {
        email: formData.email,
        otp_code: code,
      });

      if (data.token) {
        localStorage.setItem("token", data.token);
        alert("OTP verified successfully!");
        setStep(3);
      }
    } catch (err) {
      alert("OTP verification failed: " + (err.response?.data?.error || err.message));
    }
  };

  const handlePasswordSubmit = async () => {
    if (!formData.password || formData.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    try {
      const { data } = await axios.post("/api/users/set-password", {
        email: formData.email,
        password: formData.password,
      });
      if (data.success) {
        alert("Password set successfully!");
        setStep(4);
      }
    } catch (err) {
      alert("Failed to set password: " + (err.response?.data?.error || err.message));
    }
  };

  const renderForm = () => {
    if (isLogin) {
      return (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email or Phone</label>
            <input type="text" className="mt-1 w-full p-2 border rounded-lg" placeholder="you@example.com or 07XXXXXXXX" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="mt-1 w-full p-2 border rounded-lg" placeholder="••••••••" />
          </div>
          <div className="text-sm text-right">
            <Link to="/forgot-password" className="text-orange-500 hover:underline">Forgot password?</Link>
          </div>
        </>
      );
    }

    if (step === 1) {
      return (
        <>
          <div className="grid grid-cols-2 gap-4">
            <input name="first_name" value={formData.first_name} onChange={handleChange} type="text" placeholder="First Name" className="p-2 border rounded" />
            <input name="last_name" value={formData.last_name} onChange={handleChange} type="text" placeholder="Last Name" className="p-2 border rounded" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <select name="gender" value={formData.gender} onChange={handleChange} className="p-2 border rounded">
              <option value="">Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Phone" className="p-2 border rounded" />
          </div>
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="p-2 w-full border rounded" />
          <div className="grid grid-cols-2 gap-4">
            <input name="country" value={formData.country} onChange={handleChange} type="text" placeholder="Country" className="p-2 border rounded" />
            <input name="city" value={formData.city} onChange={handleChange} type="text" placeholder="City" className="p-2 border rounded" />
          </div>
          <input name="address" value={formData.address} onChange={handleChange} type="text" placeholder="Address" className="p-2 w-full border rounded" />
          <div className="grid grid-cols-2 gap-4">
            <input name="dob" value={formData.dob} onChange={handleChange} type="date" className="p-2 border rounded" />
            <input name="zipcode" value={formData.zipcode} onChange={handleChange} type="text" placeholder="Zipcode" className="p-2 border rounded" />
          </div>
          <button onClick={handleRegisterStep} className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">Continue</button>
        </>
      );
    }

    if (step === 2) {
      return (
        <>
          <p className="text-sm text-gray-600 mb-2">Enter the 6-digit OTP sent to your phone/email</p>
          <div className="flex justify-center gap-2 mb-4">
            {otp.map((val, i) => (
              <input
                key={i}
                maxLength={1}
                ref={(el) => (otpRefs.current[i] = el)}
                onChange={(e) => handleOtpInput(e, i)}
                value={val}
                type="text"
                className="w-10 h-12 text-center border rounded-lg text-lg"
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleOtpSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg"
          >
            Verify OTP
          </button>
        </>
      );
    }

    if (step === 3) {
      return (
        <>
          <input name="password" value={formData.password} onChange={handleChange} type="password" placeholder="Create Password" className="p-2 w-full border rounded" />
          <input name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} type="password" placeholder="Confirm Password" className="p-2 w-full border rounded mt-2" />
          <button onClick={handlePasswordSubmit} className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">Set Password</button>
        </>
      );
    }

    if (step === 4) {
      return (
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold text-green-600">Registration Successful!</p>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            onClick={() => navigate("/")}
          >
            Go to Homepage
          </button>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Welcome Back!" : step === 4 ? "Success" : "Create Your Account"}
        </h2>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {renderForm()}
        </form>
        <p className="text-sm text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setStep(1);
            }}
            className="ml-1 text-orange-500 hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
