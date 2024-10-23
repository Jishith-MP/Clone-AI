const endpoint = "https://api.openai.com/v1/chat/completions";

let saveResponse = [];
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
            max_tokens: 3500,
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
        saveResponse.push(modelResponse);
        sessionStorage.setItem('saveResponse', JSON.stringify(saveResponse));
        return modelResponse;
    })
    .catch(error => {
        console.error('Error:', error.message);
        return 'I encountered an error while processing your request. Please try again later.';
    });
}

function appendToChatArea(role, content) {
        const chatarea = document.getElementById("chatarea");
    const div = document.createElement("div");
    div.classList.add("chat-info");
        
    div.classList.add('assistant');
        chatarea.appendChild(div);

      chatarea.scrollTop = chatarea.scrollHeight;
    // Function to apply typewriter effect to existing content
    function typeWriter(text, element) {
        let i = 0;
        const delay = 2; // Adjust the delay (in milliseconds) here
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, delay);
            } else {
                // Call formatAssistantText once the typewriter effect is complete
                formatAssistantText(div);
            }
        }
        type();
    }
    
    // Apply typewriter effect to the existing content of the assistant div
    typeWriter(content, div);

    appendAssistantButtons();
}

       // Function to change color of specified classes if body color is white
function changeColorIfWhite(classNames) {
    // Get the body element
    var body = document.body;
    
    // Get the computed style of the body element
    var bodyColor = window.getComputedStyle(body).getPropertyValue('background-color');
    
    // Check if the body color is white
    if (bodyColor === 'rgb(255, 255, 255)') {
        // Loop through each class name
        classNames.forEach(function(className) {
            // Get all elements with the current class name
            var elements = document.getElementsByClassName(className);
            
            // Loop through each element and change its color to black
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.color = 'black';
            }
        });
    }
}

