// routes/cart.js
const express = require('express');
const CartItem = require('../models/CartItem');
const Product = require('../models/Product');
const router = express.Router();



// Get all items in the cart
router.get('/', async (req, res) => {
    try {
        const cartItems = await CartItem.find().populate({
            path: 'productId',
            select: 'name price image description' // Select only necessary fields
        });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items', error });
    }
});


// Add an item to the cart
router.post('/', async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });
        
        const existingCartItem = await CartItem.findOne({ productId });
        if (existingCartItem) {
            existingCartItem.quantity += quantity;
            await existingCartItem.save();
            return res.json(existingCartItem);
        }
        
        const newCartItem = new CartItem({ productId, quantity });
        await newCartItem.save();
        res.status(201).json(newCartItem);
    } catch (error) {
        res.status(400).json({ message: 'Error adding to cart', error });
    }
});

// Update the quantity of an item in the cart
router.put('/:id', async (req, res) => {
    const { quantity } = req.body;
    try {
        const updatedCartItem = await CartItem.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
        if (!updatedCartItem) return res.status(404).json({ message: 'Cart item not found' });
        res.json(updatedCartItem);
    } catch (error) {
        res.status(400).json({ message: 'Error updating cart item', error });
    }
});

// Remove an item from the cart
router.delete('/:id', async (req, res) => {
    try {
        const deletedCartItem = await CartItem.findByIdAndDelete(req.params.id);
        if (!deletedCartItem) return res.status(404).json({ message: 'Cart item not found' });
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing cart item', error });
    }
});

module.exports = router;