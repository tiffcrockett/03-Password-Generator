    
  
    // an array to put user choices (true) and
      //  for loop the user choices through the length of password = passwordText

// Assignment Code 
var generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword() { 
  var start = alert("Let's generate a new Password! \n For this app Ok = Yes  Cancel = No");
    
  // prompt for length of password
  var pswdLength = prompt("How many characters will be in your password? Choose 8 to 128.");
  // validates password length 8 to 128 - app will not progress without proper length char
  if (pswdLength < 8 || pswdLength > 128) {
    alert("Try again! Choose a length 8 to 128 characters."); 
      return("Click the red button to try again!");
  } else {
      false;
  } 
  // confirm type of characters included in password
  var upCase = confirm("Include uppercase characters?");
  var lowCase = confirm("Include lowercase characters?");
  var numChar = confirm("Include numbers?");
  var specChar = confirm("Include special characters?");  
  // validates characters - app will not progress without at lease one type of char 
  if (!upCase && !lowCase && !numChar && !specChar) {
    alert("Try again! Your password must include characters.");
      return("Click the red button to try again!");
  } else {
      false;
  }
  // provide char and function for random selection
  function upCaseChar() {
    var upCaseChars = "ABCDEFGHIHKLMNOPQRSTUVWXYZ"
      return upCaseChars[Math.floor(Math.random() * upCaseChars.length)]
  }; 

  function lowCaseChar() {
    var lowCaseChars = "abcdefghijklmnopqrstuvwxyz"
      return upCaseChars[Math.floor(Math.random() * upCaseChars.length)]
  }; 

  function numChar() {
    var numChars = "123456789"
      return numChars[Math.floor(Math.random() * numChars.length)]
  }; 

  function specChar() {
    var specChars = "!@#$%&?"
      return specChars[Math.floor(Math.random() * specChars.length)]
  }; 

  //capture user choice of characters and into an array 
  
  // for loop array over the user choice for length of password 

  //  = passwordText m 


};
  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
