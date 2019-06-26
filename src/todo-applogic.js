class Todo {

	constructor(duedate, title, priority, notebook) {
		this.duedate = duedate;
		this.title = title;
		this.priority = priority;
		this.notebook = notebook;
	}

	toString() {
		return this.title + " " + this.duedate;
	}

	todoString() {
		return this.notebook + "-" + this.title;
	}
}

function assignObjToTodo(JSONObj) {
	return Object.assign(new Todo, JSONObj);
}

function addTodoAppLogic(duedate, title, priority, notebook){
	var obj = new Todo(duedate, title, priority, notebook);
	window.localStorage.setItem(obj.todoString(), JSON.stringify(obj));
	return obj;
}

function editTodoAppLogic(duedate, title, priority, notebook, oldTodoString){
	window.localStorage.removeItem(oldTodoString);
	var obj = new Todo(duedate, title, priority, notebook);
	window.localStorage.setItem(obj.todoString(), JSON.stringify(obj));
	return obj;
}

function deleteTodoAppLogic(todoString){
	window.localStorage.removeItem(todoString);
}

export { addTodoAppLogic, editTodoAppLogic, deleteTodoAppLogic, assignObjToTodo }