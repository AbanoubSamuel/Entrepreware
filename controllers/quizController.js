const quizModel = require("../models/quizModel");


exports.getQuizes = (req, res, next) =>
{

  quizModel.find({}, (err, data) =>
  {
    if (err)
    {
      res.send({ message: "Error ! Please check your query and try again." });
    } else
    {
      res.send(data)
    }
  })
}