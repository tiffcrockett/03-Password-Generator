var generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}  

// get random characters to be used in password generator
function upCaseChar() {
  var upCaseChars = "ABCDEFGHIHKLMNOPQRSTUVWXYZ";
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97); 
}
function lowCaseChar() {
  var lowCaseChars = "abcdefghijklmnopqrstuvwxyz";
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function numChar() {
  var numChars = "123456789";
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function specChar() {
  var specChars = "!@#$%&?";
    return specChars[Math.floor(Math.random() * specChars.length)];
}

// generate the password
function generatePassword() {
  // instruction to the user
  alert("Let's generate a new Password! \nFor this app Ok = Yes  Cancel = no");

  // ask length of password, validate required parameters of 8 to 128 - app will not proceed unless valid input
  var pswdLength = prompt("How many characters will be in your password? Choose 8 to 128");
  if (pswdLength < 8 || pswdLength > 128) {
    alert("Try again! Choose a length 8 to 128 characters.");
    return("Click the red button to try again!"); 

    // app proceeding - ask what characters to include in password
  } else { 
    var upCase = confirm("Include uppercase characters?");
    var lowCase = confirm("Include lowercase characters?");
    var numbers = confirm("Include numbers?");
    var special = confirm("Include special characters?");
  // validate at least one char type is included - app will not proceed unless valid input
  if (!upCase && !lowCase && !numbers && !special) {
    alert("Try agian! Your password must contain characters.");
    return("Click the red button to try again!"); 

    // app proceeding - put user char choices in an empty array
  } else {
    var chosenCharArray = [];
    // define passwordText inside function as empty string to have somewhere to put the passwordText
    passwordText = " "; 

    // for loop array over chosen password length
    // define i to get function to work
    var i = pswdLength;
    for (i = 0; i < pswdLength.length; i++) { 
      console.log(chosenCharArray);

      if (upCase) {
        chosenCharArray.push(upCaseChar());
      } 
      if (lowCase) {
        chosenCharArray.push(lowCaseChar());
      } 
      if (numbers) {
        chosenCharArray.push(numChar());
      } 
      if (special) {
        chosenCharArray.push(specChar());
      } 
      //rearrange chosenCharArray characters - put them in random order - function?
      var rndmOrdArrChars = Math.floor(Math.random() * chosenCharArray.length);
      passwordText = chosenCharArray[rndmOrdArrChars]; 
      return passwordText;  
      }
    }   
  } 
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
