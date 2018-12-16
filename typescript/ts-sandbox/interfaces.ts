// Without Interface
// function showToDo(todo: {title: string, text: string}) {
//   console.log(`${todo.title} : ${todo.text}`);
// }

var myTodo = {
	title: 'Food',
	text: 'Go grocery shopping',
	items: {
		items1: 'food',
		items2: 'food'
	}
};

interface Todo {
	title: string;
	text: string;
	items: {
		items1: string;
		items2: string;
	};
}

// With interface
function showToDo(todo: Todo) {
	console.log(`${todo.title}: ${todo.text}`);
}

showToDo(myTodo);
