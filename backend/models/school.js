import mongoose from 'mongoose';

const UniversitiesSchema = new mongoose.Schema({
    school: String,
    location: String,
    tel: String,
    email: String,
    type: String,
    tuition: String,
    reviews: {
        user: {
            type: String,
            require: true,
            ref: 'users'
        },
        StarRating: {
            type: Number,
        },
        review: String,
    }
});

var Universities  = mongoose.model('Universities', UniversitiesSchema);

module.exports = {
    fetchData :  function(callback) {
        var schoolData = Universities.find();
        schoolData.exec(function(err, data) {
            if(err) 
            throw err;
            return callback(data);
        })
     }
};
