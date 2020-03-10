const mongoose = require('mongoose');

const BuildSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  username: {
    type: String,
    required: true
  },
  buildName: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  pokemon: {
    type: String,
    required: true
  },
  grids: {
    type: [String],
    required: true
  },
  remainingEnergy: {
    type: Number,
    required: true
  },
  orbSpent: {
    type: Number,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  tags: {
    type: [String]
  },
  likes: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
      },
      username: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('build', BuildSchema);
