const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true,
}))
require('dotenv').config();
connectDB();
// Middleware to parse JSON bodies
app.use('/api/auth', require('./routes/authRoutes'))


const PORT =process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});