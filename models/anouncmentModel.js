
const { default: mongoose } = require("mongoose");

const announcementSchema = new mongoose.Schema({
  anaouncment:
  {
    title: { type: String, unique: true, indexed: true },
    description: { type: String },
    publishDate: { type: String },
    teacherName: { type: String },
  }
})

module.exports = mongoose.model('announcements', announcementSchema);



