document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and display user information
    const userInfo = localStorage.getItem('user-info');
    const usernames = localStorage.getItem('user-names');
    const userimg = localStorage.getItem('user-profileimg');
    const imggoogleElement = document.getElementById("profile");
    const userEmaild = localStorage.getItem('user-emailess');

    if (userInfo) {
        // Display login user information
        const { firstname, lastname } = JSON.parse(userInfo);
               
      
        document.getElementById("nameandemail").innerHTML = `
        <div class="name">${firstname} ${lastname}</div>`;
        imggoogleElement.innerHTML = `
        <div class="profile"><i class="bi bi-person-fill"></i></div>`;
       
    } else if (usernames && userimg && userEmaild) {
        // Display register user information
        const { displayName } = JSON.parse(usernames);
        const { userimage } = JSON.parse(userimg);
        const { userEmail } = JSON.parse(userEmaild);

        imggoogleElement.innerHTML = `<div class="profile"><img src="${userimage}"></div>`;
           
        document.getElementById("nameandemail").innerHTML = `
        <div class="name">${displayName}</div>
        <div class="email">${userEmail}</div>`;
        
    } 
    
});

function backButton() {
  window.location.href = 'Home.html';
}
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const responseContainers = document.querySelectorAll('.responseContainer');

        responseContainers.forEach(container => {
            const title = container.querySelector('.responseTitle');
            const titleText = title.innerText.toLowerCase();
            const response = container.querySelector('.responseContent');
            const responseText = response.innerText.toLowerCase();

            if (titleText.includes(searchTerm) || responseText.includes(searchTerm)) {
                // Show the item
                container.style.display = '';

                // Highlight matching keywords in response container
                highlightKeywords(title, searchTerm);
                highlightKeywords(response, searchTerm);
            } else {
                // Hide the item
                container.style.display = 'none';
            }
        });
    });

    function highlightKeywords(element, searchTerm) {
    if (searchTerm) {
        const originalText = element.textContent;
        const regex = new RegExp(searchTerm, 'gi');
        const newText = originalText.replace(regex, match => `<mark>${match}</mark>`);
        element.innerHTML = newText;
    } else {
        element.innerHTML = element.textContent; // Set the element's innerHTML to its original text
    }
}
    
       // Clear highlighting when search bar is cleared
    searchInput.addEventListener('change', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (!searchTerm) {
            const markedElements = document.querySelectorAll('mark');
            markedElements.forEach(element => {
                const parent = element.parentNode;
                parent.replaceChild(document.createTextNode(element.textContent), element);
            });
        }
    });
});
