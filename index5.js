
const result = document.getElementById('result')


function calculate() {
  const weight = document.getElementById('weight')
  const inputWeight = weight.value
  const weightValue = parseInt(inputWeight, 10);

  const height = document.getElementById('height')
  const inputHeight = height.value
  const heightValue = parseInt(inputHeight, 10);
  const newHeight = heightValue / 100;

  const age = document.getElementById ('age');
  const newAge = age.value;

  const checked = document.querySelector('input[name="gender"]:checked');

 

   if(!checked){
     result.textContent = 'Please select a gender.';

     setTimeout(() => {
      result.textContent ='';
    }, 4000);
   }

   else if(newAge === '' || newHeight === "" || weightValue === ""){
    result.textContent = 'Please fill in the correct details.';

    setTimeout(() => {
      result.textContent ='';
    }, 4000);
   }

   else{
    const bmi = weightValue / (newHeight * newHeight)
    const finalAnswer = bmi.toFixed(1)

     if(finalAnswer < 18.5){
       result.textContent = `Underweight: Your BMI is ${finalAnswer}`
     }
     else if(finalAnswer >= 18.5 && finalAnswer < 24.9){
       result.textContent = `Normal weight: Your BMI is ${finalAnswer}`
     }
     else if(finalAnswer >= 24.9 && finalAnswer < 29.9){
       result.textContent = `Overweight: Your BMI is ${finalAnswer}`
     }
     else{
       result.textContent = `Obese: Your BMI is ${finalAnswer}`
     }
     setTimeout(() => {
      result.textContent ='';
    }, 20000);
   }
}