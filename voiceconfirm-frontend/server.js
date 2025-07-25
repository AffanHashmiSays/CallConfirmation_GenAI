const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`VoiceConfirm Frontend server running on port ${port}`);
});

