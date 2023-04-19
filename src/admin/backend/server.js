const express = require('express');
const markdownToJson = require('markdown-to-json');
const app = express();

app.get('/api/v1/users', (req, res) => {
  // Convert Markdown to JSON
  markdownToJson('./admin/ManageUsers.md', (data) => {
    // Send the data as a JSON response
    res.json(data);
  });
});

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
