import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

// Your Firebase configuration
function _0x12f1(_0x152ab3,_0x2f850f){const _0x28ff47=_0x34ff();return _0x12f1=function(_0x4daf73,_0x5ad21c){_0x4daf73=_0x4daf73-(-0x21a*-0x6+0xa51+-0x15e8);let _0xd6a30a=_0x28ff47[_0x4daf73];return _0xd6a30a;},_0x12f1(_0x152ab3,_0x2f850f);}const _0x4fcc3b=_0x12f1;(function(_0x4b4345,_0x33fb49){const _0xda3c8=_0x12f1,_0x2f0a4a=_0x4b4345();while(!![]){try{const _0x459188=-parseInt(_0xda3c8(0x10e))/(-0x1a50+-0x9e6+0x2437)*(parseInt(_0xda3c8(0x117))/(0xa7*0x1a+-0x33d+-0x1*0xdb7))+parseInt(_0xda3c8(0x122))/(-0x520+-0xb2*-0x12+0x1*-0x761)*(parseInt(_0xda3c8(0x113))/(-0x16df+0x15b3+-0x98*-0x2))+-parseInt(_0xda3c8(0x10c))/(-0x5*0x679+0x207e+-0x1c)*(-parseInt(_0xda3c8(0x10d))/(-0x1e00+-0x390+0x2196))+parseInt(_0xda3c8(0x11e))/(-0x1*0xe51+0x2*0xfc9+-0x113a)+-parseInt(_0xda3c8(0x106))/(0x9b*0x2b+-0xfd4+-0xa2d)*(-parseInt(_0xda3c8(0x107))/(-0x6*-0x54a+-0x2ab*-0x1+-0x225e))+-parseInt(_0xda3c8(0x119))/(0x2202+-0x3e*-0x51+-0x3596)+-parseInt(_0xda3c8(0x10b))/(-0x2618+-0x158a+0x3bad*0x1);if(_0x459188===_0x33fb49)break;else _0x2f0a4a['push'](_0x2f0a4a['shift']());}catch(_0x9ac4d6){_0x2f0a4a['push'](_0x2f0a4a['shift']());}}}(_0x34ff,-0x8*-0xc68e+-0xdb20a+0x16183a));const firebaseConfig={'apiKey':_0x4fcc3b(0x116)+_0x4fcc3b(0x11b)+_0x4fcc3b(0x118)+_0x4fcc3b(0x120),'authDomain':_0x4fcc3b(0x112)+_0x4fcc3b(0x109)+_0x4fcc3b(0x10f),'databaseURL':_0x4fcc3b(0x11c)+_0x4fcc3b(0x110)+_0x4fcc3b(0x121)+_0x4fcc3b(0x105)+_0x4fcc3b(0x11d),'projectId':_0x4fcc3b(0x112)+'m','storageBucket':_0x4fcc3b(0x112)+_0x4fcc3b(0x11a)+_0x4fcc3b(0x114),'messagingSenderId':_0x4fcc3b(0x123)+'09','appId':_0x4fcc3b(0x10a)+_0x4fcc3b(0x115)+_0x4fcc3b(0x11f)+_0x4fcc3b(0x111)+'c','measurementId':_0x4fcc3b(0x108)+'7M'};function _0x34ff(){const _0x277de7=['1:83141430','10747737issYfs','30370iXfNzs','1122DkCxWY','174zezwlT','app.com','oneai-com-','b160dccd89','cloneai-co','1828VCUXeZ','com','6709:web:d','AIzaSyBGnB','15816EoFaqX','m1EUSl4iB6','5758120xvUpiH','m.appspot.','ZccBIa3Wm6','https://cl','eio.com','12724866YMTUeA','d8bfcdfe4f','IOLOvhe4s','default-rt','153HOxUcD','8314143067','db.firebas','2784dDaLDm','23508YacuOy','G-YS228PXL','m.firebase'];_0x34ff=function(){return _0x277de7;};return _0x34ff();}


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the Auth service for the initialized app
const auth = getAuth(app);

  let UserCreds = JSON.parse(localStorage.getItem("user-creds"));
  let UserInfo = JSON.parse(localStorage.getItem("user-info"));
  let signoutBtn = document.getElementById('Logout');


signoutBtn.addEventListener('click', function() {
    // Firebase logout
    auth.signOut().then(() => {
        // Remove user credentials and information from session storage
        localStorage.removeItem('user-creds');
        localStorage.removeItem('user-info');
        localStorage.removeItem('user-names');
        localStorage.removeItem('user-data');
        localStorage.removeItem('user-profileimg');
        localStorage.removeItem('user-emailess');
        sessionStorage.removeItem('saveResponse');
              
        // Redirect user to login page after 2 seconds
        setTimeout(() => {
            window.location.href = 'Login.html';
        }, 2000);
    }).catch((error) => {
        console.error('Error logging out:', error);
        // Handle error if needed
    });
});

 let CheckCred = () => {
 let storedUserCreds = JSON.parse(localStorage.getItem("user-creds"));
 let storedUserInfo = JSON.parse(localStorage.getItem("user-info"));
  
  }
  window.addEventListener('load', CheckCred);
  
// Get the current date and time
const now = new Date();

// Get the current hour
const currentHour = now.getHours();

// Function to get the greeting based on the time
function getGreeting(hour) {
  if (hour >= 0 && hour < 12) {
    return 'Good Morning,';
  } else if (hour >= 12 && hour < 15) {
    return 'Good Afternoon,';
  } else if (hour >= 15 && hour < 22) {
    return 'Good Evening,';
  } else {
    return 'Good Night,';
  }
}

// Function to display the greeting
function displayGreeting() {
  const greeting = getGreeting(currentHour);
  document.getElementById('greetings').innerText = greeting;
}

// Call the displayGreeting function
displayGreeting();

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve and display user information
    const userInfo = localStorage.getItem('user-info');
    const usernames = localStorage.getItem('user-names');
    
    if (userInfo) {
        // Display login user information
        const { firstname, lastname } = JSON.parse(userInfo);
        document.getElementById("username").innerHTML = `
        <div class="usersnames">${firstname} ${lastname}</div>`;
        
    } else if (usernames) {
        // Display register user information
        const { displayName } = JSON.parse(usernames);
        
        document.getElementById("username").innerHTML = `
        <div class="usernames">${displayName}</div>`;
        
    }
});