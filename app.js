const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const mongo = require("./config/mongoose");
const cors = require("cors");
const port = 8000;
app.use(function (req, res, next)
{
  res.set({
    "Access-Control-Expose-Headers": "*",
  });
  next();
});
const http = require("http").createServer(app);
const quizRouter = require("./routes/quizRoute");















app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/v1/quiz", quizRouter);
app.listen(port, () => console.log(`QuizApp listening on port ${port}!`));