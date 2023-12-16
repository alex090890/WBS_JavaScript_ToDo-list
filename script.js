//Create the variable connected with the HTML
const addNewTask = document.querySelector(".addnewtask");
const addNewTaskForm = document.querySelector(".addnewtaskform");
const cancelAdding = document.querySelector("#cancelAdding");

//Open the input field menu when clicked on the "Add a new task button"
let open = function() {
    addNewTaskForm.style.display = "block";
    addNewTask.style.display = "none";
};
addNewTask.addEventListener('click', open);

//Close the menu when clicking the "Cancel button"
let close = function() {
    addNewTaskForm.style.display = "none";
    addNewTask.style.display = "block";
};
cancelAdding.addEventListener('click', close);


//Add a new list item
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents form submission and page reload

    // Get the text from the input field
    let labelText = document.getElementById('newItem').value;

    // Create a new label element
    let newLabel = document.createElement('label');
    newLabel.classList.add('list-group-item');

    // Create an input element
    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'checkbox');
    newInput.classList.add('form-check-input', 'me-1');

    // Append the input and label text to the new label
    newLabel.appendChild(newInput);
    newLabel.appendChild(document.createTextNode(labelText));

    // Get the label list and append the new label
    let labelList = document.getElementById('labelList');
    labelList.appendChild(newLabel);

    // Clear the input field after adding the label
    document.getElementById('newItem').value = '';
});
