const express = require('express');
const connectDB = require('./config/db');

const cors = require('cors');

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Adjust this to your frontend URL
    credentials: true,
}))
require('dotenv').config();
const router = express.Router(); // Router object create karo


app.use('/api/auth', require('./routes/authRoutes'))
app.get('/', (req, res) => {
    res.send('Hello, World!');
})
connectDB();
const PORT =process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});