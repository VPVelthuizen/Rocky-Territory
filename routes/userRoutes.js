const User = require('../models/userModel.js');
const router = require('express').Router();

router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// POST a new user
router.post('/users', async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// DELETE a user
router.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
