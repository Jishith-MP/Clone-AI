import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

function _0x12f1(_0x152ab3,_0x2f850f){const _0x28ff47=_0x34ff();return _0x12f1=function(_0x4daf73,_0x5ad21c){_0x4daf73=_0x4daf73-(-0x21a*-0x6+0xa51+-0x15e8);let _0xd6a30a=_0x28ff47[_0x4daf73];return _0xd6a30a;},_0x12f1(_0x152ab3,_0x2f850f);}const _0x4fcc3b=_0x12f1;(function(_0x4b4345,_0x33fb49){const _0xda3c8=_0x12f1,_0x2f0a4a=_0x4b4345();while(!![]){try{const _0x459188=-parseInt(_0xda3c8(0x10e))/(-0x1a50+-0x9e6+0x2437)*(parseInt(_0xda3c8(0x117))/(0xa7*0x1a+-0x33d+-0x1*0xdb7))+parseInt(_0xda3c8(0x122))/(-0x520+-0xb2*-0x12+0x1*-0x761)*(parseInt(_0xda3c8(0x113))/(-0x16df+0x15b3+-0x98*-0x2))+-parseInt(_0xda3c8(0x10c))/(-0x5*0x679+0x207e+-0x1c)*(-parseInt(_0xda3c8(0x10d))/(-0x1e00+-0x390+0x2196))+parseInt(_0xda3c8(0x11e))/(-0x1*0xe51+0x2*0xfc9+-0x113a)+-parseInt(_0xda3c8(0x106))/(0x9b*0x2b+-0xfd4+-0xa2d)*(-parseInt(_0xda3c8(0x107))/(-0x6*-0x54a+-0x2ab*-0x1+-0x225e))+-parseInt(_0xda3c8(0x119))/(0x2202+-0x3e*-0x51+-0x3596)+-parseInt(_0xda3c8(0x10b))/(-0x2618+-0x158a+0x3bad*0x1);if(_0x459188===_0x33fb49)break;else _0x2f0a4a['push'](_0x2f0a4a['shift']());}catch(_0x9ac4d6){_0x2f0a4a['push'](_0x2f0a4a['shift']());}}}(_0x34ff,-0x8*-0xc68e+-0xdb20a+0x16183a));const firebaseConfig={'apiKey':_0x4fcc3b(0x116)+_0x4fcc3b(0x11b)+_0x4fcc3b(0x118)+_0x4fcc3b(0x120),'authDomain':_0x4fcc3b(0x112)+_0x4fcc3b(0x109)+_0x4fcc3b(0x10f),'databaseURL':_0x4fcc3b(0x11c)+_0x4fcc3b(0x110)+_0x4fcc3b(0x121)+_0x4fcc3b(0x105)+_0x4fcc3b(0x11d),'projectId':_0x4fcc3b(0x112)+'m','storageBucket':_0x4fcc3b(0x112)+_0x4fcc3b(0x11a)+_0x4fcc3b(0x114),'messagingSenderId':_0x4fcc3b(0x123)+'09','appId':_0x4fcc3b(0x10a)+_0x4fcc3b(0x115)+_0x4fcc3b(0x11f)+_0x4fcc3b(0x111)+'c','measurementId':_0x4fcc3b(0x108)+'7M'};function _0x34ff(){const _0x277de7=['1:83141430','10747737issYfs','30370iXfNzs','1122DkCxWY','174zezwlT','app.com','oneai-com-','b160dccd89','cloneai-co','1828VCUXeZ','com','6709:web:d','AIzaSyBGnB','15816EoFaqX','m1EUSl4iB6','5758120xvUpiH','m.appspot.','ZccBIa3Wm6','https://cl','eio.com','12724866YMTUeA','d8bfcdfe4f','IOLOvhe4s','default-rt','153HOxUcD','8314143067','db.firebas','2784dDaLDm','23508YacuOy','G-YS228PXL','m.firebase'];_0x34ff=function(){return _0x277de7;};return _0x34ff();}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const handleGoogleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);

    const user = result.user;
      localStorage.setItem('user-data', JSON.stringify({ uid: user.uid }));
      localStorage.setItem('user-names', JSON.stringify({displayName: user.displayName }))
      localStorage.setItem('user-profileimg', JSON.stringify({userimage: user.photoURL }))
      localStorage.setItem('user-emailess', JSON.stringify({userEmail: user.email }))
  
        
    // Redirect or perform any actions after successful Google Sign-in
    window.location.href = 'Home.html';
  } catch (error) {
    console.error("Google Sign-in Error:", error);
  }
};

// Sign-out button click event handler
const signOutButton = document.getElementById("signoutButton");

if (signOutButton) {
  signOutButton.addEventListener("click", () => {
    auth.signOut().then(() => {
      // Redirect or perform any actions after successful sign-out
        localStorage.removeItem('user-creds');
        localStorage.removeItem('user-info');
        localStorage.removeItem('user-names');
        localStorage.removeItem('user-data');
        localStorage.removeItem('user-profileimg');
        localStorage.removeItem('user-emailess');
        sessionStorage.removeItem('saveResponse');
        window.location.href = 'Login.html';
    }).catch((error) => {
      console.error("Sign-out Error:", error);
    });
  });
}

// Google Sign-in button click event handler
const googleSignInButton = document.getElementById("googleSignInButton");

if (googleSignInButton) {
  googleSignInButton.addEventListener("click", handleGoogleSignIn);
}