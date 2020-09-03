// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var passwordLength = prompt(
    "How many characters would you like your password to contain? Enter a number between 8 and 128."
  );

  // options for pass word length (at least 8 characters and no more than 128 characters)

  // prompt("How many characters would you like your password to contain? Enter a value between 8 and 128.")

  //options for pass word types to include (lowercase, uppercase, numeric, and/or special characters)

  //  "Click okay to include special characters" (okay and cancel options, use boolean?)

  var finalPassword = "";

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a number between 8 and 128.");
    generatePassword();
  } else {
    var specialCharacters = "!@#$%^&*()_?<>";
    var confirmCharacters = confirm(
      "Click OK to confirm including special characters."
    );
    //  "Click okay to include numbers" (okay and cancel options, use boolean?)
    var numbers = "1234567890";
    var confirmNumbers = confirm("Click OK to confirm including numbers.");
    //  "Click okay to include uppercase letters" (okay and cancel options, use boolean?)
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var confirmUppercaseLetters = confirm(
      "Click OK to confirm including uppercase letters."
    );
    //  "Click okay to include lowercase letters"(okay and cancel options, use boolean?)
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var confirmLowercaseLetters = confirm(
      "Click OK to confirm including lowercase letters."
    );
    if (confirmCharacters == true) {
      password = password + specialCharacters;
    }
    if (confirmNumbers == true) {
      password = password + numbers;
    }

    if (confirmUppercaseLetters == true) {
      password = password + uppercaseLetters;
    }
    if (confirmLowercaseLetters == true) {
      password = password + lowercaseLetters;
    }

    if (
      confirmCharacters == false &&
      confirmNumbers == false &&
      confirmUppercaseLetters == false &&
      confirmLowercaseLetters == false
    ) {
      alert("Please select at least one option.");
      return "";
    }

    for (var i = 0; i < passwordLength; i++) {
      var randomCharacter = Math.floor(Math.random() * password.length);
      finalPassword = finalPassword + password[randomCharacter];
    }

    return finalPassword;
  }
}
// generate button
generateBtn.addEventListener("click", writePassword);


