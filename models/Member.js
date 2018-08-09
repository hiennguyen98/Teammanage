
var mongoose = require('mongoose');
var MemberSchema = mongoose.Schema({
    name: String,
    phone: String,
    Idproject: String
});

module.exports=mongoose.model('Member', MemberSchema);
