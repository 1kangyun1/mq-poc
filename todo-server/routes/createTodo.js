var express = require('express');
const { v4: uuidv4 } = require('uuid');

var router = express.Router();

router.post('/', async(req, res) => {
  //wait 10 seconds
  await new Promise(resolve => setTimeout(resolve, 10000));

  let newTodo = {id:uuidv4(), todo:req.body.todo, finished:req.body.finished, time:Date.now()};
  res.locals.DB.todos.push(newTodo);
  
  res.json(newTodo);
});

module.exports = router;
