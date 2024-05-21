// signUp
const signUp = document.getElementById("signUp");
const closeSignUp = document.getElementById("closeSignUp");
const formContainerSignUp = document.getElementById("formContainerSignUp");

signUp.addEventListener("click", (e) => {
  formContainerSignUp.style.visibility = "visible";
});

closeSignUp.addEventListener("click", (e) => {
  formContainerSignUp.style.visibility = "hidden";
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
  formContainerSignUp.style.visibility = "hidden";
});

function validateSignUpForm() {
  console.log(isUsernameValidSignUp, isEmailValidSignUp, isPasswordValidSignUp);
  if (isUsernameValidSignUp && isEmailValidSignUp && isPasswordValidSignUp) {
    submitButtonSignUp.disabled = false;
  } else {
    submitButtonSignUp.disabled = true;
  }
}

// signIn
const signIn = document.getElementById("signIn");
const closeSignIn = document.getElementById("closeSignIn");
const formContainerSignIn = document.getElementById("formContainerSignIn");

signIn.addEventListener("click", (e) => {
  formContainerSignIn.style.visibility = "visible";
});

closeSignIn.addEventListener("click", (e) => {
  formContainerSignIn.style.visibility = "hidden";
});

const myUserNameSignIn = document.getElementById("usernameSignIn");
const myPasswordSignIn = document.getElementById("passwordSignIn");

const submitButtonSignIn = document.getElementById("submitButtonSignIn");

let isUsernameValidSignIn = false;
let isPasswordValidSignIn = false;

submitButtonSignIn.disabled = true;

myUserNameSignIn.addEventListener("keyup", (e) => {
  let usernameSignIn = myUserNameSignIn.value;
  let usernameSignInRegEx = /^[\w\d.-]{4,12}$/;
  isUsernameValidSignIn = usernameSignInRegEx.test(usernameSignIn);
  const wrongUsernameSignIn = document.getElementById("labelUsernameSignIn");

  if (isUsernameValidSignIn) {
    myUserNameSignIn.style.border = "2px solid green";
    wrongUsernameSignIn.innerText = "Username";
    wrongUsernameSignIn.style.fontSize = "1.3rem";
    console.log("valid username");
  } else {
    myUserNameSignIn.style.border = "2px solid orange";
    wrongUsernameSignIn.innerText = "Username: needs to be 4 to 12 characters ";
    wrongUsernameSignIn.style.fontSize = "1rem";
    console.log("invalid username");
  }
  validateSignInForm();
});

myPasswordSignIn.addEventListener("keyup", (e) => {
  let passwordSignIn = myPasswordSignIn.value;
  let passwordSignInRegEx = /^[a-zA-Z0-9]{8,15}$/;

  isPasswordValidSignIn = passwordSignInRegEx.test(passwordSignIn);
  const wrongPasswordSignIn = document.getElementById("labelPasswordSignIn");

  if (isPasswordValidSignIn) {
    myPasswordSignIn.style.border = "2px solid green";
    wrongPasswordSignIn.innerText = "Password";
    wrongPasswordSignIn.style.fontSize = "1.3rem";
    console.log("valid Password");
  } else {
    myPasswordSignIn.style.border = "2px solid orange";
    wrongPasswordSignIn.innerText = "Password: needs to be 8 to 15 characters";
    wrongPasswordSignIn.style.fontSize = "1rem";
    console.log("invalid Password");
  }
  validateSignInForm();
});

submitButtonSignIn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Form submitted successfully!");
  formContainerSignIn.style.visibility = "hidden";
});

function validateSignInForm() {
  console.log(isUsernameValidSignIn, isPasswordValidSignIn);
  if (isUsernameValidSignIn && isPasswordValidSignIn) {
    submitButtonSignIn.disabled = false;
  } else {
    submitButtonSignIn.disabled = true;
  }
}










// gallerykarusel

let myForwardButton = document.getElementById("forward");
let myBackButton = document.getElementById("back");

let imageArray = [
  "assets/images/Uploads/berserk-One.jpg",
  "assets/images/Uploads/berserk-Two.jpg",
  "assets/images/Uploads/berserk-Three.jpg",
  "assets/images/Uploads/berserk-Four.jpg",
];

let galleryImageElement = document.getElementById('galleryImage');
let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("modalImage");
let span = document.getElementsByClassName("close")[0];

let currentImage = 0;

galleryImageElement.src = imageArray[currentImage];

galleryImageElement.addEventListener('click', (e) => {
  modal.style.display = "block";
  modalImg.src = e.target.src;
});

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
myForwardButton.addEventListener("click", (e) => {
  currentImage = currentImage + 1;

  if (currentImage == imageArray.length) {
    currentImage = 0;
  }
  changeImage();
});

myBackButton.addEventListener("click", (e) => {
  currentImage = currentImage - 1;

  if (currentImage < 0) {
    currentImage = 3;
  }
  changeImage();
});


function changeImage() {
  console.log(imageArray[currentImage]);
  galleryImageElement.src = imageArray[currentImage];
}
