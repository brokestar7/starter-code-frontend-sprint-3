// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var name = document.querySelector(".name");

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById("errorName");
var errorPhone = document.getElementById("errorPhone");

// Exercise 6
function validateCheckout(event) {
  error = 0;
  // Validate fields entered by the user: name, phone, password, and email
  event.preventDefault();  
  let name = document.getElementById("fName").value;
  let formN = document.getElementById("fName");
  let lName = document.getElementById("fLastN").value;
  let formLName = document.getElementById("fLastN");
  let address = document.getElementById("fAddress").value;
  let formAddress = document.getElementById("fAddress");
  let email = document.getElementById("fEmail").value;
  let formE = document.getElementById("fEmail");
  let phone = document.getElementById("fPhone").value;
  let formP = document.getElementById("fPhone");
  let password = document.getElementById("fPassword").value;
  let formPassword = document.getElementById("fPassword");
  if(name == "" || name.length < 3 ){
    formN.classList.add("is-invalid");
    error++;
  }
  if(lName == "" || lName.length < 3 ){
    formLName.classList.add("is-invalid");
    error++;
  }
  if(address == "" || address.length < 3 ){
    formAddress.classList.add("is-invalid");
    error++;
  }
  if(email == "" || email.length < 3){
    formE.classList.add("is-invalid");
    error++;
  }
  if(phone == "" || phone.length != 9){
    formP.classList.add("is-invalid");
    error++;
  }
  if(password == "" || password.length < 4){
    formPassword.classList.add("is-invalid");
    error++;
  }

  
  
  if(error>0){
    return false;
  }else{
    formN.classList.remove("is-invalid");
    formLName.classList.remove("is-invalid");
    formAddress.classList.remove("is-invalid");
    formE.classList.remove("is-invalid");
    formP.classList.remove("is-invalid");
    formPassword.classList.remove("is-invalid");
    
      return true;
  }

  
  

}
