import shuffleArray from "shuffle-array";

const allQuestions = [
    "Find a toothbrush",
    "Find a TV remote",
    "Find a bottle opener",
    "Find a jar of something",
    "Find a key",
    "Drink something",
    "Find something that begins with the letter B",
    "Find something orange",
    "Find something soft",
    "Find a battery",
    "Find something round / circular",
    "Name 4 IBM UK Locations",
    "Describe a film without using: any words in the title, the actor's names or the character's names.",
    "Do 5 Press-Ups",
    "Un-Plug the Nearest Cable and Show Me Both Ends",
    "Do an Impression of Someone (Time Stops When We Guess Right)",
    "Name 5 Countries Beginning with A",
    "Put a Hat on",
    "Find a Printed Photo of Yourself",
    "Say Something Nice about Trump",
    "put your sock on your head",
    "Balance a Coin on Your Nose",
    "Find Something Orange",
    "Compliment the Person who went before you",
    "Name Everyone in the call",
    "Put us upside down",
    "Tell us something %NAME% doesn't know",
    "Find a Whisk",
    "Whistle/Hum a tune for us to guess",
    "Take out a light bulb and put it above your head",
    "Grab a Square of Toilet Paper",
    "Ice cube in your mouth",
    "Make a Paper airplane",
    "Get Something made from Aluminium",
    "Get a Cheese Grater",
    "Do 10 Star Jumps",
    "Name 3 films with Matt Damon in them",
    "Balance a pen upright",
    "Show us the sky",
    "Eat something",
    "Find some IBM merch",
    "Tell me something I didn't know",
    "Send me a Meme",
    "Tear a piece of paper in half",
    "Read the first word on page 34 of a book",
    "Grab Something that is from IKEA",
    "Type the Alphabet in the WebEx Chat",
    "10 Star Jumps",
    "Take a Pillow Case off a Pillow and Put it on your Head",
    "Make an Annoying Noise",
    "Say Hello in five languages (other than english)",
    "Find Two Left Shoes",
    "Show Me Something Alive",
    "Tell a Joke",
    "Get a candle",
];

const numberOfQuestions = allQuestions.length;

export default () => {
    const shuffledQuestions = shuffleArray(allQuestions);

    return shuffledQuestions;
};

export { allQuestions, numberOfQuestions };
