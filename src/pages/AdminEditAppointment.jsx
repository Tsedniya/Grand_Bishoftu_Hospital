import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast"; // <-- import toast

const AdminEditAppointment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [appointment, setAppointment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    date: "",
    status: "pending",
  });

  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/appointments/${id}`, {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch appointment (status: ${res.status})`);
        }

        const data = await res.json();
        setAppointment(data);
        setFormData({
          patientName: data.patientName,
          patientEmail: data.patientEmail,
          patientPhone: data.patientPhone,
          date: new Date(data.date).toISOString().slice(0, 10),
          status: data.status,
        });
      } catch (err) {
        console.error(err);
        toast.error(err.message); // <-- toast error
        navigate("/admin/dashboard"); 
      } finally {
        setLoading(false);
      }
    };

    fetchAppointment();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/appointments/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to update appointment");

      toast.success("Appointment updated successfully"); // <-- toast success
      navigate("/admin/dashboard");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to update appointment"); // <-- toast error
    }
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-md mx-auto mt-25 p-6 bg-white rounded shadow">
      <Toaster position="top-right" /> {/* <-- add Toaster container */}
      <h2 className="text-2xl font-bold mb-4">Edit Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          name="patientEmail"
          value={formData.patientEmail}
          onChange={handleChange}
          placeholder="Patient Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="patientPhone"
          value={formData.patientPhone}
          onChange={handleChange}
          placeholder="Patient Phone"
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="pending">Pending</option>
          <option value="accepted">Accepted</option>
          <option value="declined">Declined</option>
        </select>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AdminEditAppointment;