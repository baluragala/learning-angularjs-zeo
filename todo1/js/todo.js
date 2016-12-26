var app = angular.module("todo",[])

app.controller("todoController", function(){
  var self = this;
  
  self.todos = [
    {task:"todo1",done:false},
    {task:"todo2",done:true},
  ]

  self.addTodo = function(){
    self.todos.push({task:self.newTask, done:false})
    self.newTask=''
  }
})

app.controller("greetController", function(){
  var self = this;
  self.greet = "Hola !!!!!"
})
