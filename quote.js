var quotes = [
  "javascript is awesome",
  "I'm in san franscico",
  "Dmitry has a beautiful background",
  "mt catis called behemoth",
  "3423423423423"
]

function selectQuote() {
  // Math.random() // 0.456789 
  // quotes.length() // 5
  // Math.random() * quotes.length() // 0 - 5  // 3.2342
  // Number.parseInt(3.2342) // 3 
  var number = Number.parseInt(Math.random() * quotes.length)
  var quote = quotes[number]
  document.querySelector("#quote").textContent = quote
}
