const express = require("express");
const { createJob, createInterview, getByStudent, getByInterviewer } = require("../controller/Controllers");

const router = express.Router();

router.post("/createjob", createJob)
router.post("/createInterview", createInterview)
router.get("/getByStudent/:studentId", getByStudent)
router.get("/getByStudent/:interviewerId", getByInterviewer)


module.exports = router;