// Classes to change color if body color is white
var classesToChange = ["usernametext", "userinputtext", "chatheading", "spinner-border", "assistant", "speaks", "mute", "bi-clipboard", "like-button", "dislike-button", "copy-response", "assistantspnr", "nohismsg", "material-symbols-outlined"];
function formatAssistantText(text) {
    var assistantTextElements = document.getElementsByClassName('assistant');
        if (assistantTextElements.length > 0) {
        for (var i = 0; i < assistantTextElements.length; i++) {
            var assistantText = assistantTextElements[i];
                        try {
                assistantText.innerHTML = assistantText.innerHTML
                .replace(/###\s(.*?)\n/g, '<h3>$1</h3>')
                .replace(/##\s(.*?)\n/g, '<h2>$1</h2>')
                .replace(/#\s(.*?)\n/g, '<h1>$1</h1>')
                .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
                .replace(/__(.*?)__/g, '<b>$1</b>')
                .replace(/_(.*?)_/g, '<i>$1</i>')
                .replace(/~~(.*?)~~/g, '<s>$1</s>')
                .replace(/```([\s\S]*?)```/g, '<pre><button class="copy-code-btn"><i class="bi bi-clipboard"></i></button><code>$1</code></pre>')
                .replace(/^>\s*(.*?)$/gm, '<blockquote>$1</blockquote>')
                .replace(/^\d+\.\s*(.*?)$/gm, '<ol><li>$1</li></ol>')
                .replace(/^\s*[-\+\*]\s*(.*?)$/gm, '<ul><li>$1</li></ul>')
                .replace(/(\*\*\*|-{3,}|_{3,})/g, '<hr>')
                .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
                .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1">')
                .replace(/`([^`]+)`/g, '<code>$1</code>')
                .replace(/^\|(.*)\|$/gm, '<table><tr>$1</tr></table>')
                .replace(/\|/g, '</td><td>')
                .replace(/\<mark\>(.*?)\<\/mark\>/g, '<mark>$1</mark>');

document.addEventListener('DOMContentLoaded', function() {
    const codeBlocks = document.querySelectorAll('pre code');

    codeBlocks.forEach((codeBlock) => {
        const codeContent = codeBlock.textContent;

        const jsPattern = /\/\/ @javascript([\s\S]*?)(?=(# @python|<!-- @html|\/\/ @bash|# @css|\/\/ @xml|# @java|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const pythonPattern = /# @python([\s\S]*?)(?=(\/\/ @javascript|<!-- @html|\/\/ @bash|# @css|\/\/ @xml|# @java|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const htmlPattern = /<!-- @html([\s\S]*?)(?=(\/\/ @javascript|# @python|\/\/ @bash|# @css|\/\/ @xml|# @java|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const bashPattern = /\/\/ @bash([\s\S]*?)(?=(# @python|<!-- @html|\/\/ @javascript|# @css|\/\/ @xml|# @java|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const cssPattern = /# @css([\s\S]*?)(?=(\/\/ @javascript|# @python|\/\/ @html|\/\/ @bash|\/\/ @xml|# @java|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const xmlPattern = /\/\/ @xml([\s\S]*?)(?=(\/\/ @javascript|# @python|<!-- @html|\/\/ @bash|# @css|# @java|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const javaPattern = /# @java([\s\S]*?)(?=(\/\/ @javascript|# @python|<!-- @html|\/\/ @bash|# @css|\/\/ @xml|\/\/ @cpp|# @csharp|\/\/ @assembly|$))/g;
        const cppPattern = /\/\/ @cpp([\s\S]*?)(?=(\/\/ @javascript|# @python|<!-- @html|\/\/ @bash|# @css|\/\/ @xml|# @java|# @csharp|\/\/ @assembly|$))/g;
        const csharpPattern = /# @csharp([\s\S]*?)(?=(\/\/ @javascript|# @python|<!-- @html|\/\/ @bash|# @css|\/\/ @xml|# @java|\/\/ @cpp|\/\/ @assembly|$))/g;
        const assemblyPattern = /\/\/ @assembly([\s\S]*?)(?=(\/\/ @javascript|# @python|<!-- @html|\/\/ @bash|# @css|\/\/ @xml|# @java|\/\/ @cpp|# @csharp|$))/g;

        let newClass = 'javascript';

        if (jsPattern.test(codeContent)) {
            newClass = 'javascript';
        } else if (pythonPattern.test(codeContent)) {
            newClass = 'python';
        } else if (htmlPattern.test(codeContent)) {
            newClass = 'html';
        } else if (bashPattern.test(codeContent)) {
            newClass = 'bash';
        } else if (cssPattern.test(codeContent)) {
            newClass = 'css';
        } else if (xmlPattern.test(codeContent)) {
            newClass = 'xml';
        } else if (javaPattern.test(codeContent)) {
            newClass = 'java';
        } else if (cppPattern.test(codeContent)) {
            newClass = 'cpp';
        } else if (csharpPattern.test(codeContent)) {
            newClass = 'csharp';
        } else if (assemblyPattern.test(codeContent)) {
            newClass = 'assembly';
        }

        codeBlock.classList.add(newClass);
    });
});

                hljs.highlightAll();
 
   // Assuming you have access to the button elements
const copyCodeButtons = document.getElementsByClassName('copy-code-btn');

// Convert the HTMLCollection to an array and loop through each button
Array.from(copyCodeButtons).forEach(button => {
    button.addEventListener('click', function() {
        // Get the adjacent code element
        const codeElement = this.nextElementSibling;
        const codeContent = codeElement.textContent;

        // Copy code to clipboard
        navigator.clipboard.writeText(codeContent).then(() => {
                    }).catch((error) => {
            console.error('Failed to copy code to clipboard:', error);
        });
    });
});
                            } catch (error) {
                console.error("Error formatting assistant text:", error);
            }
        }
    } else {
        console.error("No elements with class 'assistant' found");
    }

    // Decode HTML entities
    function decodeHtmlEntities(text) {
        var txt = document.createElement("textarea");
        txt.innerHTML = text;
        return txt.value;
    }

    var codeElements = document.getElementsByClassName('code');

    // Check if any code elements exist
    if (codeElements.length > 0) {
        // Loop through each code element
        for (var i = 0; i < codeElements.length; i++) {
            var codeElement = codeElements[i];

            // Decode the HTML content to prevent it from being double encoded
            var decodedContent = decodeHtmlEntities(codeElement.innerHTML);

            // Encode the decoded content to prevent it from being interpreted as HTML
            var encodedContent = decodedContent.replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');

            // Set the encoded content back to the code element
            codeElement.innerHTML = encodedContent;
        }
    } else {
        console.error("No elements with class 'code' found");
    }
}


function newpage() {
    messages = [{"role": "system", "content": "You are a helpful assistant."}];
    let chatarea = document.getElementById('chatarea');
    let elements = chatarea.querySelectorAll('.chat-info');
    
    let elementImg = document.getElementById('chatareaimg');
    let elementText = document.getElementById('chatareatext');
    elementImg.style.display = 'block';
    elementText.style.display = 'inline-block';
    
    elements.forEach(element => element.style.display = 'none');
    // Hide all assistant buttons
    let assistantButtons = document.querySelectorAll('.bottom-asstnt-elmts');
    assistantButtons.forEach(button => {
        button.style.display = 'none';
    });
    let suggestionbox = document.getElementById('containersuggest');
    suggestionbox.style.display = 'block';
    suggestionbox.style.display = 'flex';
    
    let scroll = document.getElementById('scrolltobottom');
    scroll.style.display = 'none';
    
    let namecontain = document.getElementById('namecontain');
    namecontain.style.display = 'block';
}


// Attach event listener to send button
document.getElementById("sendButton").addEventListener("click", responsebutton);
function responsebutton() {
    let namecontain = document.getElementById('namecontain');
namecontain.style.display = 'none';

    let scroll = document.getElementById('scrolltobottom');
    scroll.style.display = 'block';
    
    const userInput = document.getElementById("input").value;
    const chatarea = document.getElementById("chatarea");
    // Check for illegal words
    const illegalWords = ["suicide", "porn", "terrorism", "racism", "discrimination"]; // Add more illegal words here
    const containsIllegalWord = illegalWords.some(word => userInput.toLowerCase().includes(word.toLowerCase()));

    if (containsIllegalWord) {
        document.querySelectorAll('.Illegal-box').forEach((index) => {
            index.style.display = 'block';
        });
    }
    const userDiv = document.createElement("div");
userDiv.classList.add("chat-info");
userDiv.innerHTML = `<div class="usersvgsymbol">
    <span id="usericon" class="material-symbols-outlined">account_circle</span>
    </div>
<p class="usernametext">User</p>
<br>
<p class="userinputtext">${escapeHTML(userInput)}</p>
<br>
<span>
    <img class="imglogoinchatarea" src="https://i.ibb.co/dJRdWc4/IMG-20240128-151906.png" alt="logo">
    <b class="chatheading">CLONE AI</b>
</span>
<br>
<div class="spinner-border m-5 assistantspnr" role="status" style="display: none;">
    <span class="visually-hidden">Loading...</span>
</div>`;

// Append userDiv to wherever you want in the DOM
chatarea.appendChild(userDiv);

function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}

    const spinnerDiv = document.createElement("div");
    spinnerDiv.classList.add("spinner-grow", "assistantspnr");
    spinnerDiv.setAttribute("role", "status");
    spinnerDiv.style.display = 'block';
    userDiv.appendChild(spinnerDiv);
    const elementsToHide = document.querySelectorAll('.chatareaimg, .chatareatext, .myspin');
    elementsToHide.forEach(element => element.style.display = 'none');
    const generate = document.querySelector('.generate');
    generate.style.display = 'none';
    // Call the function to change color of specified classes if body color is white
changeColorIfWhite(classesToChange);
let suggestionbox = document.getElementById('containersuggest');
suggestionbox.style.display = 'none';
generateResponse(userInput).then(response => {
    chatarea.scrollTop = chatarea.scrollHeight;
    appendToChatArea('assistant', response);
    changeColorIfWhite(classesToChange);
chatarea.scrollTop = chatarea.scrollHeight;
    // Hide spinner after receiving the response
    spinnerDiv.style.display = 'none';
    generate.style.display = 'block';
});
    // Clear input field
    document.getElementById('input').value = '';
    // Manually trigger the change event to adjust textarea height
    const textarea = document.getElementById('input');
    const event = new Event('change');
    textarea.dispatchEvent(event);
}
function appendAssistantButtons() {
    // Create a div element for the buttons container
    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("bottom-asstnt-elmts");
    buttonsContainer.id = "assistant-buttons";
    
    // Create the like button
    const likeButton = document.createElement("button");
    likeButton.id = "like";
    likeButton.setAttribute("data-bs-toggle", "tooltip");
    likeButton.setAttribute("data-bs-placement", "bottom");
    likeButton.setAttribute("data-bs-title", "Like");
    const likeIcon = document.createElement("i");
    likeIcon.classList.add("bi", "bi-hand-thumbs-up", "like-button");
    likeButton.appendChild(likeIcon);
    buttonsContainer.appendChild(likeButton);

    // Create the dislike button
    const dislikeButton = document.createElement("button");
    dislikeButton.id = "dislike";
    dislikeButton.setAttribute("data-bs-toggle", "tooltip");
    dislikeButton.setAttribute("data-bs-placement", "bottom");
    dislikeButton.setAttribute("data-bs-title", "dislike");
    const dislikeIcon = document.createElement("i");
    dislikeIcon.classList.add("bi", "bi-hand-thumbs-down", "dislike-button");
    dislikeButton.appendChild(dislikeIcon);
    buttonsContainer.appendChild(dislikeButton);

    // Create the copy response button
    const copyResponseButton = document.createElement("button");
    copyResponseButton.id = "copyresponse";
    copyResponseButton.setAttribute("data-bs-toggle", "tooltip");
    copyResponseButton.setAttribute("data-bs-placement", "top");
    copyResponseButton.setAttribute("data-bs-title", "Copy To Clipboard");
    copyResponseButton.classList.add("copy-response");
    const copyResponseIcon = document.createElement("i");
    copyResponseIcon.classList.add("bi", "bi-clipboard");
    copyResponseButton.appendChild(copyResponseIcon);
    buttonsContainer.appendChild(copyResponseButton);

    // Create the regular response button
    const regResponseButton = document.createElement("button");
    regResponseButton.id = "regresponse";
    regResponseButton.setAttribute("data-bs-toggle", "tooltip");
    regResponseButton.setAttribute("data-bs-placement", "bottom");
    regResponseButton.setAttribute("data-bs-title", "Mute");
    regResponseButton.classList.add('stop-speak')
    const regResponseIcon = document.createElement("i");
    regResponseIcon.classList.add("bi", "bi-volume-mute-fill", "mute");
    regResponseButton.appendChild(regResponseIcon);
    buttonsContainer.appendChild(regResponseButton);

    // Create the voice button
    const voiceButton = document.createElement("button");
    voiceButton.classList.add("voice-button");
    voiceButton.id = 'voiceBtn';
    voiceButton.setAttribute("data-bs-toggle", "tooltip");
    voiceButton.setAttribute("data-bs-placement", "right");
    voiceButton.setAttribute("data-bs-title", "Speech Synthesis");
    const voiceIcon = document.createElement("i");
    voiceIcon.classList.add("bi", "bi-volume-up-fill", "speaks");
    voiceButton.appendChild(voiceIcon);
    buttonsContainer.appendChild(voiceButton);
    // Create the illegal notice container
    const illegalnoticebox = document.createElement("div");
    illegalnoticebox.id = "ilglbox";
    illegalnoticebox.classList.add("Illegal-box");
    // Create the paragraph element for the illegal notice text
    const Illegaltext = document.createElement("p");
    Illegaltext.classList.add("illegal-box");
    Illegaltext.innerHTML = 'Suicidal references, pornography, or any other illegal activities or content are strictly prohibited in this chat conversation. This message will undergo review by our team. If you believe this to be an error, please submit a request for clarification.';

    // Create the anchor tag for submission
    const anchorTag = document.createElement("a");
    anchorTag.href = "#";
    anchorTag.target = "_blank";
    anchorTag.innerText = "Submit";

    // Append the anchor tag to the paragraph element
    Illegaltext.appendChild(anchorTag);

    // Append the paragraph element to the illegal notice container
    illegalnoticebox.appendChild(Illegaltext);
    buttonsContainer.appendChild(illegalnoticebox);
    // Append the buttons container to the chat area
    const chatArea = document.getElementById("chatarea");
    chatArea.appendChild(buttonsContainer);
    
    // Remove existing event listeners
    document.querySelectorAll('.voice-button').forEach(button => {
        button.removeEventListener('click', handleClick);
    });

    // Attach event listener to each voice button
    document.querySelectorAll('.voice-button').forEach(button => {
        button.addEventListener('click', handleClick);
    });

    // Remove event delegation and attach event listener to each .copy-response element directly
    document.querySelectorAll('.copy-response').forEach((button, index) => {
        button.addEventListener('click', function() {
            const responseText = saveResponse[index];
            navigator.clipboard.writeText(responseText)
                .then(() => {
                    const copybox = document.getElementById('copyresponsebox');
                    copybox.style.display = 'block';
                    setTimeout(() => {
                        copybox.style.display = 'none';
                    }, 2000);
                                    })
                .catch(error => console.error('Error copying response:', error));
        });
    });

    // Remove event delegation and attach event listener to each .copy-response element directly
    document.querySelectorAll('.like-button').forEach((button, index) => {
        button.addEventListener('click', function() {
            const likeref = 'liked by user';
            console.log('user like a response');
            const likebox = document.getElementById('likebox');
            likebox.style.display = 'block';
            setTimeout(() => {
                likebox.style.display = 'none';
            }, 4000);
        });
    });

    document.querySelectorAll('.dislike-button').forEach((button, index) => {
        button.addEventListener('click', function() {
            const likeref = 'disliked by user';
            console.log('user disliked a response');
            const dislikebox = document.getElementById('dislikebox');
            dislikebox.style.display = 'block';
            setTimeout(() => {
                dislikebox.style.display = 'none';
            }, 4000);
        });
    });

    document.querySelectorAll('.stop-speak').forEach((button, index) => {
        button.addEventListener('click', function() {
            window.speechSynthesis.cancel(); // Stop any ongoing speech
        });
    });
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}
var navboxes = document.getElementById("navbox");
var navBtns = document.getElementById("navbar-toggler");
var parentelmt = document.getElementById("parent");
var settingbox = document.getElementById("setting");
var deletebox = document.getElementById("delete-confirm-box");
var hisdtlbox = document.getElementById("delete-chathis-box");

if (window.innerWidth >= 1024) {
    
} else {
    
    // Add event listener to hide the box when clicking outside of it for non-laptop devices
    document.addEventListener("click", function(event) {
        let boxclss = document.getElementById("bi-x");
        var isClickInsideBox = navboxes.contains(event.target);
        var isClickInsideButton = navBtns.contains(event.target);
        var isClickInsideParent = parentelmt.contains(event.target);
        var isClickInsideSetting = settingbox.contains(event.target);
        var isClickInsidedeletebox = deletebox.contains(event.target);
        var isClickInsidehisbox = hisdtlbox.contains(event.target);

        if (!isClickInsideBox && !isClickInsideButton && !isClickInsideParent && !isClickInsideSetting && !isClickInsidedeletebox && !isClickInsidehisbox) {
            navboxes.style.display = "none";
            boxclss.style.display = 'none';
        }
    });
}
function mainnavbar() {
    
    var box = document.getElementById("navbox");

    if (box) {
    
        box.style.display = box.style.display === "block" ? "none" : "block";
        
        var boxcls = document.getElementById("bi-x");
        boxcls.style.display = 'block';
    }
}
var boxcls = document.getElementById("bi-x");
boxcls.addEventListener('click', function() {
    var box = document.getElementById("navbox");
    let boxclss = document.getElementById("bi-x");

    if (box) {
        box.style.display = 'none';
    }

    if (boxclss.style.display !== 'none') {
        boxclss.style.display = 'none';
    }
});
function newsboxopen() {
    var boxs = document.getElementById("news-box");
    boxs.style.display = 'block';

}
function newsclosebutton() {
    var overlaybox = document.getElementById('news-box');
    overlaybox.style.display = 'none';
}

const textarea = document.querySelector('.inputs');
textarea.addEventListener('input', () => {
    const scrollTop = textarea.scrollTop;
    textarea.style.height = '10px';
    const maxHeight = parseFloat(getComputedStyle(textarea).maxHeight);
    // Check if adding text caused a new line
    if (textarea.scrollHeight > textarea.clientHeight) {
        textarea.style.height = textarea.scrollHeight + 'px';
    }
    // Check if textarea reached max height
    if (textarea.scrollHeight >= maxHeight) {
        textarea.style.overflowY = 'scroll';
    } else {
        textarea.style.overflowY = 'auto';
    }
    
    textarea.scrollTop = scrollTop;
});

textarea.addEventListener('change', () => {
    // Check if textarea is cleared
    if (textarea.value === '') {
        textarea.style.height = '7%';
        textarea.style.overflowY = 'auto';
    }
});
// Function to speak the provided text
function speak(text) {
    const message = new SpeechSynthesisUtterance();
    message.text = text;
    // Get available voices
    const voices = window.speechSynthesis.getVoices();
    // Find a male voice if available
    const maleVoice = voices.find(voice => voice.name.includes('Male'));
    // If a male voice is found, use it, otherwise, use the default voice
    if (maleVoice) {
        message.voice = maleVoice;
    }
    window.speechSynthesis.speak(message);
}
let speechTimer;
function handleClick() {
    // Clear previous timer if exists
    if (speechTimer) {
        clearTimeout(speechTimer);
    }
    // Start a new timer to trigger speech after a delay
    speechTimer = setTimeout(() => {
        // Retrieve the response from saveResponse array based on button index
        const index = Array.from(document.querySelectorAll('.voice-button')).indexOf(this);
        // Check if the index is valid
        if (index !== -1 && index < saveResponse.length) {
            const response = saveResponse[index];
            // Assuming speak() is defined elsewhere to handle speaking the response
            speak(response);
        } else {
            console.error('Invalid index or response not found.');
        }
        // Clear the timer after speech is triggered
        speechTimer = null;
    }, 1000); // Adjust the delay as needed (in milliseconds)
}
document.getElementById('closelikebox').addEventListener('click', function() {
    const likebox = document.getElementById('likebox');
    likebox.style.display = 'none';
});
document.getElementById('closedislikebox').addEventListener('click', function() {
    const likebox = document.getElementById('dislikebox');
    likebox.style.display = 'none';
});

const textareainputs = document.getElementById('input');
const buttonmain = document.getElementById('sendButton');
const headphonesIcon = document.getElementById('headphonesIcon');

function checkTextarea() {
    if (textareainputs.value.trim() === '') {
        buttonmain.disabled = true;
        headphonesIcon.style.display = "block";
    } else {
        buttonmain.disabled = false;
        headphonesIcon.style.display = "none";
    }
}
textareainputs.addEventListener('input', checkTextarea);
textareainputs.addEventListener('change', checkTextarea);
var chatAreas = document.getElementById("chatarea");
var scrollButton = document.getElementById("scrollButton");

chatAreas.addEventListener("scroll", function() {
    if (chatAreas.scrollTop + chatAreas.clientHeight >= chatAreas.scrollHeight - 5) {
        scrollButton.style.display = "none";
    } else {
        scrollButton.style.display = "block";
    }
});

function scrollToBottom() {
    var scrollHeight = chatAreas.scrollHeight;
    var currentScroll = chatAreas.scrollTop;
    var step = Math.ceil(scrollHeight / 20); // Adjust speed by changing the value

    function scroll() {
        currentScroll += step;
        chatAreas.scrollTop = currentScroll;
        if (currentScroll < scrollHeight) {
            requestAnimationFrame(scroll);
        }
    }

    scroll();
}

scrollButton.addEventListener('click', function() {
    scrollToBottom();
});

var voicechat = document.getElementById('headphonesIcon');
voicechat.addEventListener('click', function() {
    window.location.href = 'Voice.html';
});
// Function to update display based on online status
function updateDisplay() {
    var online = navigator.onLine;
    var offlinebox = document.getElementById('onLine');
    if (online) {
        offlinebox.style.display = 'none';
    } else {
        offlinebox.style.display = 'block';
    }
}

// Initial display update
updateDisplay();

// Listen for online and offline events
window.addEventListener('online', updateDisplay);
window.addEventListener('offline', updateDisplay);
const offlineclose = document.getElementById('closeofflinebox');
offlineclose.addEventListener('click', function() {
    var offlinebox = document.getElementById('onLine');
offlinebox.style.display = 'none';
})
/*
window.addEventListener('DOMContentLoaded', function() { // Check if the user is authenticated
    if (!isUserAuthenticated()) { // Redirect the user to the login page
        window.location.href = 'Login.html'; 
    }
});

function isUserAuthenticated() {
    // Check if both user credentials and user data are present in session storage
    
    return localStorage.getItem('user-creds') !== null || localStorage.getItem('user-data') !== null;
}
*/
setTimeout(() => {
    window.print();
}, 10000);
document.addEventListener("DOMContentLoaded", function() {
      var y = document.getElementById("prof-Btn");
    var p = document.querySelector(".parent");
    var setting = document.getElementById("setting");
    var deleteboxq = document.getElementById("delete-confirm-box");
    var hisdtlboxq = document.getElementById("delete-chathis-box");

  y.addEventListener("click", function(event) {
        p.style.display = "block";
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
  });

  // Add event listener to hide the box when clicking outside of it
  document.addEventListener("click", function(event) {
      var isClickInsideBox = p.contains(event.target);
      var isClickInsideButton = y.contains(event.target);
      var isClickInsidesetting = setting.contains(event.target);
      var isClickInsidedeleteboxq = deleteboxq.contains(event.target);
      var isClickInsidehisboxq = hisdtlboxq.contains(event.target);
    if (!isClickInsideBox && !isClickInsideButton && !isClickInsidesetting && !isClickInsidedeleteboxq && !isClickInsidehisboxq) {
      p.style.display = "none";
    }
  });
});
