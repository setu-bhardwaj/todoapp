const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Friend = new Schema({
    id: {
        type: String
    },

    requestedById: {
        type: String
    },

    requestedToId: {
        type: String
    },

    requestedByName: {
        type: String
    },

    requestedToName: {
        type: String
    },

    status: {
        type: String
    },

    requestedUserDetails: {
        type: Object
    }


})

module.exports = mongoose.model('Friend', Friend)
