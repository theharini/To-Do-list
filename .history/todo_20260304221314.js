// Get input box
const inputBox = document.getElementById("input-box");

// Get list container
const listContainer = document.getElementById("list-container");

// Function to add task
function addTask() {

    if (inputBox.value.trim() === "") {
        alert("You must write something!");
        return;
    }

    // Create li
    let li = document.createElement("li");
    li.innerText = inputBox.value;

    // Add li to list
    listContainer.appendChild(li);

    // Create delete button
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; // × symbol
    li.appendChild(span);

    inputBox.value = "";
    saveData();
}

// Click events (check / delete)
listContainer.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }

}, false);


// Save data in localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}


// Show saved tasks when page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data") || "";
}

// Run when page loads
showTask();