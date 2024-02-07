function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["Everything blooms in its own time."],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

quoteElement = document.querySelector(".quote-generator-form");
quoteElement.addEventListener("submit", generateQuote);
