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
    var randomChars = Math.floor(Math.random()*arr.charLength);
    var randomElement = arr[randomChars];

    return randomElement;
}

function generate() {
    var options = makeitso();
    var results = [];
    var possibleChar = [];
    var chooseChar = [];

    if (options.specialCharY) {
        possibleChar = possibleChar.concat(specialChar);
        chooseChar.push(randomize(specialChar));
    }
    if (options.numericCharY) {
        possibleChar = possibleChar.concat(numericChar);
        chooseChar.push(randomize(numericChar));
    }
    if (options.lowerCharY) {
        possibleChar = possibleChar.concat(lowerChar);
        chooseChar.push(randomize(lowerChar));
    }
    if (options.upperCharY) {
        possibleChar = possibleChar.concat(upperChar);
        chooseChar.push(randomize(upperChar));
    }
    for (var i=0; i<options.charLength; i++) {
        var possibleChar = randomize(possibleChar);
        results.push(possibleChar);
    }
    for (var i=0; i<chooseChar.charLength; i++) {
        results[i] = chooseChar[i];
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