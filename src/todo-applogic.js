class Todo {
	constructor(duedate, title, priority) {
		this.duedate = duedate;
		this.title = title;
		this.priority = priority;
	}
}

function addTodoAppLogic(duedate, title, priority){
	return new Todo(duedate, title, priority);
}

function addNotebookAppLogic(name) {

}

export { addTodoAppLogic, addNotebookAppLogic }