// routes/wishlist.js
const express = require('express');
const WishlistItem = require('../models/WishlistItem');
const Product = require('../models/Product');
const router = express.Router();



router.get('/', async (req, res) => {
    try {
        const wishlistItems = await WishlistItem.find().populate({
            path: 'productId',
            select: 'name price image description' // Select only necessary fields
        });
        res.json(wishlistItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items', error });
    }
});

// Add an item to the wishlist
router.post('/', async (req, res) => {
    const { productId } = req.body;
    console.log(productId)
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        const existingWishlistItem = await WishlistItem.findOne({ productId });
        if (existingWishlistItem) return res.status(400).json({ message: 'Item already in wishlist' });

        const newWishlistItem = new WishlistItem({ productId });
        await newWishlistItem.save();
        res.status(201).json(newWishlistItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding to wishlist', error });
    }
});

// Remove an item from the wishlist
router.delete('/:id', async (req, res) => {
    try {
        const deletedWishlistItem = await WishlistItem.findByIdAndDelete(req.params.id);
        if (!deletedWishlistItem) return res.status(404).json({ message: 'Wishlist item not found' });
        res.json({ message: 'Item removed from wishlist' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing wishlist item', error });
    }
});

module.exports = router;