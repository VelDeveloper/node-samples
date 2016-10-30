/**
 * Created by vadivel on 23/10/16.
 */
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/feedback');