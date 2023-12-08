const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/sendMessage', (req, res) => {
  const userMessage = req.body.message.toLowerCase();

  let botResponse = 'I did not understand that. Please try again.';

  if (userMessage.includes('hello')) {
    botResponse = 'Hi there! How can I help you today?';
  } else if (userMessage.includes('how are you')) {
    botResponse = 'I am just a computer program, but thanks for asking!';
  } else if (userMessage.includes('goodbye')) {
    botResponse = 'Goodbye! Have a great day!';
  }

  res.json({ botResponse });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

