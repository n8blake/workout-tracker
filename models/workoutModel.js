const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    trim: true,
    required: "Date is Required"
  },
  exercises: {
  	type: Array,
  	required: "Exercises are required"
  }
});



const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
