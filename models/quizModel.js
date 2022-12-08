const { default: mongoose } = require("mongoose");

const quizSchema = new mongoose.Schema({
  subject:
  {
    title: { type: String, unique: true, indexed: true },
    quiz: {
      startDate: { type: String },
      endDate: { type: String },
      questions: []
    }
  }
})

module.exports = mongoose.model('quizzes', quizSchema);