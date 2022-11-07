const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");
const app = require("./app");

// database connect
mongoose
  .connect(process.env.DATABASE_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connection is successful".red.bold);
  });

//  server

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
