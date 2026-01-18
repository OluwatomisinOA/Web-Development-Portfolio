const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

const apiUrl = "https://api.allorigins.win/raw?url=https://zenquotes.io/api/random";

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();
  quote.innerHTML = data[0].q;
  author.innerHTML = data[0].a;
}

getQuote(apiUrl);


function tweet() {
  window.open(`https://twitter.com/intent/tweet?text=${quote.innerHTML}---- by ${author.innerHTML}`, "Tweet Window", "width=600, height=300")
}

newQuoteBtn.addEventListener("click", () => {
  getQuote(apiUrl);
})