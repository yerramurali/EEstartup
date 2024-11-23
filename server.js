
const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js server');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

