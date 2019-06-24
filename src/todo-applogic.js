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

function addTodoAppLogic(duedate, title, priority, notebook){
	return new Todo(duedate, title, priority, notebook);
}

function editTodoAppLogic(duedate, title, priority, notebook){
	return new Todo(duedate, title, priority, notebook);
}

function deleteTodoAppLogic(){
}

export { addTodoAppLogic, editTodoAppLogic, deleteTodoAppLogic }