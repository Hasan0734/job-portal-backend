const mongoose = require("mongoose");
const validator = require("validator");

const companySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a company name for this job."],
      trim: true, //remove space after and before
      minLength: [3, "Name must be at least 3 charcters."],
      maxLength: [100, "Name is  too large"],
    },
    website: {
      type: String,
      required: true,
      validate: [validator.isURL, "Please provide valid url"],
    },
    industry: {
      type: String,
      required: true,
    },
    facebook: {
      type: String,
      validate: [validator.isURL, "Please provide valid url"],
    },
    twitter: {
      type: String,
      validate: [validator.isURL, "Please provide valid url"],
    },
    instagram: {
      type: String,
      validate: [validator.isURL, "Please provide valid url"],
    },
    linkedin: {
      type: String,
      validate: [validator.isURL, "Please provide valid url"],
    },
    companyLogo: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    companyLogo: {
      type: String,
      validate: [validator.isURL, "Please provide valid url"],
    },
    companyCover: {
      type: String,
      validate: [validator.isURL, "Please provide valid url"],
    },
  },
  { timestamp: true }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
