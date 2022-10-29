const { User } = require('../models');
const { db } = require('../models/User');

const userController = {
    // get all users
    getAllUser(req, res) {
        User.find({})
          
          .catch(err => {
            console.log(err);
            res.status(400).json(err);
          });
    },
  
    // get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'favWorkouts',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id!' });
            return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },

    
    // create user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => {
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },


    // update user by id
    updateUser({ params, body }, res) {
        User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete user
    deleteUser({ params }, res) {
        User.findOneAndDelete({ _id: params.id })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // add a favWorkout
    addFavWorkout({params}, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { favWorkouts: params.favWorkoutId } },
            { runValidators: true, new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // delete a favWorktous
    deleteFavWorkout({params}, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { favWorkouts: params.favWorkoutId } },
            { runValidators: true, new: true }
        )
        .then(dbUserData => {
            console.log(dbUserData);
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch((err) => res.status(404).json(err));
    },

    // add a workout to a workout day
    scheduleWorkout({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $addToSet: { [params.workoutDay]: params.workoutId } },
            { runValidators: true, new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },

    // remove scheduled workout from relevant workout day
    removeScheduledWorkout({ params }, res) {
        User.findOneAndUpdate(
            { _id: params.id },
            { $pull: { [params.workoutDay]: params.workoutId } },
            { runValidators: true, new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.status(400).json(err));
    },
}

module.exports = userController;