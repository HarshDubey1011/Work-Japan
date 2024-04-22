document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search");
  const jobList = document.getElementById("job-list");

  // Fetch job listings from API
  async function fetchJobListings() {
    try {
      const response = await fetch("https://api.example.com/job-listings");
      const data = await response.json();
      displayJobListings(data);
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
                <h3>${listing.title}</h3>
                <p><strong>Location:</strong> ${listing.location}</p>
                <p><strong>Type:</strong> ${listing.type}</p>
            `;
      jobList.appendChild(li);
    });
  }

  // Filter job listings based on search input
  function filterJobListings(searchTerm) {
    const filteredListings = jobListings.filter(function (listing) {
      return listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    displayJobListings(filteredListings);
  }

  // Initial display of job listings
  fetchJobListings();

  // Event listener for search input
  searchInput.addEventListener("input", function () {
    filterJobListings(this.value);
  });
});
