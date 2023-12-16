const addNewTask = document.querySelector(".addnewtask");
const addNewTaskForm = document.querySelector(".addnewtaskform");
const cancelAdding = document.querySelector("#cancelAdding")


let open = function() {
    addNewTaskForm.style.display = "block";
};

addNewTask.addEventListener('click', open);

let close = function() {
    addNewTaskForm.style.display = "none";
};

cancelAdding.addEventListener('click', close);