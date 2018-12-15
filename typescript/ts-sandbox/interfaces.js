// Without Interface
// function showToDo(todo: {title: string, text: string}) {
//   console.log(`${todo.title} : ${todo.text}`);
// }
var myTodo = { title: 'Food', text: 'Go grocery shopping' };
// With interface
function showToDo(todo) {
    console.log(todo.title + ": " + todo.text);
}
showToDo(myTodo);
