const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('./routes/quiz');
require('dotenv').config(); // Load environment variables from .env

const app = express();
app.use(express.json());

// Use CORS with deployment-safe options (adjust if needed)
app.use(cors({
    origin: ['http://localhost:3000', 'https://your-frontend-domain.com'], // Update this
    credentials: true
}));

// MongoDB connection (uses environment variable or fallback to local)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/quizdb';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api/quiz', quizRoutes);

// Port for deployment or local
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
