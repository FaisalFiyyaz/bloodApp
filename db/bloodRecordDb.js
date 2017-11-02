var mongoose = require('mongoose');
var BloodRecordSchema = new mongoose.Schema({}, {
    strict: false
});
Schema = {};
Schema.BloodRecord = mongoose.model('BloodRecord', BloodRecordSchema);
module.exports = Schema;