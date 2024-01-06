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

// Function to create Edit and Delete buttons
function createEditDeleteButtons(label) {
  // Create Edit button
  let editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('btn', 'btn-primary', 'btn-sm', 'me-1');

  // Create Delete button
  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');

  // Event listener for Edit button
  editButton.addEventListener('click', function() {

  });

  // Event listener for Delete button
  deleteButton.addEventListener('click', function() {
    label.remove();
  });

  // Append buttons to the given label
  label.appendChild(editButton);
  label.appendChild(deleteButton);
}

// Function to add buttons to existing items and set up event delegation
function setupButtonsForExistingItems() {
  let labels = document.querySelectorAll('.list-group-item');
  labels.forEach(label => {
    createEditDeleteButtons(label);
  });
}

// Call the function to add buttons to existing items initially
setupButtonsForExistingItems();

// Update the event delegation for dynamically added buttons
document.getElementById('labelList').addEventListener('click', function(event) {
  if (event.target.classList.contains('btn-primary')) {
    // Edit button clicked
    let label = event.target.parentNode;
    console.log('Edit task:', label.textContent);
  } else if (event.target.classList.contains('btn-danger')) {
    // Delete button clicked
    let label = event.target.parentNode;
    label.remove();
  }
});

// Function to add a new list item
function addNewListItem(labelText) {
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

  // Create Edit and Delete buttons for the new label
  createEditDeleteButtons(newLabel);
}

// Update the event listener for the form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form submission and page reload
  let labelText = document.getElementById('newItem').value;
  addNewListItem(labelText);
  document.getElementById('newItem').value = '';
});