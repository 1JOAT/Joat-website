
const result = document.getElementById('result');
const computerFirstMove = Math.random()*100 +1;
const  computerMove = Math.floor(computerFirstMove);

let count = 0;


function submit(){
  count++;

  const playerMove = document.getElementById('guess');
  const playerMoveModify = playerMove.value;
  const finalMove = parseInt(playerMoveModify);

  if(computerMove === finalMove){
    result.textContent =`Computer choose ${computerMove}, You were able to guess the number in ${count} trials.. KUDOS!`
  }

  else if (finalMove !== computerMove){
    if(computerMove < finalMove){
      result.textContent =  `Let's try reducing`;
      setTimeout(() => {
        result.textContent =''
      }, 4000);        
      }
    else if (computerMove > finalMove){
      result.textContent = `Let's try increasing`;
      setTimeout(() => {
        result.textContent =''
      }, 4000);        
      }
      
    }
}