import { addTodoAppLogic, addNotebookAppLogic } from './todo-applogic.js';
import { attachTodoCreationForm, attachNotebookCreationForm, addTodoDOM, addNotebookDOM } from './todo-dom.js';

attachTodoCreationForm("default");
attachNotebookCreationForm();

document.getElementById("submit-todo").addEventListener("click", function(){
	addTodoDOM(JSON.stringify(addTodoAppLogic(document.getElementById("duedate").value,
		document.getElementById("title").value,
		document.getElementById("priority").value)), document.getElementById("notebook").value);
});

document.getElementById("submit-notebook").addEventListener("click", function(){
	addNotebookDOM(document.getElementById("name").value);
});