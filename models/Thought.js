const { Schema, model } = require('mongoose'); 
const reactionSchema = require('./Reaction');

// Define the schema for thoughts
const thoughtSchema = new Schema(
    {
        // Text content of the thought
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280, // Fixed typo: 'maxlenght' corrected to 'maxlength'
        },

          // Timestamp when the thought was created
          createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        // Username of the user who created the thought
        username: {
            type: String,  
            required: true,
        },
        // Array of reactions associated with the thought
        reactions: [reactionSchema],
    },
    {
        // Define JSON serialization options
        toJSON: {
            getters: true, // Include getters in JSON output
            virtuals: true, // Include virtual fields in JSON output
        },
        // Disable virtual "id" field in JSON output
        id: false,
    }
);
