var express = require('express'),
    router = express.Router(),
    userCtrl = require('../controller/user');

router.route('/')
    .get(function (req, res, next) {
        return userCtrl.getAll(req, res, next);
    })
    .post(function (req, res, next) {
        return userCtrl.create(req, res, next);
    });

router.route('/:userid')
    .get(function (req, res, next) {
        return userCtrl.getById(req, res, next);
    })
    .put(function (req, res, next) {
        return userCtrl.updateById(req, res, next);
    })
    .delete(function (req, res, next) {
        return userCtrl.delete(req, res, next);
    });

module.exports = router;
