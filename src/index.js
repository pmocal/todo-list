import { addTodoAppLogic, editTodoAppLogic, addNotebookAppLogic } from './todo-applogic.js';
import { attachTodoCreationForm, attachNotebookCreationForm, addTodoDOM, addNotebookDOM, editTodoDOM } from './todo-dom.js';

attachTodoCreationForm();
attachNotebookCreationForm();

document.querySelectorAll('[name="submit-todo"]')[0].addEventListener("click", function(){
	if (document.querySelectorAll('[name="submit-todo"]')[0].className === "new") {
		console.log("if");
		console.log(document.querySelectorAll('[name="submit-todo"]')[0]);
		var todo = addTodoAppLogic(document.querySelectorAll('[name="duedate"]')[0].value,
			document.querySelectorAll('[name="title"]')[0].value,
			document.querySelectorAll('[name="priority"]')[0].value,
			document.querySelectorAll('[name="notebook"]')[0].value);
		console.log("about to addTodoDOM");
		addTodoDOM(todo);
	} else {
		console.log("else")
		console.log(document.querySelectorAll('[name="submit-todo"]')[0]);
		var todo = editTodoAppLogic(document.querySelectorAll('[name="duedate"]')[0].value,
			document.querySelectorAll('[name="title"]')[0].value,
			document.querySelectorAll('[name="priority"]')[0].value,
			document.querySelectorAll('[name="notebook"]')[0].value);
		console.log("about to editTodoDOM");
		editTodoDOM(document.querySelectorAll('[name="old-name"]')[0].value, todo);
		document.querySelectorAll('[name="submit-todo"]')[0].className = "new";
	}
});

document.querySelectorAll('[name="submit-notebook"]')[0].addEventListener("click", function(){
	addNotebookDOM(document.querySelectorAll('[name="name"]')[0].value);
});