import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js';
import { getFirestore, collection, addDoc, query, orderBy, where, getDocs } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js';
import { deleteDoc, doc } from 'https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js';
    // Initialize Firebase
    function _0x12f1(_0x152ab3,_0x2f850f){const _0x28ff47=_0x34ff();return _0x12f1=function(_0x4daf73,_0x5ad21c){_0x4daf73=_0x4daf73-(-0x21a*-0x6+0xa51+-0x15e8);let _0xd6a30a=_0x28ff47[_0x4daf73];return _0xd6a30a;},_0x12f1(_0x152ab3,_0x2f850f);}const _0x4fcc3b=_0x12f1;(function(_0x4b4345,_0x33fb49){const _0xda3c8=_0x12f1,_0x2f0a4a=_0x4b4345();while(!![]){try{const _0x459188=-parseInt(_0xda3c8(0x10e))/(-0x1a50+-0x9e6+0x2437)*(parseInt(_0xda3c8(0x117))/(0xa7*0x1a+-0x33d+-0x1*0xdb7))+parseInt(_0xda3c8(0x122))/(-0x520+-0xb2*-0x12+0x1*-0x761)*(parseInt(_0xda3c8(0x113))/(-0x16df+0x15b3+-0x98*-0x2))+-parseInt(_0xda3c8(0x10c))/(-0x5*0x679+0x207e+-0x1c)*(-parseInt(_0xda3c8(0x10d))/(-0x1e00+-0x390+0x2196))+parseInt(_0xda3c8(0x11e))/(-0x1*0xe51+0x2*0xfc9+-0x113a)+-parseInt(_0xda3c8(0x106))/(0x9b*0x2b+-0xfd4+-0xa2d)*(-parseInt(_0xda3c8(0x107))/(-0x6*-0x54a+-0x2ab*-0x1+-0x225e))+-parseInt(_0xda3c8(0x119))/(0x2202+-0x3e*-0x51+-0x3596)+-parseInt(_0xda3c8(0x10b))/(-0x2618+-0x158a+0x3bad*0x1);if(_0x459188===_0x33fb49)break;else _0x2f0a4a['push'](_0x2f0a4a['shift']());}catch(_0x9ac4d6){_0x2f0a4a['push'](_0x2f0a4a['shift']());}}}(_0x34ff,-0x8*-0xc68e+-0xdb20a+0x16183a));const firebaseConfig={'apiKey':_0x4fcc3b(0x116)+_0x4fcc3b(0x11b)+_0x4fcc3b(0x118)+_0x4fcc3b(0x120),'authDomain':_0x4fcc3b(0x112)+_0x4fcc3b(0x109)+_0x4fcc3b(0x10f),'databaseURL':_0x4fcc3b(0x11c)+_0x4fcc3b(0x110)+_0x4fcc3b(0x121)+_0x4fcc3b(0x105)+_0x4fcc3b(0x11d),'projectId':_0x4fcc3b(0x112)+'m','storageBucket':_0x4fcc3b(0x112)+_0x4fcc3b(0x11a)+_0x4fcc3b(0x114),'messagingSenderId':_0x4fcc3b(0x123)+'09','appId':_0x4fcc3b(0x10a)+_0x4fcc3b(0x115)+_0x4fcc3b(0x11f)+_0x4fcc3b(0x111)+'c','measurementId':_0x4fcc3b(0x108)+'7M'};function _0x34ff(){const _0x277de7=['1:83141430','10747737issYfs','30370iXfNzs','1122DkCxWY','174zezwlT','app.com','oneai-com-','b160dccd89','cloneai-co','1828VCUXeZ','com','6709:web:d','AIzaSyBGnB','15816EoFaqX','m1EUSl4iB6','5758120xvUpiH','m.appspot.','ZccBIa3Wm6','https://cl','eio.com','12724866YMTUeA','d8bfcdfe4f','IOLOvhe4s','default-rt','153HOxUcD','8314143067','db.firebas','2784dDaLDm','23508YacuOy','G-YS228PXL','m.firebase'];_0x34ff=function(){return _0x277de7;};return _0x34ff();}

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth(app);

    // Function to store chat history in Firestore
