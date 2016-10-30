
exports.sizeValidator = [
    function (val) {
        return (val.length > 0 && val.length <= 5) },
    // Custom error text...
    '{PATH} value {VALUE} must be between 1 to 5 characters long' ];