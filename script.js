var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // variable password holds anything added from specialCharacters, numbers, uppercaseLetters, and lowercaseLetters
  var password = "";
  var passwordLength = prompt(
    "How many characters would you like your password to contain? Enter a number between 8 and 128."
  );
  //final password will be displayed at the end and pulls information from password
  var finalPassword = "";

  //first if condition must be met for the rest of the program to run - if not, an alert will prompt the user to enter a number within the specified criteria
  if (passwordLength < 8 || passwordLength > 128) {
    //initial prompt
    alert("Please select a number between 8 and 128.");
    generatePassword();
  } else {
    //secondary confirms
    var specialCharacters = "!@#$%^&*()_?<>";
    var confirmCharacters = confirm(
      "Click OK to confirm including special characters."
    );

    var numbers = "1234567890";
    var confirmNumbers = confirm("Click OK to confirm including numbers.");

    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var confirmUppercaseLetters = confirm(
      "Click OK to confirm including uppercase letters."
    );

    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var confirmLowercaseLetters = confirm(
      "Click OK to confirm including lowercase letters."
    );

    //the following if statements provide the information to fill the empty password string with the required information
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

    // this conditional displays an alert if the user selects false for each conditional, therefore adding no information to the blank password string, returns a blank final password string to the user
    if (
      confirmCharacters == false &&
      confirmNumbers == false &&
      confirmUppercaseLetters == false &&
      confirmLowercaseLetters == false
    ) {
      alert("Please select at least one option.");
      return "";
    }
//for loop that selects a random number and multiplies it by the password length to generate the final password 
    for (var i = 0; i < passwordLength; i++) {
      var randomCharacter = Math.floor(Math.random() * password.length);
      finalPassword = finalPassword + password[randomCharacter];
    }
//finally, the finalPassword is displayed
    return finalPassword;
  }
}
// generate button
generateBtn.addEventListener("click", writePassword);

