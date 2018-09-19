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
  let i = 0;

  document.body.addEventListener('keydown', function (e) {
    let key = e.key;

    if (codes[i] === key) {
      i += 1;
    } else {
      i = 0;
    }

    if (i === codes.length) {
      window.alert('Hurray');
      i = 0;
    }
  });
}
