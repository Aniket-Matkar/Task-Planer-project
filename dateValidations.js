// JavaScript
window.addEventListener("DOMContentLoaded", function () {
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const statusSelect = document.getElementById("status");

    // Function to get the current date 
    function getCurrentDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const day = String(today.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    // Function to validate selected dates
    function validateDates() {
        const currentDate = getCurrentDate();
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        // if (startDate < currentDate) {
        //     startDateInput.value = currentDate;
        // }
        if (endDate < currentDate) {
            // endDateInput.value = currentDate;
            // console.log('end date cant be less than current date');
            statusSelect.querySelector('option[value="Due Passed"]').disabled = false; // to reset
            statusSelect.querySelector('option[value="Work In Progress"]').disabled = true;
        }
        if (endDate > currentDate) {
            statusSelect.querySelector('option[value="Work In Progress"]').disabled = false; // to reset 
            statusSelect.querySelector('option[value="Due Passed"]').disabled = true;
        }

        if(endDate < startDate){
            // alert("Invalid End Date");
            // endDateInput.value = startDate;
            console.log('end date cant be less than start date');
        }
    }

    // Attach event listeners to the date inputs
    startDateInput.addEventListener("change", validateDates);
    endDateInput.addEventListener("change", validateDates);
});
