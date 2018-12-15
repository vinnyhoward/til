// Without Interface
// function showToDo(todo: {title: string, text: string}) {
//   console.log(`${todo.title} : ${todo.text}`);
// }

var myTodo = { title: 'Food', text: 'Go grocery shopping' };

interface Todo {
	title: string;
	text: string;
}

// With interface
function showToDo(todo: Todo) {
	console.log(`${todo.title}: ${todo.text}`);
}

showToDo(myTodo);
