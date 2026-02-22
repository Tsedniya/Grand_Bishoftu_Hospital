// AdminDashboard.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch appointments on page load
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("/api/appointments", {
          credentials: "include", // include the cookie
        });
        if (!res.ok) throw new Error("Failed to fetch appointments");
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.log(err);
        alert("Error fetching appointments. Please login again.");
        navigate("/admin/auth");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [navigate]);

  // handle Accept / Decline
  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(`/api/appointments/${id}/status`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error("Failed to update status");
      const updated = await res.json();

      // update the appointment in state
      setAppointments((prev) =>
        prev.map((appt) => (appt._id === id ? updated : appt))
      );
    } catch (err) {
      console.log(err);
      alert("Error updating appointment status");
    }
  };

  // handle logout
  const handleLogout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    localStorage.removeItem("admin");
    navigate("/admin/auth");
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