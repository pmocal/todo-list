class Todo {
	constructor(duedate, title, priority) {
		this.duedate = duedate;
		this.title = title;
		this.priority = priority;
	}
}

function addTodoAppLogic(duedate, title, priority){
	return new Todo(document.getElementById("duedate").value, document.getElementById("title").value,
		document.getElementById("priority").value);
}

export default addTodoAppLogic