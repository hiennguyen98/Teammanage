
var mongoose = require('mongoose');
// ProjcetSchema
var ProjcetSchema = new mongoose.Schema({
    nameproject: String,
    listmember : [{namemember: String, phone: String}]
});
module.exports= mongoose.model('Project', ProjcetSchema);