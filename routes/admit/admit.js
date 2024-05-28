const express = require("express");
const validation = require("../../middlewares/route-validation");
const { body, param } = require("express-validator");

const Patient = require("../../models/patient");
const router = express.Router();

const {
  sendAppointment,
  cancelAppointment,
  findAll,
  admitPatient,
  cancelAdmission,
  editAdmission,
} = require("../../controllers/admit");

router.post(
  "/send-appointment",
  [
    body("firstname").notEmpty(),
    body("lastname").notEmpty(),
    body("birthday").notEmpty(),
    body("gender").notEmpty(),
    body("address").notEmpty(),
    body("phone_number").notEmpty(),
    body("notes").notEmpty(),
  ],
  sendAppointment
);

router.delete(
  "/cancel-appointment",
  [body("patiendId").notEmpty()],
  cancelAppointment
);

router.get("/find-all", findAll);

//admit or accept

router.put(
  "/admit",
  [
    body("patiendId").notEmpty(),
    body("admission_date").notEmpty(),
    body("doctor_incharge").notEmpty(),
  ],
  admitPatient
);

router.put("/cancel", [body("patientId").notEmpty()], cancelAdmission);

router.put(
  "/edit",
  [
    body("patiendId").notEmpty(),
    body("admission_date").notEmpty(),
    body("doctor_incharge").notEmpty(),
  ],
  editAdmission
);

module.exports = router;