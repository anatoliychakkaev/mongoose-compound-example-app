exports.init = function (compound) {
    var conf = require('./database.json')[compound.app.set('env')];
    var mongoose = require('mongoose');
    mongoose.connect(conf.url);
    require(compound.root + '/db/schema')(mongoose, compound);
};
