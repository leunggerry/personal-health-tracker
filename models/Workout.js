const { Schema, model, Types } = require('mongoose');

const WorkoutSchema = new Schema(
    {
      workoutName: {
        type: String,
        required: true
      },
      setsCount : {
        type: Number,
        required: false
      },
      repsCount: {
        type: Number,
        required: false
      }
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
);

WorkoutSchema.virtual('workoutCount').get(function() {
    return this.workouts.length;
});

const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;