const db = require("../models");
//const mongojs = require("mongojs")

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.put("/api/workouts/:id", (req, res) => {
        //MongoDB to show specific workout
        var currWorkoutId = req.params.id;
        console.log(currWorkoutId);
        var newExercise = req.body;
        console.log(newExercise);
        db.Workout.findOneAndUpdate({
            _id: currWorkoutId
        }, { $push: { exercises: newExercise } }, { new: true })
            .then(update => {
                res.json(update);
            })
    });


    app.post("/api/workouts", function (req, res) {
        console.log(req.body);
        db.Workout.insert(req.body)
            .then(newWorkout => {
                res.json(newWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });

    app.get("/api/workouts/range", function (req, res) {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}
