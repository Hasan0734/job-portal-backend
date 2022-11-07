const mongoose = require("mongoose");
const validator = require("validator");
const { ObjectId } = mongoose.Schema.Types;

const jobSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this job."],
      trim: true,
      minLength: [3, "Name must be at least 3 charcters."],
      maxLength: [100, "Name is  too large"],
    },
    department: String,
    type: {
      type: String,
      required: true,
      enum: ["full time", "part time"],
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
      minLength: [0, "Salary can't be negative"],
    },
    description: String,
    duration: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: [false, "Please provide a company name for this job."],
        trim: true, //remove space after and before
        minLength: [3, "Name must be at least 3 charcters."],
        maxLength: [100, "Name is  too large"],
      },
      website: {
        type: String,
        required: false,
        validate: [validator.isURL, "Please provide valid url(s)"],
      },
      id: {
        type: ObjectId,
        ref: "Company",
        required: false,
      },
    },
    poster: {
      name: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        valdiate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        required: [false, "Email address is required"],
      },
      id: {
        type: ObjectId,
        ref: "User",
        required: false,
      },
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
