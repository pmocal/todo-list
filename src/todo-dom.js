function attachTodoCreationForm() {
	document.getElementById("new-todo").addEventListener("click",
		function(){
			document.getElementById("form").style.display = "block";
		}
	);
}

function addTodoDOM(string) {
	document.getElementById("form").style.display = "none";
	document.getElementById("todo-list").innerHTML += "<p>" + string + "</p>";
}

export { attachTodoCreationForm, addTodoDOM }