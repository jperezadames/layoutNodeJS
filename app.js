const express = require('express');
const path = require('path');
const app = express(); 
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'This is data from an API endpoint!' });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
  console.log(`Open your browser to: http://localhost:${port}/`);
  console.log(`Or try the API endpoint: http://localhost:${port}/api/data`);
});