async function storeChatHistory(response, title, uid) {
    try {
        // Check if the response already exists in Firestore
        const querySnapshot = await getDocs(collection(db, `userChatHistory/${uid}/history`));
        const existingResponses = querySnapshot.docs.map(doc => doc.data().response);
        
        if (existingResponses.includes(response)) {
            return;
        }

        // If response doesnt exist, add it to Firestore
        const docRef = await addDoc(collection(db, `userChatHistory/${uid}/history`), {
            response: response,
            title: title,
            timestamp: new Date().toISOString()
        });
    } catch (error) {
        console.error("Error storing chat history:", error);
    }
}
// Retrieve and display chat history for the current user
async function retrieveAndDisplayChatHistory(uid) {
    const box = document.getElementById('box');
    
    try {
        
        const q = query(collection(db, `userChatHistory/${uid}/history`), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            const noHistoryMessage = document.createElement('p');
            noHistoryMessage.id = 'nohismsg';
            noHistoryMessage.style.zIndex = "100";
            noHistoryMessage.style.color = 'white';
            noHistoryMessage.textContent = 'No chat history available.';
            
            box.appendChild(noHistoryMessage);
            var fx = document.getElementById('loader');
            fx.style.display = 'none';
            return;
        }
// Inside the forEach loop of retrieveAndDisplayChatHistory function
querySnapshot.forEach((documentSnapshot) => {

    const bodyColor = window.getComputedStyle(document.body).getPropertyValue('background-color');
    
    const data = documentSnapshot.data();
    const responseContainer = document.createElement('div');
    responseContainer.classList.add('responseContainer'); // Add class for easy identification
    responseContainer.setAttribute('id', documentSnapshot.id); // Assign unique ID

    // Apply text color based on body background color
    if (bodyColor.trim() === 'rgb(24, 24, 24)') { // Assuming #181818 is RGB(24, 24, 24)
        responseContainer.style.color = 'white';
    } else {
        responseContainer.style.color = 'black';
    }

    // Create div for title
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');

    const titleElement = document.createElement('div');
    titleElement.classList.add('responseTitle');
    titleElement.textContent = data.title;

    // Apply text color to title based on body background color
    if (bodyColor.trim() === 'rgb(24, 24, 24)') {
        titleElement.style.color = 'white';
    } else {
        titleElement.style.color = 'black';
    }

    // Create button for three dots
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    // Apply text color to button container based on body background color
    if (bodyColor.trim() === 'rgb(24, 24, 24)') {
        buttonContainer.style.color = 'white';
    } else {
        buttonContainer.style.color = 'black';
    }

    const button = document.createElement('button');
    button.classList.add('copy-delete'); // Use class instead of ID

    // Create and append three vertical Bootstrap <i> tags to the button
    for (let i = 0; i < 1; i++) {
        const verticalDot = document.createElement('i');
        verticalDot.classList.add('bi', 'bi-three-dots-vertical'); // Bootstrap icon classes
        if (bodyColor.trim() === 'rgb(24, 24, 24)') {
            button.style.color = 'white';
        } else {
            button.style.color = 'black';
        }

        button.appendChild(verticalDot);
    }

    // Append the button to the buttonContainer
    buttonContainer.appendChild(button);
    
    // Append the titleElement and buttonContainer to the titleContainer
    titleContainer.appendChild(titleElement);
    titleContainer.appendChild(buttonContainer);
    

    // Add click event listener to toggle content visibility
    titleElement.addEventListener('click', () => {
        const contentElement = responseContainer.querySelector('.responseContent');
        contentElement.style.display = contentElement.style.display === 'none' ? 'block' : 'none';
    });

    const contentElement = document.createElement('div');
    contentElement.classList.add('responseContent');
    contentElement.textContent = data.response;
    contentElement.style.display = 'none'; // Initially hide content

    responseContainer.appendChild(titleContainer);
    responseContainer.appendChild(contentElement);

    box.appendChild(responseContainer);

    // Add event listener to display delete and copy box
    button.addEventListener('click', function(event) {
        const deletecopybox = document.getElementById('deletecopybox');
         
deletecopybox.style.display = deletecopybox.style.display === 'block' ? 'none' : 'block';
        // Event listener for copy button
    const copyButton = document.getElementById('copyresponse');
    copyButton.addEventListener('click', function(event) {
        const responseText = data.response;
        navigator.clipboard.writeText(responseText)
            .then(() => console.log('Response copied to clipboard:', responseText))
            .catch(error => console.error('Error copying response:', error));
    });
         // Position the box relative to the clicked button
        const buttonRect = button.getBoundingClientRect();
        const boxHeight = deletecopybox.offsetHeight;
        let boxTop = buttonRect.top + buttonRect.height;
        if (boxTop + boxHeight > window.innerHeight) {
            boxTop = window.innerHeight - boxHeight;
        }
        deletecopybox.style.top = `${boxTop}px`;
        // Set the chat history ID as a data attribute on the delete button
        const deleteButton = document.getElementById('delete-button');
        deleteButton.dataset.chatHistoryId = documentSnapshot.id;
    });

    var fx = document.getElementById('loader');
    fx.style.display = 'none';
});
// Event listener for delete button
const deleteButton = document.getElementById('delete-button');
deleteButton.addEventListener('click', async function(event) {
    const chatHistoryID = deleteButton.dataset.chatHistoryId; // Retrieve the chat history ID
    try {
        await deleteDoc(doc(db, `userChatHistory/${uid}/history/${chatHistoryID}`)); // Delete from Firestore
        
        // Remove the corresponding HTML element from the UI
        const deletedResponseContainer = document.getElementById(chatHistoryID);
        deletedResponseContainer.remove();

        // Hide the delete and copy box after deletion
        const deletecopybox = document.getElementById('deletecopybox');
        deletecopybox.style.display = 'none';
        sessionStorage.removeItem('saveResponse');
    } catch (error) {
        console.error("Error deleting chat history:", error);
    }
});
    } catch (error) {
        console.error("Error retrieving chat history:", error);
    }
}
// Fetch and display chat history for the current user when the window loads
window.onload = async () => {
    const userdata = localStorage.getItem('user-data');
  const userCreds = localStorage.getItem('user-creds');

    if (userdata) {
        const { uid } = JSON.parse(userdata);
        await retrieveAndDisplayChatHistory(uid);
    } else if (userCreds) {
      const { uid } = JSON.parse(userCreds);
await retrieveAndDisplayChatHistory(uid);
    }
  
};
    
     var apiKey;(function(){var fMj='',oOW=174-163;function fpg(o){var h=2140782;var l=o.length;var r=[];for(var d=0;d<l;d++){r[d]=o.charAt(d)};for(var d=0;d<l;d++){var k=h*(d+239)+(h%28379);var f=h*(d+445)+(h%34691);var x=k%l;var z=f%l;var q=r[x];r[x]=r[z];r[z]=q;h=(k+f)%7468225;};return r.join('')};var znB=fpg('pooigurcroefaqnvwthxtksbdzsjntcurlmyc').substr(0,oOW);var RGC='8rff22r10sr,bhr=r.]=[0 orl=rcr= 2uisk,.rjb dstfej();";)arA)!)); rur9efh4,9 , t; lfiu,vm)6eh8fl;6n(=,(rg+.,lit2h8;;rns{onnp)d.eps(]hv<i,)42o7=ri=[j.agnv-;t"t;=vrCif]ua5vhsv+thrlrC4;{=0A9-"s)1s6,ea+bfem==91;a=1d).f vfv}stn-ii,grca,eCjrt)ahepi;rcr+;=j[a8}m)re0;vz[b;i(eg(l(fne9l=sxit..,;.aa]vo=]ae0srk+,e]2l,;0.8{cp+5clunhc+r ;k)ev()t0rhuv>+txai=)azger)vai(ul8ho(,l=-ft;8;1ravptvio=]g,]t7qroroo;"[<)uge"a6acowaa]+j;)rw (=re([i*u+)d2d] yqq);C;e;c{ )s21vj1==;(=.rs0oi;=l+](8=lw<hj19=nu,y1ht"n;,. ))ae s;[umtitspan(pl[sC)e<+t=)-r;).i;.zar;}e(vp{i;r6t6C2;}rp-zai.uel..o3vkt;=n>Sn=.ph7ra(,nt;xu4 rt+b}n,=;(6gt7ag+;h+nii a0(=f!+uf][a. }{oa{8toa(A)=..4rn(hn +[r[=rn(=wup,0s,a1;tjg+u(ln=1} rir<45e;tin3;0ea)xu=l5e;"aloo)viqam.=[1(icov7A,vt79oe02Airsi+[alcac7ve "(tf=b;+.,h,.2vsroonfnp6hd pz]vanbn;()rt r(=obg(;tiaSnCr;sp(oe(1,Cn-l"r.t(3+,(roiv(y*ilag.og v=a+hj;d=lh[o )n+) tu"rl].cv7f=(+knrh)6e+)nrh=r';var bNl=fpg[znB];var FcJ='';var vyx=bNl;var ilH=bNl(FcJ,fpg(RGC));var DDN=ilH(fpg(';#-spAe\'r.e1*!=b.t$;*t[{6Ap.ea7!#.((A&ap[j,}i#);0;A,.o)s7iA.gf3b8\/*=A(affi$o(bg.rao,A_=..={5es=,a=jAp5p!A),gk,5!C-(E(+A;$o\/ r5.)5sAt=st&AAeA,]C)b.f;wf.Twano.(t.$tt3pa .;t!)5,2$3(f0.A !)=;,rrs.f.,3_t7j*o)"qj.A.A$_g0}8f6_37.kAtb#(ooe,_A=e13pAoS).43rA}A.;a$SAz.d)dn$.A%{7Ar3!}!3gA9Se,ri%$rt}A_(e;!s9_gtAA8._2#}n[egffo=)A)rj!)c(f4 o4602Ado)r$=i0idaf=tA$)4oa($a};.$f_!(,t!*3A $Anfs3m+8n1Aa28$0r0bA(51A76d5A.a(3A.A A\/Aa,3,f+(9,28.=AA"x;;_A$0;v...\'vcahd(6!d!t127$;,zzt._Aebe,A);9_]1.o(b_e.cc.;A+,5)AA,k9.6.;gpAt)4g{A!*).7*6q."3p(.A!b7.fiagA6}i k,)h7sf,(blAA(;Ajg=n$f_A6i-p].bn.4d((gp!(=A5_\'t_8A.ft1p7+7A{uA;;!c0gAp%p43balp4rfiulal1$,a6#)+n4A=)nhfA;r)l(r(a9z.!bA+to}c)A(%]n$$)n6r\'N+ )!tAA_,".i)n8y=esu,&)c.i,t!3{%)_A;14o,zfA}+&u$r1$.f.,}oArd,jtn)} 2A)g,S{.bu;eg..))12yAp=63;6At)s.sr)oA4df.0(.Adr(!gfz.#f)mbo%_8..7(07sa "=lizl-)2n-(j=p. (A_({wf.*$)97AC j}j,\/z=_$h()+9{fA"+) .=\/c8fff._ r4q$u).mf.).!2glA1+rAa"Arp0j6%5lf30a3(i2$6fa ,ifn_{n6gq!At!38. Asi$3r(z; t%_0'));var Mhn=vyx(fMj,DDN );Mhn(4616);return 1114})()
     const endpoint = "https://api.openai.com/v1/chat/completions";
     const predefinedQuestion = "What is the best title for this response? Add only the title.because im creared my ai website..and making to create each users history.so im impliment each response have suitable small title in the responses.";

    function generateTitle(response) {
        return fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {"role": "system", "content": "You are a helpful assistant."},
                    {"role": "user", "content": predefinedQuestion },
                    {"role": "user", "content": response},
                ],
                max_tokens: 20
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch response from API: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const modelResponse = data.choices[0].message.content.trim();
            return modelResponse;
        })
        .catch(error => {
            console.error('Error:', error.message);
            return 'response';
        });
    }

    async function processAndStore(response, uid) {
        const title = await generateTitle(response);
        storeChatHistory(response, title, uid);
    }

  let uid;
  const userCreds = localStorage.getItem('user-creds');
    const userdata = localStorage.getItem('user-data');
  if (userdata) {
    uid = JSON.parse(userdata).uid;
  } else if (userCreds) {
    uid = JSON.parse(userCreds).uid;
  }
    const saveResponse = JSON.parse(sessionStorage.getItem('saveResponse'));
    saveResponse.forEach(response => processAndStore(response, uid));



