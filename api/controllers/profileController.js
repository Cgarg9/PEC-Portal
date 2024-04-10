// Import the Feedback model
const User = require('../models/userModel');

// Create Feedback Controller
const deleteProfile = async (req, res) => {
    try {
        const userEmail = req.email;
        const user = await User.findOne({ email: userEmail });
        if (!user) return res.status(404).json({ message: 'User not found' });
        await User.findOneAndDelete({ email: userEmail });
        res.status(200).json({ message: 'User profile deleted successfully' });
    } catch (error) {
        console.error('Error deleting profile:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



module.exports = { deleteProfile };