
import textNodes from './scripts/storyScript';

window.addEventListener("DOMContentLoaded", setupGame);
let jennaChat;
let johnChat;

function setupGame (){
    const startButton = document.querySelector("#startBtn");
    jennaChat = document.querySelector(".chatbox-1");
    johnChat = document.querySelector(".chatbox-2");
    startButton.onclick = (e) => {
        e.preventDefault();
        const container = document.querySelector(".main-container");
        container.innerHTML = "";
        container.classList.add('hidden');
        startConvo();
      
    }
}

function startConvo (){
    const chatWindows = document.querySelector(".chat-windows");
    chatWindows.classList.remove('hidden');
    showTextNode(1)


}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    jennaChat.innerText = textNode.text
    while (johnChat.firstChild) {
        johnChat.removeChild(johnChat.firstChild)
    }

    textNode.options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        johnChat.appendChild(button)

    })
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startConvo()
    }
    showTextNode(nextTextNodeId)
}



