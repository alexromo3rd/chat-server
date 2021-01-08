const express = require('express');
const messageCtrl = require('./controllers/messages_controller');

const app = express();

app.use(express.json());

const baseUrl = '/api/messages';
app.post(baseUrl, messageCtrl.createMessage);
app.get(baseUrl, messageCtrl.getMessages);
app.put(`${baseUrl}/:id`, messageCtrl.updateMessage);
app.delete(`${baseUrl}/:id`, messageCtrl.deleteMessage);

const port = 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}.`);
});