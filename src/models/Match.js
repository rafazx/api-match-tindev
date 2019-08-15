const {Schema, model} = require('mongoose');

const Match = new Schema({
    devs : {
        type : Object,
        required : true,
    },
    menssages : {
        type : Object,
        required : true
    }
}, {
    timestamps : true,
})


module.exports = model('Match', Match);