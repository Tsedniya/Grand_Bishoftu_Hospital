import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch appointments function
  const fetchAppointments = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/appointments", {
        method: "GET",
        credentials: "include", // sends cookies with request
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        if (res.status === 401) throw new Error("Not authenticated. Please login as admin.");
        if (res.status === 403) throw new Error("Token invalid. Access denied.");
        throw new Error(`Request failed with status ${res.status}`);
      }

      const data = await res.json();
      setAppointments(data);
    } catch (err) {
      console.error(err);
      alert(err.message);
      navigate("/admin/auth"); // redirect if unauthorized
    } finally {
      setLoading(false);
    }
  };

  // Fetch on mount + poll every 5 seconds
  useEffect(() => {
    fetchAppointments();
    const interval = setInterval(fetchAppointments, 5000);
    return () => clearInterval(interval);
  }, [navigate]);

  // Update appointment status
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`http://localhost:3000/api/appointments/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status }),
      });

      if (!res.ok) throw new Error("Failed to update status");
      const updated = await res.json();

      setAppointments((prev) =>
        prev.map((appt) => (appt._id === id ? updated : appt))
      );
    } catch (err) {
      console.error(err);
      alert("Error updating appointment status");
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      localStorage.removeItem("admin");
      navigate("/admin/auth");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Receptionist Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <table className="w-full border-collapse bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Phone</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id} className="border-b last:border-b-0">
              <td className="p-3">{appt.patientName}</td>
              <td className="p-3">{appt.patientEmail}</td>
              <td className="p-3">{appt.patientPhone}</td>
              <td className="p-3">{new Date(appt.date).toLocaleDateString()}</td>
              <td className="p-3 capitalize">{appt.status}</td>
              <td className="p-3 space-x-2">
                {appt.status === "pending" && (
                  <>
                    <button
                      onClick={() => updateStatus(appt._id, "accepted")}
                      className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => updateStatus(appt._id, "declined")}
                      className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                    >
                      Decline
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;