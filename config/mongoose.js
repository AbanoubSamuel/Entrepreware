// DB connection configuration
const mongoose=require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/QuizApp').then((x)=>
{
    console.log("DB connection is open");
})

