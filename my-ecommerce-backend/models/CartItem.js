// models/CartItem.js
const mongoose = require('mongoose');

// Define the schema for a cart item
const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1, required: true }
});

// Export the CartItem model
module.exports = mongoose.model('CartItem', cartItemSchema);