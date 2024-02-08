function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  userInput = document.querySelector("#user-input");
  apiKey = "5bd39438od4a5b74b16a2a5f3d6905t4";
  prompt = `Generate a feminine poem about ${userInput}`;
  context =
    "User instructions are: you're a philosopher and a poem expert about femininity and mental health. Your mission is to generate a 4 line poem and separate each line with a <br  />. Make sure to follow the user instructions. At the end of the poem sign with 'Sakura AI' inside <strong> element";
  apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating quote");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiURL).then(displayQuote);
}

quoteElement = document.querySelector(".quote-generator-form");
quoteElement.addEventListener("submit", generateQuote);
