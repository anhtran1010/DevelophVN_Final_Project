import mongoose from 'mongoose';

const fieldsSchema = new mongoose.Schema( {
    field: String,
});

const fields = mongoose.model('fields', fieldsSchema);

module.exports = fields;