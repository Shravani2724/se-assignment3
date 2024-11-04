// models/WishlistItem.js
const mongoose = require('mongoose');

// Define the schema for a wishlist item
const wishlistItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
});

// Export the WishlistItem model
module.exports = mongoose.model('WishlistItem', wishlistItemSchema);