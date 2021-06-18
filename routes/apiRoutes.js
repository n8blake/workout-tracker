const router = require("express").Router();
const Workouts = require("../models/workoutModel.js");

// addExcercise
router.put("/api/workouts/:id", ({ body }, res) => {
  Workouts.create(body)
    .then(dbWorkout => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json({error: err, request: body});
    });
});

// createWorkout
router.post("/api/workouts", ({ body }, res) => {
  Workouts.insertMany(body)
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
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// getWorkoutsInRange
router.get("/api/workouts/range", (req, res) => {
  Workouts.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
