// Get the input box element where the user types the task
const inputBox = document.getElementById("input-box");

// Get the <ul> element where the tasks will be listed
const listContainer = document.getElementById("list-container");

// Function to add a new task to the list
function addTask() {
    // Check if the input is empty
    if (inputBox.value === '') {
        alert("You must write something!"); // Alert the user to type something
    } else {
        // Create a new <li> element for the task
        let li = document.createElement("li");

        // Set the text of the <li> to the value from the input box
        li.innerHTML = inputBox.value;

        // Add the <li> to the list container (<ul>)
        listContainer.appendChild(li);

        // Create a <span> element to act as the delete (×) button
        let span = document.createElement("span");

        // Set the content of the span to Unicode character × (multiplication sign)
        span.innerHTML = "\u00D7"; // ✖ symbol

        // Add the span inside the <li>
        li.appendChild(span);
    }

    // Clear the input box after adding the task
    inputBox.value = "";

    // Save the updated list to localStorage
    saveData();
}

// Add an event listener to the <ul> list container
listContainer.addEventListener("click", function (e) {
    // If the clicked element is an <li>, toggle the "checked" class
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // Save updated data to localStorage
    } 
    // If the clicked element is a <span>, remove the parent <li> (delete task)
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Removes the entire <li>
        saveData(); // Save updated data to localStorage
    }
}, false);

// Function to save the current task list in localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Save HTML of list
}

// Function to show tasks when page reloads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data"); // Load saved tasks
}

// Call showTask() initially to display saved tasks from localStorage
showTask();




// ✅ Summary of Key Concepts Used:
// document.getElementById(): Used to access elements by ID.

// createElement(): Used to dynamically create HTML elements.

// appendChild(): Adds a child element to a parent.

// addEventListener(): Handles events like clicking.

// localStorage: Stores data locally in the browser (even after refresh).

// \u00D7: Unicode character for the "×" delete symbol.

// classList.toggle(): Adds/removes class for strikethrough on click.