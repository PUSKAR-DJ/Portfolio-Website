const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// API route to handle form submissions
app.post('/api/contact', (req, res) => {
  const formData = req.body;
  const logEntry = `${new Date().toISOString()} - ${JSON.stringify(formData)}\n`;
  const logFilePath = path.join(__dirname, 'log.txt');

  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write to log file:', err);
      return res.status(500).json({ success: false, message: 'Failed to save form data.' });
    }
    console.log('Form data logged successfully.');
    res.status(200).json({ success: true, message: 'Form data saved successfully.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});