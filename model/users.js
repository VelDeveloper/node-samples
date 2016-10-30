/**
 * Created by vadivel on 23/10/16.
 */
var mongoose = require('mongoose'),
    validator = require('../helpers/validator');

var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true,"User {PATH} is required"],
        validate: validator.sizeValidator
    },
    lastName: String,
    email: String,
    username: {
        type:String,
        required: [true,"Username is required"]
    },
    password: String,
    isActive: {
        type:Boolean,
        default:false
    },
    //or
    //isActive:{type:Boolean,default:true}
    createdDate: {
        type: Date,
        default: Date.now
        }
});
mongoose.model('User', userSchema);