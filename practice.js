var generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  alert("Let's generate a new Password! \nFor this app Ok = Yes  Cancel = No");

  // prompt for length of password
  var pswdLength = prompt("How many characters will be in your password? Choose 8 to 128.");

  // validates password length 8 to 128 - app will not progress without proper length
  if (pswdLength < 8 || pswdLength > 128) {
    alert("Try again! Choose a length 8 to 128 characters."); 
    return("Click the red button to try again!");
  } else {
    // if length is within requirements, app progresses - ask (confirm) type of characters to include in password
    var upCase = confirm("Include uppercase characters?");
    var lowCase = confirm("Include lowercase characters?");
    var numbers = confirm("Include numbers?");
    var special = confirm("Include special characters?"); 
  // validates characters - if no chars chosen, app will not progress
  if (!upCase && !lowCase && !numbers && !special) {
    alert("Try again! Your password must include characters.");
    return("Click the red button to try again!");
  } else {
  //if chars are chosen, app progresses - take randomized user choice of chars and put into an array  - .push();
  var chosenCharsArray = [" "];
  // define passwordText inside function as empty string to have somewhere to put chosen random charachers (the passwword)
  var passwordText = " "; 
 // for loop array over user choice for length of password
  var i = chosenCharsArray
  for (i = 0; i < pswdLength.length; i++) { 
    console.log(chosenCharsArray);

    if (upCase) {
      chosenCharsArray.push(upCaseChar());
    }
    if (lowCase) {
      chosenCharsArray.push(lowCaseChar());
    }
    if (numbers) {
      chosenCharsArray.push(numChar());
    }
    if (special) {
      chosenCharsArray.push(specChar());
    }
     // take the random chosen chars from the array and then randomize their order to make the passwordText
    var randomOrderOfChars = Math.floor(Math.random() * chosenCharsArray.length); 
    
    passwordText = chosenCharsArray[randomOrderOfChars];    
  }}
}

// call the function after you write it!!
generatePassword();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// if chars are chosen, take all char choices and put each of them in random order
// calling these functions line 41 - 51
function upCaseChar() {
  var upCaseChars = "ABCDEFGHIHKLMNOPQRSTUVWXYZ";
    return upCaseChars[Math.floor(Math.random() * upCaseChars.length)];
};

function lowCaseChar() {
  var lowCaseChars = "abcdefghijklmnopqrstuvwxyz";
    return lowCaseChars[Math.floor(Math.random() * lowCaseChars.length)];
};

function numChar() {
  var numChars = "123456789";
    return numChars[Math.floor(Math.random() * numChars.length)];
};

function specChar() {
  var specChars = "!@#$%&?";
    return specChars[Math.floor(Math.random() * specChars.length)];
};