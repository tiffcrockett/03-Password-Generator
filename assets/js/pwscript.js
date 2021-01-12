var generateBtn = document.querySelector("#generate");  

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}  
function generatePassword() {   
    
    // instruction to the user
    alert("Let's generate a new Password! \nFor this app  Ok = Yes  Cancel = No");

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
     
    } else {
        // app proceeding - put user char in string 
        var upCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var lowCaseChars = "abcdefghijklmnopqrstuvwxyz";
        var numbersChars = "123456789";
        var specialChars = "!@#$%&";
        var requiredChars = "?!/";   

        var includedChars = "";

        if (upCase) {
            includedChars = requiredChars + includedChars.concat(upCaseChars);
        } 
        if (lowCase) {
            includedChars = requiredChars + includedChars.concat(lowCaseChars); 
        } 
        if (numbers) {
            includedChars = requiredChars + includedChars.concat(numbersChars); 
        }
        if (special) {
            includedChars = requiredChars + includedChars.concat(specialChars);
        } 
        var passwordText = []; 
        for (var i = 0; i < pswdLength; i ++) {
            var randomChars = includedChars[Math.floor(Math.random() * includedChars.length)];
            passwordText.push(randomChars);
        }
            return passwordText.join("");
        }   
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
