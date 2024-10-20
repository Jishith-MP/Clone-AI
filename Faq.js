document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and display user information
    const userCreds = localStorage.getItem('user-creds');
    const userInfo = localStorage.getItem('user-info');
    const userimg = localStorage.getItem('user-profileimg');
    const imggoogleElement = document.getElementById("profiles");
    
    if (userCreds && userInfo) {
        // Display login user information
        const { firstname, lastname } = JSON.parse(userInfo);
        const { uid } = JSON.parse(userCreds);
       
      imggoogleElement.innerHTML = `<div class="profile>"><i class="bi bi-person-circle"></i></div>`;
              
    } else if (userimg) {
        // Display register user information
        const { userimage } = JSON.parse(userimg);
        
        imggoogleElement.innerHTML = `<div class="profile"><img src="${userimage}"></div>`;
          }
})

function backtohome() {
    window.location.href = 'Home.html';
}
function profilebtn() {
    window.location.href = 'Profile.html';
}
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const accordionItems = document.querySelectorAll('.accordion-item');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();

        accordionItems.forEach(item => {
            const heading = item.querySelector('.faqheading');
            const body = item.querySelector('.accordiontext');
            const headingText = heading.innerText.toLowerCase();
            const bodyText = body.innerText.toLowerCase();

            if (headingText.includes(searchTerm) || bodyText.includes(searchTerm)) {
                // Show the item
                item.style.display = '';

                // Highlight matching keywords in heading
                highlightKeywords(heading, searchTerm);

                // Highlight matching keywords in body
                highlightKeywords(body, searchTerm);
            } else {
                // Hide the item
                item.style.display = 'none';
            }
        });
    });
    
    // Clear highlighting when search bar is cleared
    searchInput.addEventListener('change', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            accordionItems.forEach(item => {
                const heading = item.querySelector('.faqheading');
                const body = item.querySelector('.accordiontext');
                // Remove the <mark> tags
                heading.innerHTML = heading.innerText;
                body.innerHTML = body.innerText;
            });
        }
    });
});

function highlightKeywords(element, searchTerm) {
    const text = element.innerText;
    if (searchTerm) {
        const newText = text.replace(new RegExp(searchTerm, 'gi'), match => `<mark style="background-color: yellow;">${match}</mark>`);
        element.innerHTML = newText;
    } else {
        // If search term is empty, remove existing mark tags
        element.innerHTML = text;
    }
}
window.addEventListener('DOMContentLoaded', function() { // Check if the user is authenticated
    if (!isUserAuthenticated()) { // Redirect the user to the login page
        window.location.href = 'Login.html'; 
    }
});

function isUserAuthenticated() {
    // Check if both user credentials and user data are present in session storage
    
    return localStorage.getItem('user-creds') !== null || localStorage.getItem('user-data') !== null;
}
