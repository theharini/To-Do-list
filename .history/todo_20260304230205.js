// Get the input box element where the user types the task
const inputBox = document.getElementById("input-box");

// Get the <ul> element where the tasks will be listed
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {

    // Check if input is empty or only spaces
    if (inputBox.value.trim() === "") {
        alert("You must write something!"); // Show alert if input is empty
        return; // Stop the function
    }

    // Create a new <li> element
    let li = document.createElement("li");
    li.innerText = inputBox.value; // Set text of <li> to input value

    // Append the new <li> to the list
    listContainer.appendChild(li);

    // Create a <span> element for the delete button (×)
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; // × symbol
    li.appendChild(span); // Add delete button to <li>

    // Clear the input box after adding the task
    inputBox.value = "";

    // Save updated list in localStorage
    saveData();
}

// Add click event listener to the list for checking off or deleting tasks
listContainer.addEventListener("click", function(e) {

    // If clicked element is a <li>, toggle 'checked' class
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); // Mark task as done/undone
        saveData(); // Save updated state
    }

    // If clicked element is a <span> (delete button), remove its parent <li>
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the task
        saveData(); // Save updated list
    }

}, false); // false means event bubbling (standard practice)

// Function to save current tasks to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
    // localStorage stores data in browser even after page refresh
}

// Function to display tasks saved in localStorage when page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
    // If no data, show empty string
}

// Run showTask() when the page loads
showTask();