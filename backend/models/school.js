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

export default Universities;
