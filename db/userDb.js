var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({}, {
    strict: false
});
Schema = {};
Schema.User = mongoose.model('user_record', UserSchema);
module.exports = Schema;