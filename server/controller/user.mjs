const { Schema, model, SchemaTypes } = require("mongoose");
const validator = require('validator');

const UserSchema = new Schema(
    {
        name:
        {
            type: String,
            required: [true, "Please include your name"]
        },

        class:
        {
            type: String,
            required: [true, "Please include your class"]
        },

        email:
        {
            type: String,
            required:  [true, 'Enter a valid Email'],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Please enter a valid email']
        },

        password: 
        {
            type: String,
            required: [true, 'Please enter a password'],
        },

        hp: 
        {
            type: Number,
        },


        role:
        {
            type: String,
            enum: ["Student", "Staff"]
        }   
    },  
    
    {timestamps: true}

)

module.exports = model("User", UserSchema);
