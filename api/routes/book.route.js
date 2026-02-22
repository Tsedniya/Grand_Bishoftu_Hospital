import express from 'express';
import {createAppointment} from '../controllers/appointment.controller.js';
import { verifyAdmin } from "../middleware/verifyAdmin.js";


const router = express.Router()

router.post("/appointment",verifyAdmin,createAppointment)


export default router;