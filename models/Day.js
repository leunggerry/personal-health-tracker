const { Schema, model } = require('mongoose');

const DaySchema = new Schema(
    {
      dayName: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      scheduledWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      userID: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
      ]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true
      },
      id: false
    }
);

// get number of workouts based on day
DaySchema.virtual('workoutCount').get(function() {
    return this.scheduledWorkouts.length;
})

// create the Day model using the DaySchema
const Day = model('Day', DaySchema);

// export the Day model
module.exports = Day;