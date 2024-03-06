const { log } = require("node:console");
const jobModel = require("../model/job.js");

const postJob = async (req, res) => {
  console.log(req.body);

  try {
    const newJob = await new jobModel(req.body);
    const newlyInsteredJob = await newJob.save();
    log(newlyInsteredJob);
    res.status(201).json({
      success: true,
      message: `Job successfully created with id: ${newlyInsteredJob._id}`,
      //   data: newlyInsteredJob,
    });
  } catch (error) {
    log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getJob = async (req, res) => {
  const allJobs = await jobModel.find({});
  res.json({
    success: true,
    message: "All jobs are here",
    data: allJobs,
  });
};

const updateJob = async (req, res) => {
  log(req.body);

  try {
    const job = await jobModel.findByIdAndUpdate(req.params.id, req.body);
    log(job);
    const findJob = await jobModel.findOne({_id: req.params.id});
    res.json({
      success: true,
      message: "Updated job with id: " + job.id,
      data: findJob,
    });
  } catch (error) {
    log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteJob = async (req, res) => {
    try {
        
    const job = await jobModel.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        message: "Deleted job with id: " + job.id,
    })
    } catch (error) {
        log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
};

module.exports = {
  postJob,
  getJob,
  updateJob,
  deleteJob,
};
