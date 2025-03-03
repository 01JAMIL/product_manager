const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Product is required'],
        minlength: [3, 'Product must be at least 3 characters long'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be at least 0'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
        minlength: [3, 'Description must be at least 3 characters long'],
    },
   },   { timestamps: true });



module.exports = mongoose.model('Product', ProductSchema);