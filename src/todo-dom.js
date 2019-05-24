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

function addTodoDOM(obj) {

	document.getElementById("todo-form").style.display = "none";

	var colorAttr = getColor(obj);

	var todoDiv = showMoreLessDiv(obj, colorAttr);
	document.getElementById(obj.notebook + "-todo-list").appendChild(todoDiv);

}

function addNotebookDOM(string) {
	document.getElementById("notebook-form").style.display = "none";
	var element = document.createElement("div");
	element.id = string + "-todo-list";
	element.innerHTML = "<h2>" + string + "</h2>";
	document.body.insertBefore(element, document.getElementsByTagName('button')[0]);
}

function showMoreLessDiv(obj, colorAttr) {
	var todoDiv = document.createElement("div");

	var div1 = document.createElement("div");
	div1.id = obj.notebook + "-" + obj.title + "-" + "div1";

	//lessdiv

	var element1 = document.createElement("p");
	element1.innerHTML = obj.toString();
	element1.style.color = colorAttr;
	element1.style.display = "inline";

	var element3 = document.createElement("span");
	element3.innerHTML = "Show more";
	element3.style.display = "inline";
	element3.addEventListener("click", function() {
		document.getElementById(obj.notebook + "-" + obj.title + "-" + "div1").style.display = "none";
		document.getElementById(obj.notebook + "-" + obj.title + "-" + "div2").style.display = "block";
	});


	div1.appendChild(element1);
	div1.appendChild(element3);
	todoDiv.appendChild(div1);

	//morediv

	var div2 = document.createElement("div");
	div2.id = obj.notebook + "-" + obj.title + "-" + "div2";
	
	var element2 = document.createElement("p");
	element2.innerHTML = JSON.stringify(obj);
	element2.id = obj.notebook + "-" + obj.title + "-" + "more";
	element2.style.color = colorAttr;

	var element4 = document.createElement("span");
	element4.innerHTML = "Show less";
	element4.style.display = "inline";
	element4.addEventListener("click", function() {
		document.getElementById(obj.notebook + "-" + obj.title + "-" + "div2").style.display = "none";
		document.getElementById(obj.notebook + "-" + obj.title + "-" + "div1").style.display = "block";
	});

	div2.appendChild(element2);
	div2.appendChild(element4);
	div2.style.display = "none";
	todoDiv.appendChild(div2);

	return todoDiv;
}

function getColor(obj) {
	var colorAttr = "";
	if (obj.priority === "High") {
		colorAttr = "red"
	}
	else if (obj.priority === "Medium") {
		colorAttr = "orange";
	}
	else if (obj.priority === "Low") {
		colorAttr = "yellow";
	}
	else {
		colorAttr = "black";
	}
	return colorAttr;
}

export { attachTodoCreationForm, attachNotebookCreationForm, addNotebookDOM, addTodoDOM }