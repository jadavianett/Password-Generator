// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(onclick="generateBtn") {
  var passwordLength = prompt("How many characters would you like your password to contain? Enter a number between 8 and 128."); 
  
  
// options for pass word length (at least 8 characters and no more than 128 characters)

// prompt("How many characters would you like your password to contain? Enter a value between 8 and 128.")

//options for pass word types to include (lowercase, uppercase, numeric, and/or special characters)

//  "Click okay to include special characters" (okay and cancel options, use boolean?)
var specialCharacters = "!@#$%^&*()_?<>";
var confirmCharacters = confirm("Click OK to confirm including special characters.");
//  "Click okay to include numbers" (okay and cancel options, use boolean?)
var numbers = "1234567890"
var confirmNumbers = confirm("Click OK to confirm including numbers.");
//  "Click okay to include uppercase letters" (okay and cancel options, use boolean?)
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var confirmUppercaseLetters = confirm("Click OK to confirm including uppercase letters.");
//  "Click okay to include lowercase letters"(okay and cancel options, use boolean?)
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
var confirmlowercaseLetters = confirm("Click OK to confirm including lowercase letters.");



//pass word generated and displays in generate password box 
  // TODo: generate a real password and replace return string with a real password string 
  return "THIS IS NOT MY FINAL PASSWORD!"
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// something like this for random key gen

// function makeid(length) {
//    var result           = '';
//    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }




