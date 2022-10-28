const { Workout } = require('../models');

const workoutController = {
    // get all workouts
    getAllWorkout(req, res) {
        Workout.find({})
          .select('-__v')
          .sort({ _id: -1 })
          .then(dbWorkoutData => res.json(dbWorkoutData))
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },
  
    // get one workout by id
    getWorkoutById({ params }, res) {
        Workout.findOne({ _id: params.id })
        .select('-__v')
        .then(dbWorkoutData => {
            if (!dbWorkoutData) {
            res.status(404).json({ message: 'No workout found with this id!' });
            return;
            }
            res.json(dbWorkoutData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    
    // create workout
    createWorkout({ body }, res) {
        Workout.create(body)
        .then(dbWorkoutData => res.json(dbWorkoutData))
        .catch(err => res.status(400).json(err));
    },


    // update workout by id
    updateWorkout({ params, body }, res) {
        Workout.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbWorkoutData => {
            if (!dbWorkoutData) {
                res.status(404).json({ message: 'No workout found with this id!' });
                return;
            }
            res.json(dbWorkoutData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete workout
    deleteWorkout({ params }, res) {
        Workout.findOneAndDelete({ _id: params.id })
        .then(dbWorkoutData => {
            if (!dbWorkoutData) {
                res.status(404).json({ message: 'No workout found with this id!' });
                return;
            }
            res.json(dbWorkoutData);
        })
        .catch(err => res.status(400).json(err));
    },
}

module.exports = workoutController;