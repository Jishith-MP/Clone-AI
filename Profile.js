document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and display user information
    const userCreds = localStorage.getItem('user-creds');
    const userInfo = localStorage.getItem('user-info');
    const usernames = localStorage.getItem('user-names');
    const userdata = localStorage.getItem('user-data');
    const userimg = localStorage.getItem('user-profileimg');
    const imggoogleElement = document.getElementById("imggoogle");
    const userEmaild = localStorage.getItem('user-emailess');

    if (userCreds && userInfo) {
        // Display login user information
        const { firstname, lastname } = JSON.parse(userInfo);
        const { uid } = JSON.parse(userCreds);
       
      imggoogleElement.innerHTML = `<div class="imggoogle"><i class="bi bi-person-fill"></i></div>`;
        document.getElementById("items").innerHTML = `
            <div class="uid"><b>User Id:</b> ${uid}</div><br>
            <div class="name"> <b>Name: </b>${firstname} ${lastname}</div>`;
      
    } else if (usernames && userdata && userimg && userEmaild) {
        // Display register user information
        const { displayName } = JSON.parse(usernames);
        const { uid } = JSON.parse(userdata);
        const { userimage } = JSON.parse(userimg);
        const { userEmail } = JSON.parse(userEmaild);

        imggoogleElement.style.display = 'block';
        imggoogleElement.innerHTML = `<div class="imggoogle"><img src="${userimage}"></div>`;
        imggoogleElement.innerHTML += `<div class="profilesvg"><img src="${userimage}"></div>`;
     
        document.getElementById("items").innerHTML = `
            <div class="uid"><strong>User id:</strong> ${uid}</div><br>
            <div class="email"><strong>Email id:</strong> ${userEmail}</div><br>
            <div class="name"><strong>Name:</strong>${displayName}</div>`;
    }

    // Add event listener to sign out button
    const signoutButton = document.getElementById('signoutBtn');
    signoutButton.addEventListener('click', function() {
        // Remove user credentials and information from session storage
        localStorage.removeItem('user-creds');
        localStorage.removeItem('user-info');
        localStorage.removeItem('user-names');
        localStorage.removeItem('user-data');
        localStorage.removeItem('user-profileimg');
        localStorage.removeItem('user-emailess');
        sessionStorage.removeItem('saveResponse');
        
        window.location.href = 'index.html';
        
        // Display spinner while processing sign out
        document.getElementById("spinner").style.display = "block";
    });
});
  
function back() {
        window.location.href = 'Home.html';
    }

//curruntly this function is enabled
  function updateRedDotDisplay() {
    let boxd = document.getElementById("notibox");
    let svgNotification = document.getElementById('reddot');

    // Check if the notification box contains any text
    if (boxd.innerText.trim().length > 0) {
        svgNotification.style.display = 'block';
    } else {
        svgNotification.style.display = 'none';
    }
}

function notificationbox2() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'block';
    let box = document.getElementById("notibox");
    box.style.display = 'block';
    updateRedDotDisplay();
}

function closenotibox() {
    let overlay = document.getElementById("overlay");
    overlay.style.display = 'none';
    let box = document.getElementById("notibox");
    box.style.display = 'none';
    updateRedDotDisplay();
    // Add an event listener to monitor changes in the content of the notification box
    document.getElementById("notibox").addEventListener("DOMSubtreeModified", updateRedDotDisplay);
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
