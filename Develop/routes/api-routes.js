const Workout = require("../models/workout.js");
const mongojs = require("mongojs")

module.exports = function (app) {
    app.get("/workouts", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    });
}

app.put("/api/workouts/:id"), (req, res) => {
    console.log(req.body)
    Workout.findOneAndUpdate(
        {
            _id: mongojs.ObjectId(req.params.id)
        },
        {
            $push: {
                exercises:
                {
                    type: req.body.type || null,
                    name: req.body.name || null,
                    duration: req.body.duration || null,
                    sets: req.body.sets || null,
                    reps: req.body.reps || null,
                    distance: req.body.distance || null,
                }
            }
        })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });

    app.post("/api/workouts", (req, res) => {
        Workout.create(req.body).then(function (dbWorkout) {
            res.json(dbWorkout);
        });
    });
} 