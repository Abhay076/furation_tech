const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 8000;
const db = require("./config/mongoose");
const tourRouter = require("./routes/tourRoutes");

app.use(morgan("dev"));

//middleware
app.use(express.json());

//Routes
app.use("/api/v1/tours", tourRouter);


//server
app.listen(port, function (err) {
  if (err) {
    console.log(`${err}`);
    return;
  }
  console.log(`Server has been started at port ${port}`);
});
