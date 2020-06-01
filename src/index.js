
import StoryScript from './scripts/storyScript'

window.addEventListener("DOMContentLoaded", setupGame);

function setupGame (){
    const startButton = document.querySelector("#startBtn");
    startButton.onclick = (e) => {
        e.preventDefault();
        const container = document.querySelector(".container");
        container.innerHTML = "";
        // container.classList.add('hidden');
        startConvo();
      
    }
}

function startConvo (){
                        // const containerJenna = document.querySelector(".convo-container-Jenna");
                        // const containerJohn = document.querySelector(".convo-container-John");
                        // containerJenna.classList.remove('hidden')
                        // containerJohn.classList.remove('hidden')

                        const containerJenna = document.createElement("div");
                        // const boxDivJenna = document.createElement("div");
                        // boxDivJenna.classList.add('box')
                        // const paragraphJenna = document.createElement("p")
                        // paragraphJenna.innerText = StoryScript.intro0.text
                        // boxDivJenna.appendChild(paragraphJenna);
                        // containerJenna.appendChild(boxDivJenna);
                        // document.body.appendChild(containerJenna);

                        containerJenna.innerHTML = `
    <div class="box">
    <p>${StoryScript.intro3.text}</p>
        ${generateBtns(StoryScript.intro3.next)}
    </div>
    
    `;
                        document.body.appendChild(containerJenna);
}

function generateBtns(nextOptions){
    let optionBtns = "";
    for (let option in nextOptions){
        optionBtns += (`<button class="btn-${option}">${nextOptions[option]}<button>`)
    }
    return optionBtns
}