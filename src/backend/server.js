const express = require('express'); // Add this line to import express
const path = require('path');
const app = require('./app');

const PORT = process.env.PORT || 5000;

// Serve React frontend from backend
app.use(express.static(path.join(__dirname, '../frontend/build'))); // Ensure path points to React build folder
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
