

  function populateDropdown(matches) {
    var dropdown = document.getElementById("dropdown");
    dropdown.innerHTML = ''; // Clear previous content
  
    matches.forEach((item) => {
      var option = document.createElement("div");
      option.textContent = `${item.sstring}`;
      option.addEventListener('click', function() {
        document.getElementById('searchInput').value = `${item.sstring}`;
        dropdown.innerHTML = ''; // Hide dropdown after selection
      });
      dropdown.appendChild(option);
    });
  }
  
  async function search(ev) {
    var key = ev.target.value.trim().toLowerCase();
    var matches = [];

    var response = await fetch('./json/search.json');

    const jsonData = await response.json();
  
    if (key) {
      matches = jsonData.filter((data) => {
        return data.sstring.toLowerCase().includes(key);
      });
    }
  
    populateDropdown(matches);
  }
  
  window.onload = function() {
    // Additional setup if needed
  };
  
