const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all files inside the "root" folder
app.use(express.static(path.join(__dirname, 'root')));

// Fallback: redirect all non-file requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'root', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Maintenance page running at http://localhost:${PORT}`);
});