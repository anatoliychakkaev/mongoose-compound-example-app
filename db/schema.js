module.exports = function (mongoose, compound) {
    // mongoose stuff
    var schema = mongoose.Schema({ name: String });
    var Cat = mongoose.model('Cat', schema);

    // expose model name for view helpers (resource-based helpers like formFor)
    Cat.modelName = 'Cat';

    // register model in compound.models registry
    compound.models.Cat = Cat;
};
