const { validationResult } = require("express-validator");

module.exports = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.files && req.files.eventOrganizerProfile) {
      const eventOrganizerProfile = req.files.eventOrganizerProfile[0];
    }
    const error = new Error("An error occured! Detailed explanation provided.");
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
  next();
};
