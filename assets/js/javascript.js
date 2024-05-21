const signUp = document.getElementById("signUp");
const closeSignUp = document.getElementById("closeSignUp");
const formContainer = document.getElementById("formContainerSignUp");

signUp.addEventListener("click", (e) => {
  formContainer.style.visibility = "visible";
});

closeSignUp.addEventListener("click", (e) => {
  formContainer.style.visibility = "hidden";
});

const myUserNameSignUp = document.getElementById("usernameSignUp");
const myUserEmailSignUp = document.getElementById("emailSignUp");
const myPasswordSignUp = document.getElementById("passwordSignUp");

const submitButtonSignUp = document.getElementById("submitButtonSignUp");

let isUsernameValidSignUp = false;
let isEmailValidSignUp = false;
let isPasswordValidSignUp = false;

submitButtonSignUp.disabled = true;

myUserNameSignUp.addEventListener("keyup", (e) => {
  let usernameSignUp = myUserNameSignUp.value;
  let usernameSignUpRegEx = /^[\w\d.-]{4,12}$/;
  isUsernameValidSignUp = usernameSignUpRegEx.test(usernameSignUp);
  const wrongUsernameSignUp = document.getElementById("labelUsernameSignUp");

  if (isUsernameValidSignUp) {
    myUserNameSignUp.style.border = "2px solid green";
    wrongUsernameSignUp.innerText = "Username";
    wrongUsernameSignUp.style.fontSize = "1.3rem";
    console.log("valid username");
  } else {
    myUserNameSignUp.style.border = "2px solid orange";
    wrongUsernameSignUp.innerText = "Username: needs to be 4 to 12 characters ";
    wrongUsernameSignUp.style.fontSize = "1rem";
    console.log("invalid username");
  }
  validateSignUpForm();
});

myUserEmailSignUp.addEventListener("keyup", (e) => {
  let emailSignUp = myUserEmailSignUp.value;
  let emailSignUpRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  isEmailValidSignUp = emailSignUpRegEx.test(emailSignUp);
  const wrongEmailSignUp = document.getElementById("labelEmailSignUp");

  if (isEmailValidSignUp) {
    myUserEmailSignUp.style.border = "2px solid green";
    wrongEmailSignUp.innerText = "Email";
    wrongEmailSignUp.style.fontSize = "1.3rem";
    console.log("valid email");
  } else {
    myUserEmailSignUp.style.border = "2px solid orange";
    wrongEmailSignUp.innerText = "Email: needs to be a valid email";
    wrongEmailSignUp.style.fontSize = "1rem";
    console.log("invalid email");
  }
  validateSignUpForm();
});

myPasswordSignUp.addEventListener("keyup", (e) => {
  let passwordSignUp = myPasswordSignUp.value;
  let passwordSignUpRegEx = /^[a-zA-Z0-9]{8,15}$/;

  isPasswordValidSignUp = passwordSignUpRegEx.test(passwordSignUp);
  const wrongPasswordSignUp = document.getElementById("labelPasswordSignUp");

  if (isPasswordValidSignUp) {
    myPasswordSignUp.style.border = "2px solid green";
    wrongPasswordSignUp.innerText = "Password";
    wrongPasswordSignUp.style.fontSize = "1.3rem";
    console.log("valid Password");
  } else {
    myPasswordSignUp.style.border = "2px solid orange";
    wrongPasswordSignUp.innerText = "Password: needs to be 8 to 15 characters";
    wrongPasswordSignUp.style.fontSize = "1rem";
    console.log("invalid Password");
  }
  validateSignUpForm();
});

submitButtonSignUp.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Form submitted successfully!");
  formContainer.style.visibility = "hidden";
});

function validateSignUpForm() {
  console.log(isUsernameValidSignUp, isEmailValidSignUp, isPasswordValidSignUp);
  if (isUsernameValidSignUp && isEmailValidSignUp && isPasswordValidSignUp) {
    submitButtonSignUp.disabled = false;
  } else {
    submitButtonSignUp.disabled = true;
  }
}
