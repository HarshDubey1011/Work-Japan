document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const jobList = document.getElementById("job-list");
  const searchButton = document.getElementById("search-btn");

var url = "https://jooble.org/api/";
var key = "301bff4b-2e98-4108-bbec-56a56a3d8cae";
var params = "{ keywords: 'it', location: 'Japan'}"


  // Fetch job listings from API
  async function fetchJobListings() {
    try {
      var http = new XMLHttpRequest();
      //open connection. true - asynchronous, false - synchronous
      http.open("POST", url + key, true);

      //Send the proper header information
      http.setRequestHeader("Content-type", "application/json");
  
      //Callback when the state changes
      http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
          console.log(http.responseText)
          alert(http.responseText);
          // displayJobListings(data);
        }
      }
      //Send request to the server
      http.send(params);
      
    } catch (error) {
      console.error("Error fetching job listings:", error);
    }
  }

  // Display job listings
  function displayJobListings(listings) {
    jobList.innerHTML = "";
    listings.forEach(function (listing) {
      const li = document.createElement("li");
      li.innerHTML = `
                <h3>${listing.title}nhgko</h3>
                <p><strong>Location:</strong> ${listing.location}</p>
                <p><strong>Type:</strong> ${listing.type}</p>
            `;
      jobList.appendChild(li);
    });
  }

  searchButton.addEventListener("click", function () {
    displayJobListings(); // Call fetchJobListings on button click
  });

  // Event listener for search input
  searchInput.addEventListener("input", function () {
    fetchJobListings(this.value);
  });


});
