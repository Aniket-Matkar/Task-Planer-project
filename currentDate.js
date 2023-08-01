// Function to format the date
function formatDate(date) {
    addTaskToTable();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// Function to update the value of the "currentDate" input
function updateCurrentDate() {
    const currentDateInput = document.getElementById("currentDate");
    const today = new Date();
    currentDateInput.value = formatDate(today);
}

// Call the function to update the current date when the page loads
window.addEventListener("DOMContentLoaded", updateCurrentDate);

