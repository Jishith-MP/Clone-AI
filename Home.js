import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js';
import { getFirestore, collection, onSnapshot } from 'https://www.gstatic.com/firebasejs/9.6.5/firebase-firestore.js';

// Your Firebase configuration
function _0x12f1(_0x152ab3,_0x2f850f){const _0x28ff47=_0x34ff();return _0x12f1=function(_0x4daf73,_0x5ad21c){_0x4daf73=_0x4daf73-(-0x21a*-0x6+0xa51+-0x15e8);let _0xd6a30a=_0x28ff47[_0x4daf73];return _0xd6a30a;},_0x12f1(_0x152ab3,_0x2f850f);}const _0x4fcc3b=_0x12f1;(function(_0x4b4345,_0x33fb49){const _0xda3c8=_0x12f1,_0x2f0a4a=_0x4b4345();while(!![]){try{const _0x459188=-parseInt(_0xda3c8(0x10e))/(-0x1a50+-0x9e6+0x2437)*(parseInt(_0xda3c8(0x117))/(0xa7*0x1a+-0x33d+-0x1*0xdb7))+parseInt(_0xda3c8(0x122))/(-0x520+-0xb2*-0x12+0x1*-0x761)*(parseInt(_0xda3c8(0x113))/(-0x16df+0x15b3+-0x98*-0x2))+-parseInt(_0xda3c8(0x10c))/(-0x5*0x679+0x207e+-0x1c)*(-parseInt(_0xda3c8(0x10d))/(-0x1e00+-0x390+0x2196))+parseInt(_0xda3c8(0x11e))/(-0x1*0xe51+0x2*0xfc9+-0x113a)+-parseInt(_0xda3c8(0x106))/(0x9b*0x2b+-0xfd4+-0xa2d)*(-parseInt(_0xda3c8(0x107))/(-0x6*-0x54a+-0x2ab*-0x1+-0x225e))+-parseInt(_0xda3c8(0x119))/(0x2202+-0x3e*-0x51+-0x3596)+-parseInt(_0xda3c8(0x10b))/(-0x2618+-0x158a+0x3bad*0x1);if(_0x459188===_0x33fb49)break;else _0x2f0a4a['push'](_0x2f0a4a['shift']());}catch(_0x9ac4d6){_0x2f0a4a['push'](_0x2f0a4a['shift']());}}}(_0x34ff,-0x8*-0xc68e+-0xdb20a+0x16183a));const firebaseConfig={'apiKey':_0x4fcc3b(0x116)+_0x4fcc3b(0x11b)+_0x4fcc3b(0x118)+_0x4fcc3b(0x120),'authDomain':_0x4fcc3b(0x112)+_0x4fcc3b(0x109)+_0x4fcc3b(0x10f),'databaseURL':_0x4fcc3b(0x11c)+_0x4fcc3b(0x110)+_0x4fcc3b(0x121)+_0x4fcc3b(0x105)+_0x4fcc3b(0x11d),'projectId':_0x4fcc3b(0x112)+'m','storageBucket':_0x4fcc3b(0x112)+_0x4fcc3b(0x11a)+_0x4fcc3b(0x114),'messagingSenderId':_0x4fcc3b(0x123)+'09','appId':_0x4fcc3b(0x10a)+_0x4fcc3b(0x115)+_0x4fcc3b(0x11f)+_0x4fcc3b(0x111)+'c','measurementId':_0x4fcc3b(0x108)+'7M'};function _0x34ff(){const _0x277de7=['1:83141430','10747737issYfs','30370iXfNzs','1122DkCxWY','174zezwlT','app.com','oneai-com-','b160dccd89','cloneai-co','1828VCUXeZ','com','6709:web:d','AIzaSyBGnB','15816EoFaqX','m1EUSl4iB6','5758120xvUpiH','m.appspot.','ZccBIa3Wm6','https://cl','eio.com','12724866YMTUeA','d8bfcdfe4f','IOLOvhe4s','default-rt','153HOxUcD','8314143067','db.firebas','2784dDaLDm','23508YacuOy','G-YS228PXL','m.firebase'];_0x34ff=function(){return _0x277de7;};return _0x34ff();}


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


// Get a reference to the Firestore database
const db = getFirestore(firebaseApp);

