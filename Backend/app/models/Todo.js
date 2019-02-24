
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
const time = require('../libs/timeLib')

let todo = new Schema({
  todoId: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    default: ''
  },
  userId: {
    type: String
  },
  // cards:{
  //   type:Array,
  // },

  status: {
    type: String //friend one
  },
  todostatus: {
    type: String
  },

  subToDoItems: [
    {
      subToDoName: {
        type: String
      },
      subToDoItemId: {
        type: String
      }
    }
  ],
  history: [],
  createdOn: {
    type: Date,
    default: time.now
  }


})


mongoose.model('todo', todo);