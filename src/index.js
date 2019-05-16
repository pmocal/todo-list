import addTodoAppLogic from './todo-applogic.js';
import { attachTodoCreationForm, addTodoDOM } from './todo-dom.js';

attachTodoCreationForm();

document.getElementById("submit-todo").addEventListener("click", function(){
	addTodoDOM(JSON.stringify(addTodoAppLogic(document.getElementById("duedate").value, document.getElementById("title").value,
		document.getElementById("priority").value)));
});