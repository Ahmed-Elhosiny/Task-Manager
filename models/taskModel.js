const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A task must have a name'],
      trim: true,
      maxLength: [
        20,
        'Task name can not be above 20 characters',
      ],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    toObject: true,
    toJSON: true,
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'Task',
  taskSchema
);
