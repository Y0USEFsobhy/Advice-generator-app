let quote = document.getElementById("quote");
let quoteId = document.getElementById("quoteId");
let btn = document.getElementById("btn");

function api() {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      quote.textContent = data.slip.advice;
      quoteId.textContent = `ADVICE # ${data.slip.id}`;
    });
}
btn.addEventListener("click", api);
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    api();
  }
});
api();
