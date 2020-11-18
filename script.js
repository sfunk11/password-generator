var numbers = "0123456789";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length,finalString);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getCriteria(){
  var num = confirm("Press Confirm if you would like your password to contain numbers.");
  var lower = confirm("Press Confirm if you would like lower case letters in your password");
  var upper = confirm("Press confirm if you would like upper case letters in your password.");
  var special = confirm("Press confirm if you would like special characters in your password.");

  if(num){
    finalString = numbers;
  }
  if(lower) {
    finalString = finalString + lowerLetters;
  }
  if(upper) {
    finalString = finalString + upperLetters;
  }
  if(special){
    finalString = finalString + specialCharacters;
  }

 return (finalString);
 
}

function generatePassword(passwordLength,finalString) {
 var result = "";
  for(var i = 0; i < passwordLength; i++){ 
var random = Math.floor(Math.random() * finalString.length);
   result += finalString.charAt(random);
  }
   console.log(result);
  return(result);

}

// Prompt for Password Length
var passwordLength = prompt("How long would you like your password to be? It can be 8 to 128 char long.");
var length = parseInt(passwordLength, 10);

// Call the functions to generate the password
getCriteria();
writePassword();