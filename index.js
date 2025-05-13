const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const quizRoutes = require('./routes/quiz');


const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(express.json());



 

mongoose.connect(process.env.MONGODB_URL)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api', quizRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz API!');
});

const PORT =  process.env.PORT || 5000;
// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
