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
         // The username of the user who created the reaction
    username: {
        type: String, // String type
        required: true, // Username is required
      },
      // The timestamp when the reaction was created
      createdAt: {
        type: Date, // Date type
        default: Date.now, // Default to the current date and time
        get: timestamp => new Date(timestamp).toLocaleDateString() // Convert date to local date string
      },