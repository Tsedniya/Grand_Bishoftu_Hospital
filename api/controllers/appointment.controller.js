import Appointment from '../models/appointment.model.js';

// For users to create a booking
export const createAppointment = async (req, res, next) => {
  try {
    const { patientName, patientEmail, patientPhone, date } = req.body;
    const appointment = new Appointment({ patientName, patientEmail, patientPhone, date });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
};

// For admin to fetch all appointments
export const getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    next(err);
  }
};



// UPDATE APPOINTMENT STATUS (accept / decline)
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // allow only accepted or declined
    if (!["accepted", "declined"].includes(status)) {
      return res.status(400).json("Invalid status value");
    }

    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json("Appointment not found");
    }

    appointment.status = status;
    await appointment.save();

    res.status(200).json(appointment);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
};


export const updateAppointment = async (req, res) =>{
  const { id } = req.params;
  const updateData = req.body; // can include patientName, status, etc.
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(id, updateData, { new: true });
    res.json(updatedAppointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await Appointment.findByIdAndDelete(id);
    res.json({ message: "Appointment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET a single appointment by ID
export const getAppointmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });
    res.json(appointment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};