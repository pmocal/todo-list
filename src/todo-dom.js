function attachTodoCreationForm(string) {
	document.getElementById("new-todo").addEventListener("click",
		function(){
			document.getElementById("todo-form").style.display = "block";
			document.getElementById("notebook-form").style.display = "none";
		}
	);
}

function attachNotebookCreationForm() {
	document.getElementById("new-notebook").addEventListener("click",
		function(){
			document.getElementById("todo-form").style.display = "none";
			document.getElementById("notebook-form").style.display = "block";
		}
	);
}

function addTodoDOM(string, notebook, priority) {
	var colorAttr;
	document.getElementById("todo-form").style.display = "none";
	if (document.getElementById("priority").value === "high") {
		colorAttr = "red"
	}
	else if (document.getElementById("priority").value === "medium") {
		colorAttr = "orange";
	}
	else if (document.getElementById("priority").value === "low") {
		colorAttr = "yellow";
	}
	document.getElementById(notebook + "-todo-list").innerHTML += "<p style='color:" + colorAttr + ";'>" + string + "</p>";
}

function addNotebookDOM(string) {
	document.getElementById("notebook-form").style.display = "none";
	var element = document.createElement("div");
	element.id = string + "-todo-list";
	element.innerHTML = "<h2>" + string + "</h2>";
	document.body.insertBefore(element, document.getElementsByTagName('button')[0]);
}

export { attachTodoCreationForm, attachNotebookCreationForm, addNotebookDOM, addTodoDOM }