// Get a reference to the 'Policies' collection
const AnnoumcementRef = collection(db, 'Announcements');

// Listen for changes in the 'Policies' collection
onSnapshot(AnnoumcementRef, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const AnnouncementData = change.doc.data();
    displayAnnouncementData(AnnouncementData); // Call function to display policy data
  });
});

// Function to display policy data in the HTML
function displayAnnouncementData(AnnouncementData) {
  const announcementContainer = document.getElementById('newscontent');
  
  

  // Add heading
  const headingElement = document.createElement('h1');
  headingElement.textContent = AnnouncementData.heading || ''; // Ensure heading is defined
    headingElement.classList.add('dbh1')
    announcementContainer.appendChild(headingElement);

  // Add content if available
  if (AnnouncementData.content || AnnouncementData.secondcontent) {
    const contentsList = document.createElement('ul');
    contentsList.classList.add('Announcement-list'); // Add class name to the <ul>
    
    if (AnnouncementData.content) {
      const listItem = document.createElement('li');
      listItem.textContent = AnnouncementData.content;
      listItem.classList.add('Announcement-item'); // Add class name to the <li>
      contentsList.appendChild(listItem);
    }
    
    if (AnnouncementData.secondcontent) {
      const secondListItem = document.createElement('li');
      secondListItem.textContent = AnnouncementData.secondcontent;
      secondListItem.classList.add('Announcement-item'); // Add class name to the <li>
      contentsList.appendChild(secondListItem);
    }
    
announcementContainer.appendChild(contentsList);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    // Check user's theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');

    // Apply saved theme or default to dark theme
    if (savedTheme === 'light') {
        applyLightTheme();
        document.getElementById('toggleBtn').checked = true; // Update toggle button state
    } else {
        applyDarkTheme();
    }

    // Theme toggle event listener
    document.getElementById('toggleBtn').addEventListener('change', function() {
        if (this.checked) {
            applyLightTheme();
            localStorage.setItem('theme', 'light'); // Save theme preference to localStorage
        } else {
            applyDarkTheme();
            localStorage.setItem('theme', 'dark'); // Save theme preference to localStorage
        }
    });
});

function applyLightTheme() {
    // Your light theme styles here
    // ...
    let A = document.getElementById("chatarea");
    A.style.backgroundColor = "#F0F0F0";
    let B = document.getElementById("input");
    B.style.backgroundColor = "#E0E0E0";
    let C = document.getElementById("newpage");
    C.style.color = "black";
        let boxesSuggest = document.getElementsByClassName("boxessuggest");
for (let i = 0; i < boxesSuggest.length; i++) {
    boxesSuggest[i].style.backgroundColor = "whitesmoke";
    boxesSuggest[i].style.border = "0.5px solid black";

}

let boxTexts = document.getElementsByClassName("box-text");
for (let i = 0; i < boxTexts.length; i++) {
    boxTexts[i].style.color = "black";
}
        let D = document.getElementById("chatareatext");
D.style.background = "linear-gradient(to right, violet, lightcoral, skyblue)";
D.style.webkitBackgroundClip = "text";
D.style.backgroundClip = "text";
D.style.color = "transparent";
        let E = document.getElementById("sendButton");
    E.style.backgroundColor = "black";
    let F = document.getElementById("buttonText");
    F.style.color = "white";
    let G = document.getElementById("headphonesIcon");
    G.style.backgroundColor = "black";
    let H = document.getElementById("headphones");
    H.style.color = "white";
    let style = document.createElement('style');
    style.innerHTML = '.inputs::placeholder { color: black; }';
    document.head.appendChild(style);
    let style2 = document.createElement('style');
    style2.innerHTML = '.search::placeholder { color: black; }';
    document.head.appendChild(style2);
    let I = document.getElementById("input");
    I.style.color = "black";
    let J = document.getElementById("header");
    J.style.backgroundColor = "white";
    let K = document.getElementById("navbar-toggler");
    K.style.color = "black";
    let L = document.getElementById("head");
    L.style.color = "black";
      let cls = document.getElementById("bi-x");
    cls.style.color = "black";
    let Q = document.getElementById("navbox");
    Q.style.color = "black";
    Q.style.backgroundColor = 'white';
    let R = document.getElementById("box");
    R.style.color = "black";
    R.style.backgroundColor = 'white';
    let s = document.getElementById("hishead");
    s.style.color = "black";
        let LL = document.getElementById("username");
LL.style.background = "linear-gradient(to right, purple, red, violet)";
LL.style['-webkit-background-clip'] = "text";
LL.style.backgroundClip = "text";
LL.style.color = "transparent";
let sZ = document.getElementById("greetings");
    sZ.style.color = "black";

        let ABC = document.getElementById("setting");
    ABC.style.backgroundColor = "whitesmoke";
        ABC.style.color = 'black';
        let ABCD = document.getElementById("general");
    ABCD.style.color = "black";
let ABCDE = document.getElementById("data_management");
    ABCDE.style.color = "black";
let ABCDF = document.getElementById("feedbackBtn");
    ABCDF.style.color = "black";
let langauge = document.getElementById("language");
    langauge.style.color = "black";
let horizontal = document.getElementById("hrs");
horizontal.style.backgroundColor = "black";
let clssetngs = document.getElementById("closesett");
clssetngs.style.color = "black";
let bix = document.getElementById("bi-xx");
bix.style.color = "black";

    let T = document.getElementById("hisline");
    T.style.backgroundColor = "black";
     let U = document.getElementById("search");
        U.style.color = 'black';
    U.style.backgroundColor = "whitesmoke";
    U.style.border = '0.5px solid grey';
    document.body.style.backgroundColor = "white";
        setTimeout(() => {
        let none = document.getElementById('parent');
        none.style.display = 'none';
        }, 1000);
}

