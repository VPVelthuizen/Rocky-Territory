const express = require('express');
const Thought = require('../models/thoughtModel');

const router = express.Router();

// GET - Get all thoughts
router.get('/api/thoughts', async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET thoughts/:id - Get a single thought by id
router.get('/api/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST thoughts - Create a new thought
router.post('/api/thoughts', async (req, res) => {
    try {
        const newThought = new Thought(req.body);
        const savedThought = await newThought.save();

        res.status(201).json(savedThought);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// PUT /api/thoughts/:id - Update a thought by id
router.put('/api/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        if (req.body.thoughtText) {
            thought.thoughtText = req.body.thoughtText;
        }
        if (req.body.username) {
            thought.username = req.body.username;
        }
        if (req.body.userId) {
            thought.userId = req.body.userId;
        }
        const updatedThought = await thought.save();
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE /api/thoughts/:id - Remove a thought by id
router.delete('/api/thoughts/:id', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.id);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        await thought.deleteOne();
        res.json({ message: 'Thought removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST /api/thoughts/:thoughtId/reactions - Create a new reaction for a thought
router.post('/api/thoughts/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        const newReaction = {
            reactionBody: req.body.reactionBody,
            username: req.body.username
        };

        thought.reactions.push(newReaction);
        const updatedThought = await thought.save();
        res.status(201).json(updatedThought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE /api/thoughts/:thoughtId/reactions/:reactionId - Remove a reaction from a thought
router.delete('/api/thoughts/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }

        const reaction = thought.reactions.find(reaction => reaction._id.toString() === req.params.reactionId);
        if (!reaction) {
            return res.status(404).json({ message: 'Reaction not found' });
        }

        thought.reactions.pull(reaction._id);
        const updatedThought = await thought.save();
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;