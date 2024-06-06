

function create (){
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const businessName = document.getElementById('businessName').value;
    const businessAddress = document.getElementById('businessAddress').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('number').value;
    const fullName = firstName + "  " + lastName;
    const error = document.getElementById("error");
    const nameResult = document.getElementById('nameResult')
    const bussinessNameResult = document.getElementById("bussinessNameResult");
    const bussinessAddressResult = document.getElementById("bussinessAddressResult");
    const emailResult = document.getElementById("emailResult");
    const numberResult = document.getElementById("numberResult");
    const show = document.getElementById("show");

    if (firstName === "" || lastName === "" || businessName === "" || businessAddress === "" || email === "" || phoneNumber === ""){
       error.textContent = 'Please fill in correct details';

       setTimeout(() => {
        error.textContent ='';
      }, 3500);
    }
    else{
      show.classList.add("generatedcard")
       nameResult.textContent = fullName;
       bussinessNameResult.textContent = businessName;
       bussinessAddressResult.textContent = businessAddress
       emailResult.textContent = email;
       numberResult.textContent = phoneNumber;
       
    }
}
