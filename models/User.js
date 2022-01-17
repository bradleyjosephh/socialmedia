const { Schema, model} = require('mongoose')

const User = new Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        trim: true
    },
    email: {
        type: String, 
        lowercase: true,
        unique: true, 
        validate: {
            validator: function (v) {
                return .test(v)
            },
        }
    }
})