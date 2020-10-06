import shuffleArray from "shuffle-array";

const allQuestions = [
  "Put a Tooth Brush in your Ear",
  "Draw a Dick and show me",
  "Down your Drink (within Reason)",
  "Get Some School Uniform",
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
  "Grab Something Orange",
  "Insult the Person who went before you",
  "Compliment the Person who went before you",
  "Name Everyone in the call",
  "Put us upside down",
  "Tell us something %NAME% doesn't know",
  "Grab a Whisk",
  "Write BOOBS on a calculator",
  "Whistle/Hum a tune for us to guess",
  "Take out a light bulb and put it above your head",
  "Grab a Square of Toilet Paper",
  "Do a Hand Stand",
  "Ice cube in your mouth",
  "Make a Paper airplane",
  "Get Something made from Aluminium",
  "Name 5 Restaurants in %CITY%",
  "Get a Cheese Grater",
  "Charades Round",
  "Do 10 Star Jumps",
  "Name 5 films with Matt Damon in them",
  "Balance a pen upright",
  "Show us the sky",
  "Eat something",
  "Put on some uni branded clothes",
  "Tell me something I didn't know",
  "Send me a Meme",
  "Get your Sock Wet",
  "Tear a piece of paper in half",
  "Read the first word on page 34 of a book",
  "Grab Something that is from IKEA",
  "Type the Alphabet in the Zoom Chat",
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
