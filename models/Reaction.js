const { Schema, Types } = require('mongoose');

// Define the schema for reactions
const reactionSchema = new Schema(
  {
    // Unique identifier for each reaction
    reactionId: {
      type: Schema.Types.ObjectId, // Mongoose ObjectID type
      default: () => new Types.ObjectId(), // Generate a new ObjectId by default
    },
    // The body text of the reaction
    reactionBody: {
        type: String, // String type
        required: true, // Reaction body is required
        maxLength: 280, // Maximum length of 280 characters
      },