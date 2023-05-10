const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(cors())
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/save', (req, res) => {
  const { age, address } = req.body;
  const data = { age, address };
  fs.appendFile('data.json', JSON.stringify(data) + '\n', err => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Failed to save data' });
    } else {
      res.json({ message: 'Data saved successfully' });
    }
  });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
