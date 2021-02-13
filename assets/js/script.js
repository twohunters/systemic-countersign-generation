var specialChar = ["`","~","!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",";",":",",",".","<",">","/","?"];
var numericChar = ["1","2","3","4","5","7","6","8","9","0"];
var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"];
var upperChar = ["A","B","C","D","E","F","G","H","I","J","K","M","L","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

function makeitso() {

    var lengthChar = parseInt(prompt("How many characters will your password contain? Must be 8-128"));

    if (isNaN(lengthChar) === true) {
        alert("Must be a number");
        return;
    }
    if (lengthChar < 8) {
        alert("Must be at least 8 characters");
        return;
    }
    if (lengthChar > 128) {
        alert("Must be no more than 128 characters");
        return;
    }

    var specialCharY = confirm("Include special characters?");
    var numericCharY = confirm("Include numbers?");
    var lowerCharY = confirm("Include lowercase letters?");
    var upperCharY = confirm("Include uppercase letters?");

    if (
        specialCharY === false &&
        numericCharY === false &&
        lowerCharY === false &&
        upperCharY === false
        ) {
        alert("Must include at least one type of character");
        return;
        }
    
    var characterCombo = {
        lengthChar: lengthChar,
        specialCharY: specialCharY,
        numericCharY: numericCharY,
        lowerCharY: lowerCharY,
        upperCharY: upperCharY
    };

    return characterCombo;
}

function randomize(arr) {
    var randomChars = Math.floor(Math.random()*arr.lengthChar);
    var randomResult = arr[randomChars];

    return randomResult;
}

function generate() {
    var options = makeitso();
    var results = [];
    var possibleChar = [];
    var chosenChar = [];
    
    if (options.specialCharY) {
        possibleChar = possibleChar.concat(specialChar);
        chosenChar.push(randomize(specialChar));
    }
    if (options.numericCharY) {
        possibleChar = possibleChar.concat(numericChar);
        chosenChar.push(randomize(numericChar));
    }
    if (options.lowerCharY) {
        possibleChar = possibleChar.concat(lowerChar);
        chosenChar.push(randomize(lowerChar));
    }
    if (options.upperCharY) {
        possibleChar = possibleChar.concat(upperChar);
        chosenChar.push(randomize(upperChar));
    }
    for (var i=0; i < options.lengthChar; i++) {
        var possibleChar = randomize(possibleChar);
        results.push(possibleChar);
    }
    for (var i=0; i < chosenChar.lengthChar; i++) {
        results[i] = chosenChar[i];
    }

    return results.join("");
}

var engage = document.querySelector("#redbutton");

function makePassword() {
    var password = generate();
    var passwordDisplay = document.querySelector("#passwordbox");

    passwordDisplay.value = password;
}

engage.addEventListener("click", makePassword);