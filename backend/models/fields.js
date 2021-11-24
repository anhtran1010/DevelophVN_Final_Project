import mongoose from 'mongoose';

const fieldsSchema = new mongoose.Schema( {
    field: String,
});

const Fields = mongoose.model('fields', fieldsSchema);

export default Fields;