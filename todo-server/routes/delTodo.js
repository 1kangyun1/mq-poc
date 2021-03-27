var express = require('express');

var router = express.Router();

router.delete('/:id',  async(req, res) => {
  for(let index=0; index<res.locals.DB.todos.length; index++){
    if(res.locals.DB.todos[index].id === req.params.id){
      res.json(res.locals.DB.todos.splice(index, 1));
    }
  }
});

module.exports = router;
