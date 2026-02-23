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