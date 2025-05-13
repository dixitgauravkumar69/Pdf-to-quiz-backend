const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('./routes/quiz');


const app = express();
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true
}));
app.use(express.json());



 

mongoose.connect('mongodb://localhost:27017/quizdb')
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// API routes
app.use('/api', quizRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Quiz API!');
});

const PORT =  5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
