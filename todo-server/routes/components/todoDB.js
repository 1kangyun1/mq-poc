

class todoDB {
  constructor(){
    this.todos = [{id:1, todo: "test1", finished: false, time:"asdf"}];
  }
  
  todoList = () => {
    return this.todos;
  }
}

module.exports = todoDB;
