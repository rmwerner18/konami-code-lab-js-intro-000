const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', function(e) {
  var key = e.key
  for (let i = 0; i <= codes.length; i++) {
  if (key === codes[i]) {
    i++
  if (i === codes.length) {
      alert('Hurray')
      i = 0
    }
  }
  else {i = 0}
}})
}
