//selector

var todoInput = document.querySelector(".todo-input");
var todoButton = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");


//event handler
todoButton.onclick = addDivList;
todoList.onclick = checkdelete;




//function

function addDivList(e) {

    e.preventDefault();

    var newDiv = document.createElement("div");
    newDiv.classList.add("todo");

    var newLi = document.createElement("li");
    newLi.classList.add("todo-item");
    var data = todoInput.value;
    if (data != "") {
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);
        todoInput.value = "";

        var checkbtn = document.createElement("button");
        checkbtn.classList.add("check-btn");
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        newDiv.appendChild(checkbtn);

        var deletebtn = document.createElement("button");
        deletebtn.classList.add("delete-btn");
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        newDiv.appendChild(deletebtn);

        todoList.appendChild(newDiv);
    }
}

function checkdelete(e) {
    var item = e.target;
    if (item.classList[0] === "delete-btn") {
        var parent = item.parentNode;
        parent.remove();
    }
    if (item.classList[0] === "check-btn") {
        var parent = item.parentNode;
        parent.classList.toggle("completed");
    }
}