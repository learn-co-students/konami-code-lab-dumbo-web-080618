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

let idx = 0

function init() {
  document.body.addEventListener('keydown', function(e) {
    const key = e.key;

    if (key === codes[idx]) {
      idx++
      console.log(idx)
      if (idx === codes.length) {
        alert("hurray!")
        idx = 0
      }
    } else {
      idx = 0
    }
  })
}
