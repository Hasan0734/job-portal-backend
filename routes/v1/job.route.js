const express = require("express");
const jobController = require("../../controllers/job.controller");
// const jobController = '../../controllers/job.controller'

const router = express.Router();

router.post("/jobs", jobController.createJob);
router.get("/manager/jobs", jobController.getJobs);
router.get("/manager/jobs/:id", jobController.getJobById);
router.patch("/jobs/:id", jobController.updateJobById);

module.exports = router;
