const myUserNameElement = document.getElementById("username");
const myPasswordElement = document.getElementById("password");
const myUserEmailElement = document.getElementById("email");

const submitButton = document.getElementById("submitButton");

let isPasswordValid = false;
let isUsernameValid = false;
let isEmailValid = false;

submitButton.disabled = true;

myUserNameElement.addEventListener("keyup", () => {
  let username = myUserNameElement.value;
  let usernameRegEx = /^[\w\d.-]{4,12}$/;
  isUsernameValid = usernameRegEx.test(username);

  if (isUsernameValid) {
    myUserNameElement.style.border = "2px solid green";
    console.log("valid username");
  } else {
    myUserNameElement.style.border = "2px solid orange";
    console.log("invalid username");
    const wrongUsername = document.getElementById("labelUsername");
    wrongUsername.innerText = "username: need to be 4 to 12 characters long";
  }
  validateForm();
});

myPasswordElement.addEventListener("keyup", (e) => {
  let password = myPasswordElement.value;
  let passwordRegEx = /^[a-zA-Z0-9]{8,15}$/;

  isPasswordValid = passwordRegEx.test(password);

  if (isPasswordValid) {
    myPasswordElement.style.border = "1px solid green";
    myPasswordElement.style.outline = "none";
    console.log("valid");
  } else {
    myPasswordElement.style.border = "1px solid red";
    myPasswordElement.style.outline = "none";
    console.log("invalid");
    const wrongPassword = document.getElementById("labelPassword");
    wrongPassword.innerText =
      "Password: need to be 8 to 15 characters long only letters and numbers";
  }
  validateForm();
});

myUserEmailElement.addEventListener("keyup", (e) => {
  let email = myUserEmailElement.value;
  let emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  isEmailValid = emailRegEx.test(email);

  if (isEmailValid) {
    myUserEmailElement.style.border = "1px solid green";
    console.log("valid email");
    submitButton.disabled = false;
  } else {
    myUserEmailElement.style.border = "1px solid red";
    console.log("invalid email");
    const wrongEmail = document.getElementById("labelEmail");
    wrongEmail.innerText = "Email: need to have a valid email";
  }
  validateForm();
});
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Form submitted successfully!");
  let formContainer = document.getElementById("formContainer");
  formContainer.style.display = "none";
});

function validateForm() {
  console.log(isPasswordValid, isUsernameValid, isEmailValid);
  if (isPasswordValid && isUsernameValid && isEmailValid) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

const signUp = document.getElementById("signUp");
const closeSignUp = document.getElementById("closeSignUp");

// SignUp/IN
// Show
signUp.addEventListener("click", (e) => {
  formContainer.style.visibility = "visible";
});

// Close
closeSignUp.addEventListener("click", (e) => {
  formContainer.style.visibility = "hidden";
  myUserNameElement.value = "";
  myPasswordElement.value = "";
  myUserEmailElement.value = "";
});
