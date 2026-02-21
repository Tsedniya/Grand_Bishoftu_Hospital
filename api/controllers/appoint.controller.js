import Appointment from '../models/Appointment.model.js';

export const createAppointment = async (req, res, next) => {
  try {
    const { patientName, patientEmail, patientPhone, date } = req.body;
    
    const appointment = new Appointment({
      patientName,
      patientEmail,
      patientPhone,
      date
    });

    await appointment.save();
    res.status(201).json(appointment);
  } catch (err) {
    next(err);
  }
};