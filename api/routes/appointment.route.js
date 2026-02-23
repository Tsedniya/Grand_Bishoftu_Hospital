// routes/appointment.route.js
import express from 'express';
import { getAppointments,updateAppointmentStatus,createAppointment,deleteAppointment,updateAppointment } from '../controllers/appointment.controller.js';
import { verifyAdmin } from '../middleware/verifyAdmin.js';

const router = express.Router();

router.post("/book",createAppointment)

// GET all appointments for admin
router.get("/", verifyAdmin, getAppointments);
router.put("/:id/status", verifyAdmin, updateAppointmentStatus);
router.put("/:id", verifyAdmin,updateAppointment);
router.delete("/:id", verifyAdmin,deleteAppointment )

export default router;