function applyDarkTheme() {
    let A = document.getElementById("chatarea");
    A.style.backgroundColor = "#121212";
    let B = document.getElementById("input");
    B.style.backgroundColor = "#202020";
    let C = document.getElementById("newpage");
    C.style.color = "white";
    let D = document.getElementById("chatareatext");
    D.style.background = "linear-gradient(to right, violet, lightcoral, skyblue)";
    D.style.webkitBackgroundClip = "text";
    D.style.backgroundClip = "text";
    D.style.color = "transparent";
    let E = document.getElementById("sendButton");
    E.style.backgroundColor = "white";
    let F = document.getElementById("buttonText");
    F.style.color = "black";
    let G = document.getElementById("headphonesIcon");
    G.style.backgroundColor = "white";
    let H = document.getElementById("headphones");
    H.style.color = "black";
    let style = document.createElement('style');
    style.innerHTML = '.inputs::placeholder { color: white; }';
    document.head.appendChild(style);
    let style2 = document.createElement('style');
    style2.innerHTML = '.search::placeholder { color: white; }';
    document.head.appendChild(style2);
    let I = document.getElementById("input");
    I.style.color = "white";
    let J = document.getElementById("header");
    J.style.backgroundColor = "#161616";
    let K = document.getElementById("navbar-toggler");
    K.style.color = "white";
    let L = document.getElementById("head");
    L.style.color = "white";
    let LL = document.getElementById("username");
    LL.style.background = "linear-gradient(to right, #ADD8E6, #FF4500, #8A2BE2)";
    LL.style['-webkit-background-clip'] = "text";
    LL.style.backgroundClip = "text";
    LL.style.color = "transparent";
    let sZ = document.getElementById("greetings");
    sZ.style.color = "silver";
    let Q = document.getElementById("navbox");
    Q.style.color = "white";
    Q.style.backgroundColor = 'black';
    let R = document.getElementById("box");
    R.style.color = "white";
    R.style.backgroundColor = 'black';
    let s = document.getElementById("hishead");
    s.style.color = "white";
    let boxesSuggest = document.getElementsByClassName("boxessuggest");
    for (let i = 0; i < boxesSuggest.length; i++) {
    boxesSuggest[i].style.backgroundColor = "#262626";
    }

    let boxTexts = document.getElementsByClassName("box-text");
    for (let i = 0; i < boxTexts.length; i++) {
    boxTexts[i].style.color = "white";
    }
    let clsf = document.getElementById("bi-x");
    clsf.style.color = "white";
    setTimeout(() => {
        let none = document.getElementById('parent');
        none.style.display = 'none';
        }, 1000); 
    let T = document.getElementById("hisline");
    T.style.backgroundColor = "white";
     let U = document.getElementById("search");
    U.style.backgroundColor = "#343434";
    document.body.style.backgroundColor = "#181818";
}
    const generalBtn = document.getElementById('general');
    generalBtn.addEventListener('click', function () {
    let generalcomponents =  document.getElementById('data-general');
    generalcomponents.style.display = 'block';
    let datascomponents =  document.getElementById('data-Data_management');
    datascomponents.style.display = 'none';
    let feedcomponents =  document.getElementById('data-feedback');
    feedcomponents.style.display = 'none';
    })
    const dataBtn = document.getElementById('data_management');
    dataBtn.addEventListener('click', function () {
    let datascomponents =  document.getElementById('data-Data_management');
    datascomponents.style.display = 'block';
    let generalcomponents =  document.getElementById('data-general');
    generalcomponents.style.display = 'none';
    let feedcomponents =  document.getElementById('data-feedback');
    feedcomponents.style.display = 'none';
    })
    const feedbackBtn = document.getElementById('feedbackBtn');
    feedbackBtn.addEventListener('click', function () {
    let feedcomponents =  document.getElementById('data-feedback');
    feedcomponents.style.display = 'block';
    let generalcomponents =  document.getElementById('data-general');
    generalcomponents.style.display = 'none';
    let datascomponents =  document.getElementById('data-Data_management');
    datascomponents.style.display = 'none';
    })
    const settingsstyle = document.getElementById('settingss');
    const display = document.getElementById('setting');
    const blur = document.getElementById('blurbg');

