const storyScript = {
    jenna0: {
        character: "Jenna",
        text: "Hey! You going to the party tonight?",
        next: "john0"
    },
    john0: {
        character: "John",
        text: "Yea most def.",
        next: {
            option1: "john1",
            option2: "john2"
        }
    },
    john1: {
        character: "John",
        text: "What time you gonna head out?",
        next: "jenna1"
    },
    john2: {
        character: "John",
        text: "hate going to these things alone.",
        next: "jenna2"
            
    },
    jenna1: {
    character: "Jenna",
        text: "Should be leaving my place in about an hour. See you there.",
        next: "john3"
    },
    jenna2: {
    character: "Jenna",
        text: "aww yea I know the feeling. Can I ask you something? You ever think of that kiss?",
        next: "john4"
    },
    john3: {
    character: "John",
        text: "Ok see you.",
        next: "" //restart goes here
    },
    john4: {
    character: "John",
        text: "...",
        next: {
            option1: "john5",
            option2: "jonh6"
        }
    },
    john5: {
    character: "John",
        text: "Yea. All the time.",
        next: "jenna3"
    },
    john6: {
    character: "John",
        text: "What kiss?",
        next: "jenna4"
    },
    jenna3: {
    character: "Jenna",
        text: "Why did you wait so long? I thought you didn't like me.",
        next: "john7"
    },
    jenna4: {
    character: "Jenna",
        text: "Never mind. I'll see you at the party.",
        next: "" //restart goes here.
    },
    john7: {
    character: "John",
        text: "I was idk umm",
        next: {
            option1: "john8",
            option2: "john9"
        }
    },
    john8: {
    character: "John",
        text: "I was scared to be honest. Didn't want to lose you as a friend.",
        next: "jenna5"
    },
    john9: {
    character: "John",
        text: "nevermind I'll just see you at the party.",
        next: "" //restart goes here
    },
    jenna5: {
    character: "Jenna",
        text: "You wouldnt have lost me. That is sweet of you though.",
        next: "john10"
    },
    john10: {
    character: "John",
        text: ":-)",
        next: {
            option1: "john11",
            option2: "john12"
        }
    },
    john11: {
    character: "John",
        text: "Want me to pick you up for the party?",
        next: "jenna6"
    },
    john12: {
    character: "John",
        text: "I'll see you at the party.",
        next: "" // restart goes here
    },
    jenna6: {
    character: "Jenna",
        text: "Yess!! I'll be ready in an hour cant wait!!",
        next: "" //game over
    }
}

export default storyScript



//     John
// Yea most def.What time you gonna head out ?

//     Jenna
// Should be leaving my place in about an hour.

//     John
// Perfect timing.I’ll see you there.

//     Jenna
// Can I ask you something ?

//     John
// Yea whats up ?

//     Jenna
// Do you ever think about that kiss ?

//     John
// 1. Yea.All the time
// 2. What kiss ?

//     Jenna
// 1. Why did you wait so long ? I thought you didn’t like me.
// 2. Never mind I’ll see you at the party.

//     John
// I was scared to be honest.Didn’t want to lose you as a friend.

//     Jenna
// You wouldn’t have lost me.Thats sweet of you though.

//     John
// 1. Want me to pick you up for the party ?
// 2. I’ll see you at the party

// Jenna
// 1. Ok sure!
// 2. Oh umm yea ok see you then.
