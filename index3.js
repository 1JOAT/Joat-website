const result2 = document.getElementById('result2');
const random = Math.floor(Math.random() * 100 + 1);
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');




function calculate (){

const nameInput1 = document.getElementById('firstName').value;
const nameInput2 = document.getElementById('secondName').value;

  if (nameInput1 === ""){
    result2.textContent = "Please enter your name";

    setTimeout(() => {
      result.textContent ='';
    }, 3800);
  }
  else if(nameInput2 === ""){
    result2.textContent = "Please enter your partners name";

    setTimeout(() => {
        result2.textContent ='';
      }, 3800);
  }
  else if(nameInput1 === nameInput2){
    result2.textContent = 'Could you and your lover possibly bear the same name?';
    setTimeout(() => {
      result2.textContent ='';
    }, 3800);
  }

  else if(/[a-zA-Z]+$/.test(nameInput1 && nameInput2)){
    if((option1.checked || option2.checked) && (option3.checked || option4.checked)){
      if (random >= 0 && random < 20){
        result2.textContent = `Your love score is below 50% Looks like there's a bit of a cold front. Maybe a movie would warm things up?`
      }
      else if(random >= 20 && random < 40){
        result2.textContent = `Your love score is below 50%, But i see a very strong Chemistry looming...`
      }
      else if(random >= 40 && random < 50){
        result2.textContent = `Your love score is below 50%, There is potential for a cute rom-com storyline here. Keep the popcorn ready!`
      }

      else if(random >= 50 && random < 70){
        result2.textContent = `Your love score is ${random}%, The love Barometer is Rising! Time to plan a spotaneous adventure together.`
      }
      else if(random >= 70 && random < 85){
        result2.textContent = `Your love score is ${random}%,You are in the sweet spot of love! Keep the suprises coming and watch the magic unfold!!`
      }
      else if(random >= 85 && random < 99){
        result2.textContent = `Your love score is ${random}%,It's like a fairy tale romance! Your love is the envy of storybook characters.`
      }
      else{
        result2.textContent = `Your love score is ${random}%, Congratulations! You've hit the love jackpot.It's time to celeberate the perfect match!!`
      }
      setTimeout(() => {
        result2.textContent ='';
      }, 10000);
    }
    else{
      result2.textContent = "Don't be in a rush! please select correctly your gender and your lovers' gender.";

      setTimeout(() => {
        result2.textContent ='';
      }, 3800);
    }
  }
  
  else{
    result2.textContent = 'Please use valid charcacters';
    setTimeout(() => {
      result2.textContent ='';
    }, 3800);
  }
  }
    
  
  