settingsstyle.addEventListener('click', function() {
    display.style.display = 'block';
    updateBlur();
});

function updateBlur() {
    if (display.style.display === 'block') {
        blur.style.display = 'block';
    } else {
        blur.style.display = 'none';
    }
}
document.getElementById('closesettings').addEventListener('click', function() {
    let settingbox = document.getElementById('setting');
    settingbox.style.display = 'none';
    updateBlur();
})
document.getElementById('faq').addEventListener('click', function() {

    window.location.href = 'Faq.html';
})


document.addEventListener('DOMContentLoaded', function() {
  const boxes = document.querySelectorAll('.boxessuggest');

  boxes.forEach(box => {
    box.addEventListener('click', function() {
      const boxText = this.querySelector('.box-text').textContent;
      const inputText = document.getElementById('input').value;

      // Parse the textarea content (inputText) here if needed
      
      document.getElementById('input').value = boxText;

      const sendButton = document.getElementById('sendButton');
      
      // Check if sendButton is disabled and enable it
      if (sendButton.disabled) {
        sendButton.disabled = false;
      }

      // Click the sendButton
      sendButton.click();
    });
  });
});

document.getElementById('swipeBtn').addEventListener('change', function() {
        if (this.checked) {
            if (window.innerWidth >= 1024 && window.innerWidth <= 1366) {
          let navbox = document.getElementById('navbox');
        navbox.style.display = 'none';
        let swipeBtn = document.getElementById('swipenav-bar');
                swipeBtn.style.display = 'block';
        swipeBtn.style.zIndex = '99999';
        swipeBtn.style.left = '1%';
        let body = document.getElementById('chatarea');
        body.style.width = '100%';
        let input = document.getElementById('input');
        input.style.width = '70%';
        input.style.left = '35%';
        let lastText = document.getElementById('lasttext');
        lastText.style.left = '0';
        let infos = document.getElementById('infos');
        infos.style.left = '30%';
            }
        } else {
            let navbox = document.getElementById('navbox');
        navbox.style.display = 'block';
        let swipeBtn = document.getElementById('swipenav-bar');
        swipeBtn.style.display = 'block';
        swipeBtn.style.zIndex = '99999';
        swipeBtn.style.left = '27%';
        let body = document.getElementById('chatarea');
        body.style.width = '70%';
        let input = document.getElementById('input');
        input.style.width = '65%';
        input.style.left = '52.5%';
        let lastText = document.getElementById('lasttext');
        lastText.style.left = '15%';
        let infos = document.getElementById('infos');
        infos.style.left = '40%';

        }
});
