const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
      username: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      password: {
        type: String,
        required: true,
        minlength: 5
      },
      favWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      mondayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      tuesdayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      wednesdayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      thursdayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      fridayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      saturdayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
        }
      ],
      sundayWorkouts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Workout'
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

// // get list of favourited workouts
// UserSchema.virtual('listFavWorkouts').get(function() {
//     return this.fav_workouts;
// })

// // get list of workouts added to calendar
// UserSchema.virtual('listWeeklyWorkouts').get(function() {
//     return this.weeklyWorkouts;
// })

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;