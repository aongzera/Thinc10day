
// Function to capture user input when the "Next" button is clicked
document.querySelector(".next-btn").addEventListener("click", function() {
    // Capture input values
    var tripName = document.getElementById("trip-name").value;
    var location = document.getElementById("location").value;
    var budget = document.getElementById("budget").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;

    // You can store this data or pass it to another page if needed.
    // For example, if you want to pass this data to the next page:
    localStorage.setItem("tripName", tripName);
    localStorage.setItem("location", location);
    localStorage.setItem("budget", budget);
    localStorage.setItem("from", from);
    localStorage.setItem("to", to);

    // Navigate to the next page
    //window.location.href = 'createTrip2.html';
});