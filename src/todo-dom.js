function attachTodoCreationForm() {
	document.getElementById("new-todo").addEventListener("click", function() {
		document.getElementById("todo-form").style.display = "block";
		document.getElementById("notebook-form").style.display = "none";
	});
}

function attachNotebookCreationForm() {
	document
		.getElementById("new-notebook")
		.addEventListener("click", function() {
			document.getElementById("todo-form").style.display = "none";
			document.getElementById("notebook-form").style.display = "block";
		});
}

function addTodoDOM(obj) {
	var colorAttr = getColor(obj.priority);
	document.getElementById("todo-form").style.display = "none";

	var todoDiv = document.createElement("div");
	todoDiv.appendChild(moreDiv(obj, colorAttr));
	todoDiv.appendChild(lessDiv(obj, colorAttr));
	todoDiv.appendChild(editDeleteDiv(obj));

	document.getElementById(obj.notebook + "-todo-list").appendChild(todoDiv);
}

function editTodoDOM(oldTodoString, newObj) {
	var colorAttr = getColor(newObj.priority);
	document.getElementById("todo-form").style.display = "none";

	document
		.getElementById(oldTodoString + "-more-div")
		.getElementsByTagName("p")[0].innerHTML = JSON.stringify(newObj);

	var todoLessDivContents = document
		.getElementById(oldTodoString + "-less-div")
		.getElementsByTagName("p")[0];
	todoLessDivContents.innerHTML = newObj.toString();
	todoLessDivContents.style.color = colorAttr;
}

function deleteTodoDOM(todoString) {
	var elem = document.getElementById(document.querySelectorAll('[name="delete-name"]')[0].value + "-more-div");
	elem.parentNode.removeChild(elem);
	elem = document.getElementById(document.querySelectorAll('[name="delete-name"]')[0].value + "-less-div");
	elem.parentNode.removeChild(elem);
}

function addNotebookDOM(string) {
	document.getElementById("notebook-form").style.display = "none";
	var element = document.createElement("div");
	element.id = string + "-todo-list";
	element.innerHTML = "<h2>" + string + "</h2><p>name due date</p>";

	document.body.insertBefore(
		element,
		document.getElementsByTagName("button")[
			document.getElementsByTagName("button").length - 2
		]
	);
}

function editDeleteDiv(obj) {
	var div = document.createElement("div");
	var editButton = document.createElement("button");
	editButton.innerHTML = "Edit";
	editButton.style.display = "inline";
	editButton.addEventListener("click", function() {
		document.querySelectorAll('[name="duedate"]')[0].value = obj.duedate;
		document.querySelectorAll('[name="title"]')[0].value = obj.title;
		document.querySelectorAll('[name="priority"]')[0].value = obj.priority;
		document.querySelectorAll('[name="notebook"]')[0].value = obj.notebook;
		document.querySelectorAll('[name="submit-todo"]')[0].className = "edit";
		document.querySelectorAll(
			'[name="old-name"]'
		)[0].value = obj.todoString();
		document.getElementById("todo-form").style.display = "block";
	});
	div.appendChild(editButton);
	var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.style.display = "inline";
	deleteButton.addEventListener("click", function() {
		document.getElementById("delete-form").style.display = "block";
		document.querySelectorAll(
			'[name="delete-name"]'
		)[0].value = obj.todoString();
	});
	div.appendChild(deleteButton);
	return div;
}

function lessDiv(obj, colorAttr) {
	//this is the div with toString() and show more button to see expanded todo
	var div = document.createElement("div");
	div.id = obj.todoString() + "-less-div";
	var p = document.createElement("p");
	p.innerHTML = obj.toString();
	p.style.color = colorAttr;
	p.style.display = "inline";
	//show more button helper
	div.appendChild(p);
	div.appendChild(createShowMoreButton(obj));
	return div;
}

function createShowMoreButton(obj) {
	var span = document.createElement("span");
	span.innerHTML = "Show more";
	span.style.display = "inline";
	span.addEventListener("click", function() {
		document.getElementById(obj.todoString() + "-less-div").style.display =
			"none";
		document.getElementById(obj.todoString() + "-more-div").style.display =
			"block";
	});
	return span;
}

function moreDiv(obj, colorAttr) {
	//this is the div with all attributes shown and a show less button
	var div = document.createElement("div");
	div.id = obj.todoString() + "-more-div";
	var p = document.createElement("p");
	p.innerHTML = JSON.stringify(obj);
	p.style.color = colorAttr;
	p.style.display = "inline";
	//show less button helper
	div.appendChild(p);
	div.appendChild(createShowLessButton(obj));
	div.style.display = "none";
	return div;
}

function createShowLessButton(obj) {
	var span = document.createElement("span");
	span.innerHTML = "Show less";
	span.style.display = "inline";
	span.addEventListener("click", function() {
		document.getElementById(obj.todoString() + "-more-div").style.display =
			"none";
		document.getElementById(obj.todoString() + "-less-div").style.display =
			"block";
	});
	return span;
}

function getColor(priority) {
	var colorAttr = "";
	if (priority === "High") {
		colorAttr = "red";
	} else if (priority === "Medium") {
		colorAttr = "orange";
	} else if (priority === "Low") {
		colorAttr = "yellow";
	} else {
		colorAttr = "black";
	}
	return colorAttr;
}

export {
	attachTodoCreationForm,
	attachNotebookCreationForm,
	addNotebookDOM,
	addTodoDOM,
	editTodoDOM,
	deleteTodoDOM
};