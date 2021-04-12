const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { ValidationError } = require("sequelize");
const usersRouter = require("./routes/users");
const eventsRouter = require("./routes/events");
const { environment } = require('./config');

const app = express();
// app.use(cors({ origin: false }));

app.use(morgan("dev"));
app.use(express.json());
// app.use(cors());
app.use(cors({ origin: '*' }));



app.use("/users", usersRouter);
app.use("/events", eventsRouter);


app.use((req, res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.status = 404;
  next(err);
});

// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://cool-events.herokuapp.com/"); // update to match the domain you will make the request from
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// Process sequelize errors
app.use((err, req, res, next) => {
  // check if error is a Sequelize error:
  if (err instanceof ValidationError) {
    err.errors = err.errors.map((e) => e.message);
    err.title = "Sequelize Error";
  }
  next(err);
});


// Custom error handlers.

// Generic error handler.
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
