const { Schema, model, Types } = require('mongoose');

const WorkoutSchema = new Schema(
    {
      workoutName: {
        type: String,
        required: true
      },
      workoutDescription: {
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
      }
    }
);

// WorkoutSchema.virtual('workoutCount').get(function() {
//     return this.workouts.length;
// });

const Workout = model('Workout', WorkoutSchema);

module.exports = Workout;