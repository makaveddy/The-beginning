const textNodes = [
    {
        id: 1,
        text: 'Hey! You going to the party tonight?',
        options: [
            {
                text: 'Yea most def. What time are you gonna head out?',
                nextText: 2
            },
            {
                text: 'Yea most def just hate going to these things alone.',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Should be leaving my place in about an hour. See you there.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 3,
        text: 'Aww yea I know the feeling. Can I ask you something? you ever think of that kiss?',
        options: [
            {
                text: 'Yea. All the time.',
                nextText: 4
            },
            {
                text: 'what kiss?',
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: 'Why did you wait so long? I thought you did not like me.',
        options: [
            {
                text: 'I was scared to be honest. Did not want to lose you as a friend.',
                nextText: 6
            }
        ]
    },
    {
        id: 5,
        text: 'Nevermind. Ill see you at the party.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    },
    {
        id: 6,
        text: 'You would not have lost me. That is sweet of you though.',
        options: [
            {
                text: 'Want me to pick you up for the party?',
                nextText: 7
            },
            {
                text: 'Ill see you at the party.',
                nextText: 8
            }
        ]
    },
    {
        id: 7,
        text: 'Yess!! Ill be ready in an hour cant wait!!',
        options: [
            {
                text: 'Congrats! You sealed the date! Play again?',
                nextText: -1
            }
        ]
    },
    {
        id: 8,
        text: 'Oh ok then. See ya.',
        options: [
            {
                text: 'Restart',
                nextText: -1
            }
        ]
    }
]
export default textNodes

