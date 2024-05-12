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