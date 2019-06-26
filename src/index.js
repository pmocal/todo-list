import { addTodoAppLogic, editTodoAppLogic, deleteTodoAppLogic, addNotebookAppLogic, load } from './todo-applogic.js';
import { attachTodoCreationForm, attachNotebookCreationForm,
	addTodoDOM, addNotebookDOM, editTodoDOM, deleteTodoDOM } from './todo-dom.js';

var loaded = load();

attachTodoCreationForm();
attachNotebookCreationForm();

document.querySelectorAll('[name="submit-todo"]')[0].addEventListener("click", function(){
	if (document.querySelectorAll('[name="submit-todo"]')[0].className === "new") {
		var todo = addTodoAppLogic(document.querySelectorAll('[name="duedate"]')[0].value,
			document.querySelectorAll('[name="title"]')[0].value,
			document.querySelectorAll('[name="priority"]')[0].value,
			document.querySelectorAll('[name="notebook"]')[0].value);
		addTodoDOM(todo);
	} else {
		var todo = editTodoAppLogic(document.querySelectorAll('[name="duedate"]')[0].value,
			document.querySelectorAll('[name="title"]')[0].value,
			document.querySelectorAll('[name="priority"]')[0].value,
			document.querySelectorAll('[name="notebook"]')[0].value,
			document.querySelectorAll('[name="old-name"]')[0].value);
		editTodoDOM(document.querySelectorAll('[name="old-name"]')[0].value, todo);
		document.querySelectorAll('[name="submit-todo"]')[0].className = "new";
	}
});

document.querySelectorAll('[name="submit-notebook"]')[0].addEventListener("click", function(){
	addNotebookDOM(document.querySelectorAll('[name="name"]')[0].value);
});

document.querySelectorAll('[name="delete-todo"]')[0].addEventListener("click", function(){
	deleteTodoDOM(document.querySelectorAll('[name="delete-name"]')[0].value);
	deleteTodoAppLogic(document.querySelectorAll('[name="delete-name"]')[0].value);
});

document.querySelectorAll('[name="cancel-delete"]')[0].addEventListener("click", function(){
	document.getElementById("delete-form").style.display = "none";
});