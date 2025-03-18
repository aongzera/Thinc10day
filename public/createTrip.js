
function initMap() {
    var map;
    var marker;
    // Create a map centered at a default location
    map = new google.maps.Map(document.getElementById('map'), {
      center: { lat: 13.73672, lng: 100.5337007 },
      zoom: 18,
    });

    // Create a marker
    marker = new google.maps.Marker({
      map: map,
    });

    // Create an input element and use Autocomplete
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input);

    // Bind autocomplete to the map bounds
    autocomplete.bindTo('bounds', map);

    // When a place is selected from autocomplete
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        return;
      }

      // If the place has a geometry, update the map center and marker
      if (place.geometry.location) {
        map.setCenter(place.geometry.location);
        map.setZoom(15);  // Zoom in to a higher level

        // Move the marker to the selected location
        marker.setPosition(place.geometry.location);
      }
    });
  }
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