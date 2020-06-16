
import StoryScript from './scripts/storyScript';

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
    const containerJenna = document.querySelector("#jenna-container");
    const containerJohn = document.querySelector("#john-container");
    const chatWindows = document.querySelector(".chat-windows");
    chatWindows.classList.remove('hidden');

    jennaChat.innerHTML = `
        <p>${StoryScript.jenna0.text}</p>
        
    `;
    johnChat.innerHTML = `
        <button class="reply">reply</button>
    `;
    const replyBtn = document.querySelector(".reply");
    replyBtn.onclick = (e) => {
        e.preventDefault();
        johnChat.innerHTML = `
        <p>${StoryScript.john0.text}</p>
        `;
        johnChat.append(...(generateBtns(StoryScript.john0.next)));
    }


}

function generateBtns(nextOptions){
    let optionBtns = [];
    for (let option in nextOptions){
        const choice = StoryScript[nextOptions[option]];
        const choiceBtn = document.createElement("button");
        choiceBtn.classList.add(`btn-${option}`);
        choiceBtn.innerText = choice.text;
        choiceBtn.onclick = handleChoice(choice.next)
        optionBtns.push(choiceBtn);

    }
    return optionBtns
}

function handleChoice(nextChoice){
    return function handleChoiceClick (e){
    e.preventDefault();
    if (nextChoice === null) {
        restartGame()
    }else{
    let personText = StoryScript[nextChoice].text;
    jennaChat.innerHTML = `
        <p>${personText}</p>
    `}
    }
}

function restartGame(){
    console.log("restart!")
}