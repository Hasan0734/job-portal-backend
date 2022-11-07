const {
  createJobService,
  getJobsService,
  updateJobByIdService,
  getJobByIdService,
} = require("../services/job.service");


exports.getJobs = async (req, res) => {
  try {
    const jobs = await getJobsService();
    res.status(200).json({
      status: "success",
      message: "Successfully get the jobs",
      data: jobs,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't get the jobs",
      error: error.message,
    });
  }
};

exports.createJob = async (req, res) => {
  try {
    const job = await createJobService(req.body);

    res.status(200).json({
      status: "success",
      message: "Job created successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't create the job",
      error: error.message,
    });
  }
};

exports.getJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await getJobByIdService(id);
    res.status(200).json({
      status: "success",
      message: "Successfully get the job",
      job: job,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't get the job",
      error: error.message,
    });
  }
};

exports.updateJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await updateJobByIdService(id, req.body);

    if (!result.modifiedCount) {
      res.status(404).json({
        status: "fail",
        message: "Couldn't update the job",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Job created successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Couldn't update the job",
      error: error.message,
    });
  }
};
