const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('./routes/quiz');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(express.json());

// Allow frontend on localhost or Vercel
app.use(cors({
    origin: ['http://localhost:3000', 'https://vercel.com/gaurav-kumar-dixits-projects/quiz-frontend/EjQjXHtgfyYrjUiucXYuemgHeBYs'], // Replace with your actual Vercel domain
    credentials: true
}));

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quizdb';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/quiz', quizRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
