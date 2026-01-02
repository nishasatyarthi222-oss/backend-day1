const express = require('express');
const app = express();
const PORT = 3000;

// A simple GET route
app.get('/', (req, res) => {
    res.send('Hello,Iam Nisha! This is my first backend API.');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
