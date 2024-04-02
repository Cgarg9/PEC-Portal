// Import the Feedback model
const Feedback = require('../models/courseModel');

// Create Feedback Controller
const createFeedback = async (req, res) => {
    try {
        const { name, courseCode, credits, experience } = req.body;

        // Create a new feedback card
        const newFeedback = new Feedback({
            name,
            courseCode,
            credits,
            experience: [experience] // Start with the initial experience
        });

        // Save the feedback card to the database
        await newFeedback.save();

        res.status(201).json({ message: 'Feedback created successfully' });
    } catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Update Experience Controller
const updateExperience = async (req, res) => {
    try {
        const { id } = req.params;
        const { experience } = req.body;

        // Find the feedback card by ID
        const feedback = await Feedback.findById(id);

        // If the feedback card doesn't exist, return an error
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }

        // Add the new experience to the existing ones
        feedback.experience.push(experience);

        // Save the updated feedback card to the database
        await feedback.save();

        res.status(200).json({ message: 'Experience updated successfully' });
    } catch (error) {
        console.error('Error updating experience:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = { createFeedback, updateExperience };
