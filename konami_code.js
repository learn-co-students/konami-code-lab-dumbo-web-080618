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

function onKeyDownHandler(e){
  debugger
  const key = e.keyCode;
  if (key === codes[index]){
    index++;
    if (index === codes.length){
      alert("Hurray!");

      index = 0;
    }
  }
  else{
    index = 0;
  }
}

function init() {
  // your code here
  let index = 0;
  const body = document.querySelector("body");
  body.addEventListener('keydown', function(e){
    const key = e.key;
    if (key === codes[index]){
      index++;
      if (index === codes.length){
        alert("Hurray!");

        index = 0;
      }
    }
    else{
      index = 0;
    }
  })

}
