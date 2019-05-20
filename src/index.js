import { addTodoAppLogic, addNotebookAppLogic } from './todo-applogic.js';
import { attachTodoCreationForm, attachNotebookCreationForm, addTodoDOM, addNotebookDOM } from './todo-dom.js';

attachTodoCreationForm();
attachNotebookCreationForm();

document.getElementById("default-submit-todo").addEventListener("click", function(){
	addTodoDOM(JSON.stringify(addTodoAppLogic(document.getElementById("default-duedate").value,
		document.getElementById("default-title").value,
		document.getElementById("default-priority").value)));
});

document.getElementById("submit-notebook").addEventListener("click", function(){
	addNotebookDOM(document.getElementById("name").value);
});