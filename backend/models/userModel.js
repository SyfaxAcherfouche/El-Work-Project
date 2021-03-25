const mongoose = require('mongoose');
const validator = require('validator');
const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;


const userSchema = new Schema({
        user_id: Schema.Types.ObjectId, 
        user_email: {
                type: String,
                required: true,
                unique: true,
                lowercase: true,
                validate: (value) => {
                        return validator.isEmail(value)
                }
        },
        user_password: { 
                type: String,
                required: true
        },
        user_first_name: { 
                type: String,
                required: true
        },
        user_last_name: { 
                type: String,
                required: true
        },
        user_phone_number: { 
                type: String,
                required: true
        },
        user_adress: { 
                type: String,
                required: true
        },
        user_gender: { 
                type: String,
                required: true
        },
        user_img_url: {
                type: String,
                required: false
        },
        freelance_id: {
                type: Schema.Types.ObjectId,
                ref: 'Freelance',
                required: false
        },
        user_isFreelance: Boolean
});

userSchema.plugin(uniqueValidator);

const User = mongoose.model('User', userSchema);

module.exports = User;