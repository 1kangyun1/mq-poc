var express = require('express');

var router = express.Router();

router.post('/:id', async(req, res) => {
  for(let todo of res.locals.DB.todos){
    if(todo.id == req.params.id){
      todo.finished = !todo.finished;
      res.json(todo);
    }
  }
});

router.get('/', async(req, res) => {
  res.json(res.locals.DB.todos);
});

module.exports = router;
