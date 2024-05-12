const { Schema, Types } = require('mongoose');

// Define the schema for reactions
const reactionSchema = new Schema(
  {
    // Unique identifier for each reaction
    reactionId: {
      type: Schema.Types.ObjectId, // Mongoose ObjectID type
      default: () => new Types.ObjectId(), // Generate a new ObjectId by default
    },