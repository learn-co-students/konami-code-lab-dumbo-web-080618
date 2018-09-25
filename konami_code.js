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

function init(){
  let compareArray = [];
  let compareString = '';
  let codeString = '';

  for(let i = 0; i < codes.length; i++){
    codeString += codes[i];
  }


  document.body.addEventListener('keydown', function(event){
    compareArray.push(event.key);

    if (compareArray.length <= 10){
      for(let i = 0; i < compareArray.length; i++){
        if(i === 9){
          compareString += compareArray;
        }
      }
    }else{
      compareArray = [];
      compareString = '';
    }
    compareString = compareString.split(',').join('');

    if(compareString === codeString){
      alert('Congratulations!');
    }
  });
}
