const router = require("express").Router();
const Workouts = require("../models/workoutModel.js");
const mongoose = require("mongoose");

// addExcercise
router.put("/api/workouts/:id", async (req, res) => {
  // find the workout by its id
  // add the body to its array of excercies
  Workouts.findById(req.params.id, async function(error, workout){
    if(error){
      res.status(400).json(error);
    }
    const newExcercise = req.body;
    const exs = workout.exercises;
    exs.push(newExcercise);
    const options = {};
    options.new = true;    
    Workouts.findByIdAndUpdate(req.params.id, {exercises: exs}, options, function(error, response){
      if(error){
        res.status(400).json(error);
      }
      res.json(response);
    });
    
  }); 

});

// createWorkout
router.post("/api/workouts", ({ body }, res) => {
  // create a new workout record from the body 
  console.log('create new workout here');
  const workout = {
    day: new Date(),
    excercises: []
  }
  Workouts.create(workout)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// getLastWorkout
router.get("/api/workouts", (req, res) => {
  Workouts.find({})
    .limit(1)
    .sort({ day: -1 })
    .lean()
    .then(dbTransaction => {
      dbTransaction.forEach(workout => {
        workout.totalDuration = 0;
        workout.exercises.forEach(excercise => {
          console.log(excercise);
          if(excercise.duration){
            workout.totalDuration += excercise.duration;
          }
        });
      });
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .limit(7)
    .sort({ day: -1 })
    .lean()
    .then(dbTransaction => {
      dbTransaction.forEach(workout => {
        workout.totalDuration = 0;
        workout.exercises.forEach(excercise => {
          if(excercise.duration){
            workout.totalDuration += excercise.duration;
          }
        });
      });
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
