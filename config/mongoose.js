exports.init = function (compound) {
    var mongoose = require('mongoose');
    mongoose.connect('localhost', 'test');
    require(compound.root + '/db/schema')(mongoose, compound);
};
