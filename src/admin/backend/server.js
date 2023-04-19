const express = require('express');
const usersData = require('../ManageUsers.json');
const app = express();

app.get('/api/v1/users', (req, res) => {
  // Send the data as a JSON response
  res.json(usersData);
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(2000, () => {
  console.log('Server running at http://localhost:2000/');
});
