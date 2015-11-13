
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){

var userSchema = mongoose.Schema({
        name: String,
        email: String,
        password: String,
        created_at: Date


});
        exports.User = mongoose.model('User', userSchema);

});

