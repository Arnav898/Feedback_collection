import { feedbacks } from '../models/feedbackModel.js';

export const submitFeedback = (req, res) => {
  const { name, rating, message } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Please provide your name' });
  }
  
  if (!message) {
    return res.status(400).json({ error: 'Please write a review' });
  }
  
  if (rating === '') {
    return res.status(400).json({ error: 'Please provide a rating' });
  }

  const feedback = {
    name,
    rating: rating || 'No rating',
    message,
  };

  feedbacks.push(feedback);
  res.json({ 
    message: 'Thank you for your feedback!',
    feedback 
  });
};

export const getFeedbacks = (req, res) => {
  if (feedbacks.length === 0) {
    return res.json({ message: 'No feedback yet' });
  }
  res.json(feedbacks);
}; 