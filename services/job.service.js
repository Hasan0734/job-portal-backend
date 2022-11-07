const Job = require("../models/Job");

exports.createJobService = async (data) => {
  const job = await Job.create(data);
  return job;
};

exports.getJobsService = async () => {
  const jobs = await Job.find();
  return jobs;
};

exports.getJobByIdService = async (jobId) => {
    const job = await Job.findOne({ _id: jobId });
    
  return job;
};

exports.updateJobByIdService = async (jobId, data) => {
  const result = await Job.updateOne({ _id: jobId }, data, {
    runValidators: true,
  });

  return result;
};
