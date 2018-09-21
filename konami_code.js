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
  let index = 0
  document.body.addEventListener("keydown", (e) => {
    const key = e.key

    // if (codes[index] === key){
    //   ++index
    //   if (index === codes.length){
    //     window.alert("All keys pressed gr8 job")
    //     index = 0
    //   }
    // }

    index = (codes[index] === key) ? ++index : 0
    if (index === codes.length){
      window.alert("All keys pressed gr8 job")
      index = 0
    }
  })
}
