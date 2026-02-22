import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminAuth = () => {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false); 
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isSignup ? "/api/auth/signup" : "/api/auth/login";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
      credentials: "include", 
    });

    const data = await res.json();

    if (res.ok) {
      if (isSignup) {
        alert("Signup successful! Please login.");
        setIsSignup(false);
      } else {
        // Login successful → redirect to dashboard
        navigate("/admin/dashboard");
      }
    } else {
      alert(data.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        {/* Toggle buttons */}
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 rounded-l-xl font-semibold ${!isSignup ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 rounded-r-xl font-semibold ${isSignup ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsSignup(true)}
          >
            Signup
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignup ? "Receptionist Signup" : "Receptionist Login"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {isSignup && (
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          )}

          <input
            id="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <input
            id="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border w-full px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAuth;