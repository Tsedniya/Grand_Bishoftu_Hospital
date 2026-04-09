import express from "express";

const router = express.Router();

const departments = [
  "Emergency Services",
  "Internal Medicine",
  "Surgery",
  "Gynecology",
  "Pediatrics",
  "Laparoscopic Surgery",
  "Ophthalmology",
  "Orthopedic Surgery",
  "Urology",
  "Neurology",
  "Pathology",
  "Plastic Surgery",
  "Psychiatry",
  "Neurosurgery",
  "Physiotherapy",
  "CT Scan",
  "Laboratory",
  "Pharmacy",
  "X-Ray",
  "Ultrasound"
];

// GET all departments
router.get("/", (req, res) => {
  res.status(200).json(departments);
});

export default router;