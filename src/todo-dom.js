function attachTodoCreationForm() {
	document.getElementById("default-new-todo").addEventListener("click",
		function(){
			document.getElementById("default-todo-form").style.display = "block";
		}
	);
}

function attachNotebookCreationForm() {
	document.getElementById("new-notebook").addEventListener("click",
		function(){
			document.getElementById("notebook-form").style.display = "block";
		}
	);
}

function addTodoDOM(string) {
	document.getElementById("default-todo-form").style.display = "none";
	document.getElementById("default-todo-list").innerHTML += "<p>" + string + "</p>";
}

function addNotebookDOM(string) {
	document.getElementById("notebook-form").style.display = "none";
	var element = document.createElement("div");
	element.id = string + "-todo-list";
	element.innerHTML = "<h2>" + string + "</h2>";
	document.body.appendChild(element);
}

export { attachTodoCreationForm, attachNotebookCreationForm, addNotebookDOM, addTodoDOM }