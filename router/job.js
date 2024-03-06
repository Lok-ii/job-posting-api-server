const express = require("express");
const { postJob, getJob, updateJob, deleteJob } = require("../controller/job.js");
const router = express.Router();

router.post("", postJob)
router.get("", getJob);
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;