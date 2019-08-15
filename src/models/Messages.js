const { Schema, model } = require('mongoose');

const Messages = new Schema({
    text : {
        type : String,
    }
}, {
    timestamps : true
});

module.exports = model('Messages', Messages);