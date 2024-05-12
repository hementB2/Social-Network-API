// Importing the required dependencies from the mongoose library
const { Schema, model } = require('mongoose'); 

// Defining the User schema with the required fields and their respective data types
const userSchema = new Schema(
  {
    // Username of the user
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },

    // Email of the user with email format validation
    email: {
        type: String,
        required: true,
        unique: true,
        validate: { 
          validator: function(v) {
              return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
          }
      }
    },
    // Array of friends' ObjectIds referencing User model
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User', // Referencing User model
        }
      ],
      // Array of thoughts' ObjectIds referencing Thought model
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought', // Referencing Thought model
        }
      ],
    },
    {
        // Define JSON serialization options
        toJSON: {
          virtuals: true, // Enable virtual properties to be displayed in JSON format
        },
        // Disable the default '_id' field in the User model
        id: false,
      }
    );
    // Define a virtual property 'friendCount' which returns the number of friends in the friends array
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// Create the User model from the userSchema
const User = model('User', userSchema);

// Export the User model as a module
module.exports = User;