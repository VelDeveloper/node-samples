var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.getAll = function (req,res,next) {
    User.find(function(err, users) {
        if (err)
            res.send(err);

        res.json(users);
    });
};

exports.create = function (req,res,next) {
    var user = new User(req.body);
    user.save(function(err,user){
        if(err){
            next(err);
        } else {
            res.json(user);
            //or redirect to post call
            //res.redirect('/');
        }
    });
};

exports.getById = function(req,res,next){
    User.findById(req.params.userid, function(err, user) {
        if (err){
            next(err);
        }
        res.json(user);
    });
};
exports.updateById = function(req,res,next){
    User.findOneAndUpdate({_id:req.params.userid}, req.body, function (err, user) {
        if (err){
            next(err);
        } else{
            res.send("User updated Successfully");
        }
    });
};
exports.delete = function (req,res,next) {
    User.remove({ _id:req.params.userid},function(err) {
        if (err){
            next(err);
        }
        res.json({ message: 'Successfully deleted' });
    });
    //or
    //User.findByIdAndRemove(req.params.userid).exec();
};