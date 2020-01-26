const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false
 });

app.use(require("./routes/api-routes.js"));
app.use(require("./rotes/html-routes.js"));


 app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

/*app.get("/workout", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/stats", (req, res) => {
  db.Stats.find({})
    .then(dbStats => {
      res.json(dbStats);
    })
    .catch(err => {
      res.json(err);
    });
});
*/



