let messages = [];
let id = 0;

module.exports = {
  createMessage: (req, res) => {
    let { text, time } = req.body;
    
    if(text && time) {
      let message = {
        id,
        text,
        time
      };
  
      messages.push(message);
      id++;
      res.status(200).send(messages);
    } else {
      res.sendStatus(404);
    }
  },
  getMessages: (req, res) => {
    res.status(200).send(messages);
  },
  updateMessage: (req, res) => {
    const { id } = req.params;
    const { text, time } = req.body;
    const index = messages.findIndex(message => message.id === +id);

    if(index !== -1) {
      messages[index] = {
        id: messages[index].id,
        text: text || messages[index].text,
        time: time || messages[index].time
      };

      res.status(200).send(messages);
    } else {
      res.sendStatus(404);
    }
  },
  deleteMessage: (req, res) => {
    const { id } = req.params;
    const index = messages.findIndex(message => message.id === +id);
    
    if(index !== -1) {
      messages.splice(index, 1);
      res.status(200).send(messages);
    } else {
      res.sendStatus(404);
    }
  }
}