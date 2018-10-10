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

let index = 0

function init() {
  document.body.addEventListener('keydown', (event) => {

    const key = event.key;

    if (codes[index] === key) {
      index++;
      if (index === codes.length) {
        alert("Hurray!");

        index = 0;
      }

    } else {

      index = 0;
    }

    })

  }
