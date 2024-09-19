// Function to validate form inputs
function validate() {
    const username = document.getElementById('uname').value;
    const password = document.getElementById('pword').value;
    const message = document.getElementById('msg');
  
    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Username and Password cannot be empty.";
        return false;
    }
  
    // Redirect to the next page
    window.location.href = 'nextpage.html'; // Replace with your target URL
  
    return false; // Prevent form submission
}

document.getElementById('hotel-savisagar').addEventListener('click', function() {
    var menu = document.getElementById('menu-savisagar');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.getElementById('hotel-vishnu').addEventListener('click', function() {
    var menu = document.getElementById('menu-vishnu');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});

document.getElementById('hotel-karavali').addEventListener('click', function() {
    var menu = document.getElementById('menu-karavali');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});
document.getElementById('hotel-gokula').addEventListener('click', function() {
    var menu = document.getElementById('menu-gokula');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
});


document.getElementById('search-button').addEventListener('click', function() {
    // Get the search input value and convert it to uppercase for case-insensitive search
    const searchQuery = document.getElementById('search-input').value.toUpperCase();
    
    // Get all hotel containers
    const hotelContainers = document.querySelectorAll('.hotel-container');

    hotelContainers.forEach(container => {
        // Get the hotel name and convert it to uppercase for case-insensitive comparison
        const hotelName = container.querySelector('.hotel-name').textContent.toUpperCase();

        // Check if the search query matches the hotel name
        if (hotelName.includes(searchQuery) || searchQuery === "") {
            container.style.display = 'flex'; // Show the container if it matches
        } else {
            container.style.display = 'none'; // Hide the container if it does not match
        }
    });
});


