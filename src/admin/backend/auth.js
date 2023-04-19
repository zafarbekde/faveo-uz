const express = require('express');
const usersData = require('../Auth.json');
const cors = require('cors')
const app = express();
app.use(cors())
app.get('/api/v1/auth', (req, res) => {
  // Send the data as a JSON response
  res.json(usersData);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(8000, () => {
  console.log('Server running at http://localhost:8000/');
});
